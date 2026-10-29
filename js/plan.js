// Logique de révision : répétition espacée, séance du soir, diagnostic, suivi Global Exam.
import * as store from './store.js';
import { RULES, RULE, QUESTIONS, QUESTION } from './content/grammar.js';
import { THEMES, WORDS } from './content/vocab.js';
import { today, addDays, daysBetween, mondayOf, shuffle } from './util.js';

export const EXAM = '2027-04-09';
export const START = '2026-12-07';
export const GE_HOURS = 27;
export const GE_PASS = 70;
export const TARGET = 850;

// ---------- Répétition espacée (boîtes de Leitner) ----------
// Intervalle en jours selon la boîte : 1 = demain … 7 = dans 4 mois.
const STEPS = [0, 1, 3, 7, 14, 30, 60, 120];

export function review(key, ok, { fresh = false } = {}) {
  const t = today();
  const cur = store.get('srs', key) || { b: 0, n: 0, lp: 0 };
  let b;
  if (fresh) b = ok ? (key.startsWith('g:') ? 3 : 2) : 1;
  else b = ok ? Math.min(7, cur.b + 1) : 1;
  store.patch('srs', key, { b, n: cur.n + 1, lp: cur.lp + (ok ? 0 : 1), due: addDays(t, STEPS[b]), last: t, ok });
}

// Mots : ceux du programme + ceux ajoutés à la main.
export function allWords() {
  const mine = store.all('words').map(([id, w]) => ({ ...w, id, t: 'perso' }));
  return [...WORDS, ...mine];
}
export function wordById(id) {
  if (id.startsWith('u')) { const w = store.get('words', id); return w ? { ...w, id, t: 'perso' } : null; }
  return WORDS.find(w => w.id === id) || null;
}
const itemExists = k => {
  const [p, id] = [k[0], k.slice(2)];
  if (p === 'g') return !!QUESTION[id];
  if (p === 'v') return !!wordById(id);
  if (p === 'e') return !!store.get('errors', id);
  return false;
};

export function dueList(t = today()) {
  return store.all('srs').filter(([k, r]) => r.due <= t && itemExists(k)).sort(([, a], [, b]) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.b - b.b));
}
export const seen = key => !!store.get('srs', key);

// ---------- Plan des thèmes ----------
export function planMeta() { return store.get('meta', 'plan') || null; }
export function ensurePlan() {
  let p = planMeta();
  if (!p) p = store.patch('meta', 'plan', { start: mondayOf(today() < START ? today() : START), order: RULES.map(r => r.id) });
  if (today() < p.start) p = store.patch('meta', 'plan', { start: mondayOf(today()) });
  return p;
}
export function weekIndex(t = today()) {
  const p = planMeta(); if (!p) return 0;
  return Math.max(0, Math.floor(daysBetween(p.start, t) / 7));
}
// Thème de la semaine : l'ordre du plan pendant 8 semaines, puis le thème le plus faible du moment.
export function ruleOfWeek(t = today()) {
  const p = planMeta();
  const order = p?.order?.length ? p.order : RULES.map(r => r.id);
  const w = weekIndex(t);
  if (w < order.length) return { id: order[w], mix: false, week: w + 1 };
  const m = mastery();
  const weakest = [...order].sort((a, b) => (m[a]?.p ?? 0) - (m[b]?.p ?? 0))[0];
  return { id: weakest, mix: true, week: w + 1 };
}
export function vocabTheme() {
  const pick = planMeta()?.vtheme;
  if (pick && WORDS.some(w => w.t === pick && !seen(`v:${w.id}`))) return pick;
  return THEMES.find(t => WORDS.some(w => w.t === t.id && !seen(`v:${w.id}`)))?.id || THEMES[0]?.id;
}

// ---------- Maîtrise par thème ----------
// Réussite sur les 30 derniers jours ; à défaut, résultat du diagnostic.
export function mastery(days = 30) {
  const from = addDays(today(), -days);
  const acc = {};
  for (const [d, r] of store.all('days')) {
    if (d < from || !r.r) continue;
    for (const [id, [ok, n]] of Object.entries(r.r)) { acc[id] ||= [0, 0]; acc[id][0] += ok; acc[id][1] += n; }
  }
  const diag = store.get('meta', 'diag');
  const out = {};
  for (const r of RULES) {
    const a = acc[r.id], g = diag?.r?.[r.id];
    if (a && a[1] >= 5) out[r.id] = { p: a[0] / a[1], n: a[1], src: 'recent' };
    else if (g) out[r.id] = { p: g[0] / g[1], n: g[1], src: 'diag' };
  }
  return out;
}

// ---------- Construction des séances ----------
// Une séance = liste d'étapes : rule (fiche), g (question), v (mot nouveau), vr (mot à revoir), e (erreur du carnet).
function newGrammar(ruleId, n, exclude = new Set()) {
  return QUESTIONS.filter(q => q.rule === ruleId && !seen(`g:${q.id}`) && !exclude.has(q.id))
    .sort((a, b) => a.lvl - b.lvl || (Math.random() - .5)).slice(0, n);
}

export function buildEvening({ extra = false } = {}) {
  ensurePlan();
  const t = today();
  const steps = [];
  const rw = ruleOfWeek();
  const ruleSeen = store.get('meta', 'ruleSeen');
  const weekKey = `${weekIndex()}|${rw.id}`;
  if (!extra && ruleSeen?.k !== weekKey) steps.push({ k: 'rule', id: rw.id, weekKey });

  // Nouvelles questions sur le thème de la semaine (puis thème suivant si épuisé)
  let fresh = newGrammar(rw.id, extra ? 3 : 4);
  if (fresh.length < 3) {
    const m = mastery();
    const others = RULES.map(r => r.id).filter(id => id !== rw.id).sort((a, b) => (m[a]?.p ?? .5) - (m[b]?.p ?? .5));
    for (const id of others) { if (fresh.length >= 4) break; fresh = fresh.concat(newGrammar(id, 4 - fresh.length)); }
  }
  // Révisions dues : erreurs du carnet d'abord, puis grammaire, puis mots
  const due = dueList(t).map(([k]) => k);
  const pick = (p, n) => due.filter(k => k[0] === p).slice(0, n);
  let rev = [...pick('e', 4), ...pick('g', 5), ...pick('v', 6)];
  if (rev.length < 10) rev = rev.concat(due.filter(k => !rev.includes(k)).slice(0, 10 - rev.length));
  rev = rev.slice(0, 12);

  // Mots nouveaux du thème en cours
  const vt = vocabTheme();
  const nv = WORDS.filter(w => w.t === vt && !seen(`v:${w.id}`)).slice(0, extra ? 3 : 4);

  const revSteps = shuffle(rev).map(k => ({ k: { g: 'g', v: 'vr', e: 'e' }[k[0]], id: k.slice(2), review: true }));
  const g = fresh.map(q => ({ k: 'g', id: q.id }));
  // On alterne nouveautés et révisions pour garder du rythme
  const mix = [];
  const a = [...g], b = [...revSteps];
  while (a.length || b.length) { if (a.length) mix.push(a.shift()); if (b.length) mix.push(b.shift()); if (b.length) mix.push(b.shift()); }
  steps.push(...mix, ...nv.map(w => ({ k: 'v', id: w.id })));
  return { kind: extra ? 'extra' : 'evening', title: extra ? 'Bonus 5 min' : 'Séance du soir', steps };
}

export function buildRulePractice(ruleId, n = 10) {
  const qs = QUESTIONS.filter(q => q.rule === ruleId);
  const unseen = qs.filter(q => !seen(`g:${q.id}`)).sort((a, b) => a.lvl - b.lvl);
  const missed = qs.filter(q => store.get('srs', `g:${q.id}`)?.ok === false);
  const rest = shuffle(qs.filter(q => !unseen.includes(q) && !missed.includes(q)));
  const list = [...missed.slice(0, 3), ...unseen, ...rest].slice(0, n);
  return { kind: 'practice', title: RULE[ruleId].title, steps: shuffle(list).map(q => ({ k: 'g', id: q.id })) };
}

export function buildVocabPractice(themeId, n = 12) {
  const ws = allWords().filter(w => w.t === themeId);
  const unseen = ws.filter(w => !seen(`v:${w.id}`));
  const known = shuffle(ws.filter(w => seen(`v:${w.id}`)));
  const steps = [...known.slice(0, Math.max(n - Math.min(unseen.length, 6), 0)).map(w => ({ k: 'vr', id: w.id, review: true })),
    ...unseen.slice(0, 6).map(w => ({ k: 'v', id: w.id }))].slice(0, n);
  const th = THEMES.find(t => t.id === themeId);
  return { kind: 'practice', title: th ? th.title : 'Mes mots', steps };
}

export function buildDiagnostic() {
  const steps = [];
  for (const r of RULES) {
    const qs = QUESTIONS.filter(q => q.rule === r.id);
    const by = l => shuffle(qs.filter(q => q.lvl === l));
    steps.push(...[...by(1).slice(0, 1), ...by(2).slice(0, 3), ...by(3).slice(0, 1)].map(q => ({ k: 'g', id: q.id })));
  }
  return { kind: 'diag', title: 'Diagnostic', steps: shuffle(steps) };
}

export function finishDiagnostic(results) {
  const r = {};
  for (const x of results) { const q = QUESTION[x.id]; if (!q) continue; r[q.rule] ||= [0, 0]; r[q.rule][0] += x.ok ? 1 : 0; r[q.rule][1]++; }
  store.patch('meta', 'diag', { d: today(), r });
  const order = RULES.map(x => x.id).sort((a, b) => (r[a] ? r[a][0] / r[a][1] : 1) - (r[b] ? r[b][0] / r[b][1] : 1));
  const p = planMeta();
  // Si le plan a déjà démarré, on ne réordonne que les semaines à venir
  if (p && weekIndex() > 0) {
    const done = p.order.slice(0, weekIndex() + 1);
    store.patch('meta', 'plan', { order: [...done, ...order.filter(id => !done.includes(id))] });
  } else store.patch('meta', 'plan', { start: mondayOf(today() < START ? today() : START), order });
  return r;
}

// Enregistre une réponse dans le journal du jour (stats par thème)
export function logAnswer(step, ok) {
  const t = today();
  const d = store.get('days', t) || {};
  const patch = { n: (d.n || 0) + 1, ok: (d.ok || 0) + (ok ? 1 : 0) };
  if (step.k === 'g') {
    const rule = QUESTION[step.id]?.rule;
    const r = { ...(d.r || {}) }; const cur = r[rule] || [0, 0];
    r[rule] = [cur[0] + (ok ? 1 : 0), cur[1] + 1]; patch.r = r;
  }
  if (step.k === 'v') patch.nv = (d.nv || 0) + 1;
  store.patch('days', t, patch);
}
export function logSessionEnd(sec, kind) {
  const t = today(); const d = store.get('days', t) || {};
  store.patch('days', t, { sess: (d.sess || 0) + 1, sec: (d.sec || 0) + sec, ...(kind === 'evening' ? { ev: (d.ev || 0) + 1 } : {}) });
}

// ---------- Global Exam ----------
export const normName = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
export function geStats(t = today()) {
  const ses = store.all('ge').map(([id, r]) => ({ id, ...r })).sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : (a.u || 0) - (b.u || 0)));
  const min = ses.reduce((s, x) => s + (x.min || 0), 0);
  const mods = new Map();
  for (const x of ses.filter(x => x.kind === 'module' && x.name)) {
    const k = normName(x.name);
    const m = mods.get(k) || { name: x.name, best: null, tries: 0, last: x.d, cat: x.cat || '' };
    m.tries++; m.last = x.d; m.name = x.name; if (x.cat) m.cat = x.cat;
    if (x.score != null && (m.best == null || x.score > m.best)) m.best = x.score;
    mods.set(k, m);
  }
  const modules = [...mods.values()];
  const scored = modules.filter(m => m.best != null);
  const avg = scored.length ? scored.reduce((s, m) => s + m.best, 0) / scored.length : null;
  const mocks = ses.filter(x => x.kind === 'blanc' && (x.L != null || x.R != null || x.total != null))
    .map(x => ({ d: x.d, L: x.L, R: x.R, total: x.total ?? ((x.L || 0) + (x.R || 0)) }));
  const hours = min / 60;
  const left = Math.max(0, GE_HOURS - hours);
  const weeksLeft = Math.max(daysBetween(t, EXAM) / 7, 0.1);
  const recentMin = ses.filter(x => x.d > addDays(t, -28)).reduce((s, x) => s + (x.min || 0), 0);
  const ratePerWeek = recentMin / 60 / 4;
  const eta = left <= 0 ? null : ratePerWeek > 0 ? addDays(t, Math.ceil((left / ratePerWeek) * 7)) : null;
  const weekMin = ses.filter(x => x.d >= mondayOf(t)).reduce((s, x) => s + (x.min || 0), 0);
  return { ses, hours, left, modules, avg, pass: scored.filter(m => m.best >= GE_PASS).length, mocks,
    needPerWeek: left / weeksLeft, ratePerWeek, eta, weekMin };
}

// ---------- Activité / série ----------
export function activeDates() {
  const s = new Set();
  for (const [d, r] of store.all('days')) if (r.sess || r.n) s.add(d);
  for (const [, r] of store.all('ge')) if (r.d) s.add(r.d);
  return s;
}
export function streak() {
  const s = activeDates();
  let d = today(), n = 0;
  if (!s.has(d)) d = addDays(d, -1);
  while (s.has(d)) { n++; d = addDays(d, -1); }
  return n;
}
export const examCountdown = () => Math.max(0, daysBetween(today(), EXAM));

export { RULES, RULE, QUESTIONS, QUESTION, THEMES, WORDS };
