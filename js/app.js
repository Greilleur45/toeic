import * as store from './store.js';
import * as sync from './sync.js';
import * as P from './plan.js';
import { TEXTS } from './content/reading.js';
import { lineChart, bindTips } from './charts.js';
import { today, addDays, daysBetween, mondayOf, parseDate, longDate, shortDate, esc, uid, normWord, levenshtein, MONTHS } from './util.js';

const { RULES, RULE, QUESTION, THEMES } = P;
const $ = s => document.querySelector(s);
const num = v => (v === '' || v == null || isNaN(+v) ? null : +v);
const TABS = ['today', 'learn', 'ge', 'stats', 'settings'];
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const LETTERS = ['A', 'B', 'C', 'D'];
const POS = { n: 'nom', v: 'verbe', adj: 'adjectif', adv: 'adverbe', expr: 'expression' };

const TIPS = [
  'Partie 5 : regarde d\'abord ce qu\'il y a autour du blanc, pas toute la phrase.',
  'Un blanc entre un déterminant et un nom ? Presque toujours un adjectif.',
  'Partie 7 : lis la question avant le texte, puis cherche la réponse.',
  'Ne bloque jamais plus de 30 s sur une question de Partie 5 : coche et avance.',
  'Le piège classique de la Partie 7 : la réponse qui reprend les mots exacts du texte.',
  'Despite + nom, although + phrase. Toujours.',
  'Since + point de départ, for + durée : les deux appellent le present perfect.',
  '10 minutes chaque soir valent mieux que 2 heures le dimanche.',
  'En Listening, lis les choix de réponse pendant que le speaker parle encore.',
  'After / when / as soon as + présent, même pour parler du futur.',
  'Un adverbe se glisse entre l\'auxiliaire et le participe : has recently been…',
  'Le jour J, il faudra tenir 75 min de Reading : entraîne-toi au chrono.',
];

const state = { tab: 'today', run: null, learn: 'grammar', showQR: false, geKind: 'module', pop: null, skipDiag: false };
const meters = new Map();

function toast(msg) {
  const t = $('#toast'); t.hidden = true; void t.offsetWidth;
  t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => (t.hidden = true), 2600);
}
const buzz = (p = 12) => navigator.vibrate?.(p);

// ---------- Confettis ----------
const COLORS = ['#4c7dff', '#12d6a0', '#ffb547', '#ff6b8b', '#ffffff'];
let parts = [], confRaf = 0;
function confetti(n = 120) {
  if (REDUCED) return;
  const c = $('#confetti'); c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio;
  for (let i = 0; i < n; i++) parts.push({ x: innerWidth / 2, y: innerHeight / 3, vx: (Math.random() - .5) * 14, vy: Math.random() * -12 - 3,
    r: Math.random() * 6 + 3, c: COLORS[i % COLORS.length], a: Math.random() * 6, va: (Math.random() - .5) * .3, life: 1 });
  if (!confRaf) confRaf = requestAnimationFrame(confStep);
}
function confStep() {
  const c = $('#confetti'), ctx = c.getContext('2d'), k = devicePixelRatio;
  ctx.clearRect(0, 0, c.width, c.height);
  parts = parts.filter(p => p.life > 0 && p.y < innerHeight + 20);
  for (const p of parts) {
    p.vy += .32; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.a += p.va; p.life -= .006;
    ctx.save(); ctx.translate(p.x * k, p.y * k); ctx.rotate(p.a); ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.c; ctx.fillRect(-p.r * k / 2, -p.r * k / 4, p.r * k, p.r * k / 2); ctx.restore();
  }
  confRaf = parts.length ? requestAnimationFrame(confStep) : 0;
}

// ---------- Synthèse vocale (prononciation des mots) ----------
function speak(text) {
  if (!('speechSynthesis' in window)) return toast('Pas de voix disponible sur cet appareil');
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = .92;
  const v = speechSynthesis.getVoices().find(v => v.lang === 'en-US') || speechSynthesis.getVoices().find(v => v.lang.startsWith('en'));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
const sayBtn = text => `<button class="say" data-act="say" data-t="${esc(text)}" aria-label="Écouter">🔊</button>`;

// ---------- Petits composants ----------
const meter = (key, p, cls = '') => `<div class="bar ${cls}"><i data-meter="${key}" data-p="${Math.max(0, Math.min(1, p))}"></i></div>`;
const pct = p => (p == null ? '–' : `${Math.round(p * 100)} %`);
const ruleChip = id => RULE[id] ? `<button class="chip" data-act="open-rule" data-id="${id}">${RULE[id].emoji} ${esc(RULE[id].title)}</button>` : '';
const hm = min => { const h = Math.floor(min / 60), m = Math.round(min % 60); return h ? `${h} h${m ? ` ${String(m).padStart(2, '0')}` : ''}` : `${m} min`; };
const fmtH = h => `${h.toFixed(h < 10 ? 1 : 0).replace('.', ',')} h`;

function ring(p, big, small, key) {
  return `<div class="ring-wrap"><svg viewBox="0 0 120 120"><circle class="ring-bg" cx="60" cy="60" r="52"/>
    <circle class="ring-fg" cx="60" cy="60" r="52" pathLength="100" data-meter="${key}" data-p="${Math.max(0, Math.min(1, p))}"/></svg>
    <div class="ring-txt"><b>${big}</b><span>${small}</span></div></div>`;
}

// ============ CE SOIR ============
function todayStats() {
  const d = store.get('days', today()) || {};
  return { n: d.n || 0, ok: d.ok || 0, ev: d.ev || 0, sec: d.sec || 0 };
}

function renderToday() {
  const t = today(), ts = todayStats(), ge = P.geStats(), due = P.dueList().length;
  const jx = P.examCountdown();
  const diag = store.get('meta', 'diag');
  P.ensurePlan();
  const rw = P.ruleOfWeek(), r = RULE[rw.id];
  const goal = 18, p = Math.min(1, ts.n / goal);
  const dow = new Date().getDay(), weekend = dow === 0 || dow === 6;
  const redo = ge.modules.filter(m => m.best != null && m.best < P.GE_PASS).sort((a, b) => b.best - a.best).slice(0, 3);
  const tip = TIPS[daysBetween('2026-01-01', t) % TIPS.length];
  const before = t < P.START;

  return `<div class="page page-today">
  <section class="hero a-hero">
    <div class="eyebrow">${esc(longDate(t))}</div>
    <h1>J-${jx} <small>avant le TOEIC</small></h1>
    <div class="hero-body">
      ${ring(p, ts.n, ts.n > 1 ? 'réponses' : 'réponse', 'today')}
      <div class="hero-stats">
        <div class="hs"><span>Série</span><b>🔥 ${P.streak()} j</b></div>
        <div class="hs"><span>Global Exam</span><b>${fmtH(ge.hours)} / ${P.GE_HOURS} h</b></div>
        <div class="hs"><span>À revoir</span><b>${due} élément${due > 1 ? 's' : ''}</b></div>
      </div>
    </div>
    <p class="hero-quote">💡 ${esc(tip)}</p>
  </section>

  <div class="a-main">
  ${!diag && !state.skipDiag ? `<section class="card cta-card diag-card">
    <div class="card-h"><h2>🎯 Commence par le diagnostic</h2></div>
    <p>40 questions, environ 12 minutes. On mesure ton niveau sur les 8 thèmes de grammaire et l'ordre des semaines s'adapte : tes points faibles d'abord.</p>
    <div class="row"><button class="btn primary" data-act="start-diag">Lancer le diagnostic</button><button class="btn" data-act="skip-diag">Plus tard</button></div>
  </section>` : ''}

  <section class="card cta-card">
    <div class="card-h"><h2>${ts.ev ? '✅ Séance faite' : '🌙 Séance du soir'}</h2><span class="pill">${ts.ev ? `${ts.ok}/${ts.n} justes` : '≈ 10 min'}</span></div>
    ${before ? `<p class="muted">Le programme démarre officiellement le 7 décembre, mais tu peux déjà t'échauffer.</p>` : ''}
    <div class="preview">
      <div class="pv"><span>Thème</span><b>${r.emoji} ${esc(r.title)}</b></div>
      <div class="pv"><span>Révisions</span><b>${Math.min(due, 12)}</b></div>
      <div class="pv"><span>Mots nouveaux</span><b>4</b></div>
    </div>
    ${ts.ev
      ? `<p class="muted">Bien joué. Envie d'aller plus loin ?</p><button class="btn full" data-act="start-evening" data-extra="1">⚡ Encore 5 min</button>`
      : `<button class="btn primary full big" data-act="start-evening">Lancer la séance</button>`}
  </section>

  ${weekend ? `<section class="card ge-hint">
    <div class="card-h"><h2>📅 Week-end Global Exam</h2><span class="pill">${hm(ge.weekMin)} cette semaine</span></div>
    ${redo.length ? `<p class="muted">Modules à refaire en priorité (les plus proches de 70 %) :</p><ul class="mini-list">${redo.map(m => `<li><span>${esc(m.name)}</span><b class="sc ${m.best >= 60 ? 'warn' : 'bad'}">${m.best} %</b></li>`).join('')}</ul>` : '<p class="muted">Avance sur les modules d\'entraînement, puis note chaque session ici.</p>'}
    <button class="btn full" data-act="goto-ge">Saisir une session</button>
  </section>` : ''}

  <section class="card">
    <div class="card-h"><h2>${r.emoji} ${esc(r.title)}</h2><span class="pill">${rw.mix ? 'Révision ciblée' : `Semaine ${rw.week}/8`}</span></div>
    <p class="muted">${esc(r.short)}</p>
    <p class="reflex">⚡ ${esc(r.tip)}</p>
    <div class="row"><button class="btn" data-act="open-rule" data-id="${r.id}">Revoir la fiche</button><button class="btn" data-act="practice-rule" data-id="${r.id}">10 questions</button></div>
  </section>

  <section class="card">
    <div class="card-h"><h2>📓 Une erreur sur Global Exam ?</h2></div>
    <p class="muted">Note-la en 10 secondes : elle reviendra dans tes séances du soir jusqu'à ce qu'elle soit acquise.</p>
    <button class="btn full" data-act="add-error">+ Ajouter au carnet</button>
  </section>
  </div></div>`;
}

// ============ SÉANCES (questions, mots, erreurs) ============
function startRun(run) {
  if (!run.steps.length) return toast('Rien à réviser ici pour le moment 👌');
  state.run = { ...run, i: 0, phase: 'q', results: [], t0: Date.now() };
  document.body.classList.add('running');
  window.scrollTo(0, 0);
  render({ anim: true });
}
function endRun() {
  state.run = null;
  document.body.classList.remove('running');
  speechSynthesis?.cancel?.();
  render({ anim: true });
}

function blankify(q) { return esc(q).replace(/_{3,}/, '<span class="blank">_____</span>'); }

function stepKey(s) { return s.k === 'g' ? `g:${s.id}` : s.k === 'e' ? `e:${s.id}` : `v:${s.id}`; }

function renderRun() {
  const run = state.run;
  if (run.kind === 'read') return renderReading();
  if (run.i >= run.steps.length) return renderRunEnd();
  const s = run.steps[run.i];
  let body = '';
  if (s.k === 'rule') body = renderRuleStep(s);
  else if (s.k === 'g') body = renderQuestion(s);
  else if (s.k === 'v' || s.k === 'vr') body = renderWord(s);
  else if (s.k === 'e') body = renderErrorStep(s);
  const n = run.steps.length;
  return `<div class="page page-run">
    <div class="run-h">
      <button class="icon" data-act="quit-run" aria-label="Quitter"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="run-t"><small>${esc(run.title)}</small><div class="bar">${`<i style="width:${(run.i / n) * 100}%"></i>`}</div></div>
      <span class="run-n">${run.i + 1}/${n}</span>
    </div>
    <div class="run-body" data-step="${run.i}">${body}</div>
  </div>`;
}

function renderRuleStep(s) {
  const r = RULE[s.id];
  return `<div class="qcard rule-step">
    <div class="eyebrow">Thème de la semaine</div>
    <h2 class="q-title">${r.emoji} ${esc(r.title)}</h2>
    <p class="muted">${esc(r.short)}</p>
    ${r.card.map(c => `<div class="sh-block fiche"><h3>${esc(c.h)}</h3>${c.html}</div>`).join('')}
    <p class="reflex">⚡ ${esc(r.tip)}</p>
    <button class="btn primary full big" data-act="next">C'est noté, on s'entraîne →</button>
  </div>`;
}

function renderQuestion(s) {
  const q = QUESTION[s.id], run = state.run;
  if (!q) return '<p class="empty">Question introuvable.</p>';
  const ans = run.phase === 'a';
  const opts = q.c.map((c, i) => {
    let cls = '';
    if (ans) cls = i === q.a ? 'right' : i === run.pick ? 'wrong' : 'dim';
    return `<button class="opt ${cls}" data-act="pick" data-i="${i}" ${ans ? 'disabled' : ''}><span class="l">${LETTERS[i]}</span><span>${esc(c)}</span></button>`;
  }).join('');
  const ok = run.pick === q.a;
  return `<div class="qcard">
    <div class="q-meta">${ruleChip(q.rule)}${s.review ? '<span class="tag">Révision</span>' : ''}<span class="lvl">${'●'.repeat(q.lvl)}${'○'.repeat(3 - q.lvl)}</span></div>
    <p class="q-text">${blankify(q.q)}</p>
    <div class="opts">${opts}</div>
    ${ans ? `<div class="verdict ${ok ? 'ok' : 'ko'}">
      <b>${ok ? 'Exact !' : `Réponse : ${LETTERS[q.a]}. ${esc(q.c[q.a])}`}</b>
      <p>${esc(q.why)}</p>
      <p class="full-sent">${esc(q.q.replace(/_{3,}/, q.c[q.a]))} ${sayBtn(q.q.replace(/_{3,}/, q.c[q.a]))}</p>
    </div>
    <button class="btn primary full big" data-act="next">Suivant →</button>` : '<p class="hint">Choisis une réponse (clavier : 1-4)</p>'}
  </div>`;
}

function maskWord(ex, en) {
  const base = normWord(en).split(/[ /]/)[0];
  const stem = base.slice(0, Math.max(3, base.length - 2)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`\\b${stem}[a-z'-]*`, 'i');
  return re.test(ex) ? esc(ex).replace(re, '<span class="blank">_____</span>') : esc(ex);
}
// Le mode est figé au début de l'étape (la réponse change la boîte du mot)
function wordMode(s) {
  if (!s.mode) s.mode = computeMode(s);
  return s.mode;
}
function computeMode(s) {
  if (s.k === 'v') return 'new';
  const r = store.get('srs', `v:${s.id}`);
  return r && r.b >= 3 ? 'type' : 'flash';
}

function renderWord(s) {
  const w = P.wordById(s.id), run = state.run;
  if (!w) return '<p class="empty">Mot introuvable.</p>';
  const mode = wordMode(s), ans = run.phase === 'a';
  const th = THEMES.find(t => t.id === w.t);
  const meta = `<div class="q-meta"><span class="chip">${th ? `${th.emoji} ${esc(th.title)}` : '✍️ Mes mots'}</span><span class="tag">${mode === 'new' ? 'Nouveau mot' : 'Révision'}</span></div>`;
  if (mode === 'type') {
    const good = w.en.split(' / ').map(normWord);
    const typed = normWord(run.typed || '');
    const ok = good.includes(typed);
    const close = !ok && good.some(g => levenshtein(g, typed) <= 2);
    return `<div class="qcard">${meta}
      <p class="eyebrow">Écris le mot anglais</p>
      <h2 class="q-title">${esc(w.fr)}</h2>
      ${w.ex ? `<p class="ex">${maskWord(w.ex, w.en)}</p>` : ''}
      ${ans ? `<div class="typed ${ok ? 'ok' : 'ko'}">${esc(run.typed || '—')}</div>
        <div class="verdict ${ok ? 'ok' : 'ko'}"><b>${ok ? 'Parfait, orthographe exacte !' : close ? 'Presque ! Regarde bien l\'orthographe :' : 'La réponse :'}</b>
        <p class="answer-word">${esc(w.en)} ${sayBtn(w.en)}</p>${w.note ? `<p>📝 ${esc(w.note)}</p>` : ''}</div>
        <button class="btn primary full big" data-act="next">Suivant →</button>`
      : `<input id="type-in" class="type-in" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Tape ta réponse…" enterkeyhint="done">
        <div class="row"><button class="btn primary grow" data-act="check-type">Vérifier</button><button class="btn" data-act="type-skip">Je ne sais pas</button></div>`}
    </div>`;
  }
  return `<div class="qcard">${meta}
    <h2 class="q-title word">${esc(w.en)} ${sayBtn(w.en)}</h2>
    <p class="muted">${POS[w.pos] || ''}</p>
    ${w.ex ? `<p class="ex">${esc(w.ex)} ${sayBtn(w.ex)}</p>` : ''}
    ${ans ? `<div class="verdict info"><p class="answer-word">${esc(w.fr)}</p>${w.note ? `<p>📝 ${esc(w.note)}</p>` : ''}</div>
      <div class="row two"><button class="btn ko" data-act="self" data-ok="0">✘ Je ne savais pas</button><button class="btn okb" data-act="self" data-ok="1">✔ Je savais</button></div>`
    : `<button class="btn primary full big" data-act="reveal">Afficher la traduction</button>`}
  </div>`;
}

function renderErrorStep(s) {
  const e = store.get('errors', s.id), run = state.run;
  if (!e) return '<p class="empty">Erreur supprimée.</p>';
  const ans = run.phase === 'a';
  return `<div class="qcard">
    <div class="q-meta">${ruleChip(e.rule)}<span class="tag">Carnet d'erreurs</span></div>
    <p class="q-text">${e.q ? blankify(e.q) : '<i class="muted">(pas de phrase notée)</i>'}</p>
    ${e.mine ? `<p class="muted">Ta réponse sur Global Exam : <s>${esc(e.mine)}</s></p>` : ''}
    ${ans ? `<div class="verdict info"><b>Bonne réponse</b><p class="answer-word">${esc(e.good || '—')}</p>${e.note ? `<p>📝 ${esc(e.note)}</p>` : ''}</div>
      <div class="row two"><button class="btn ko" data-act="self" data-ok="0">✘ Pas encore</button><button class="btn okb" data-act="self" data-ok="1">✔ Je l'avais</button></div>`
    : `<button class="btn primary full big" data-act="reveal">Je réfléchis… voir la réponse</button>`}
  </div>`;
}

function renderRunEnd() {
  const run = state.run;
  const res = run.results, ok = res.filter(r => r.ok).length;
  const sec = Math.round((Date.now() - run.t0) / 1000);
  let extra = '';
  if (run.kind === 'diag') {
    const r = run.diag || {};
    extra = `<div class="card"><div class="card-h"><h2>Ton profil</h2></div>
      ${RULES.map(x => { const v = r[x.id]; const p = v ? v[0] / v[1] : 0; return `<div class="mrow"><span>${x.emoji} ${esc(x.title)}</span>${meter(`d-${x.id}`, p, p >= .8 ? 'good' : p < .5 ? 'low' : '')}<b>${v ? `${v[0]}/${v[1]}` : '–'}</b></div>`; }).join('')}
      <p class="note">Ton plan commence par : ${(P.planMeta()?.order || []).slice(0, 3).map(id => `<b>${RULE[id].title}</b>`).join(', ')}.</p></div>`;
  }
  return `<div class="page page-run">
    <div class="end">
      <div class="end-ico">${ok / Math.max(1, res.length) >= .8 ? '🏆' : ok / Math.max(1, res.length) >= .5 ? '💪' : '🌱'}</div>
      <h2>${run.kind === 'diag' ? 'Diagnostic terminé' : 'Séance terminée'}</h2>
      <p class="muted">${res.length ? `${ok}/${res.length} bonnes réponses` : ''} · ${sec < 60 ? '< 1 min' : hm(sec / 60)}</p>
      ${res.length ? `<div class="end-score">${Math.round((ok / res.length) * 100)}<small>%</small></div>` : ''}
    </div>
    ${extra}
    ${run.kind === 'evening' || run.kind === 'extra' ? '<button class="btn full" data-act="start-evening" data-extra="1">⚡ Encore 5 min</button>' : ''}
    <button class="btn primary full big" data-act="end-run">Terminer</button>
  </div>`;
}

function answer(ok, extra = {}) {
  const run = state.run, s = run.steps[run.i];
  if (s.k === 'rule') return;
  const key = stepKey(s);
  const fresh = !P.seen(key);
  P.review(key, ok, { fresh });
  P.logAnswer(s, ok);
  run.results.push({ id: s.id, k: s.k, ok, ...extra });
  run.phase = 'a';
  buzz(ok ? 10 : [30, 40, 30]);
}

function nextStep() {
  const run = state.run, s = run.steps[run.i];
  if (s?.k === 'rule') store.patch('meta', 'ruleSeen', { k: s.weekKey });
  run.i++; run.phase = 'q'; run.pick = null; run.typed = '';
  if (run.i >= run.steps.length) {
    const sec = Math.round((Date.now() - run.t0) / 1000);
    if (run.results.length) P.logSessionEnd(sec, run.kind);
    if (run.kind === 'diag') run.diag = P.finishDiagnostic(run.results);
    const ok = run.results.filter(r => r.ok).length;
    if (run.results.length && ok / run.results.length >= .6) setTimeout(() => confetti(), 200);
  }
  render({ anim: true, dir: 'from-right' });
  window.scrollTo(0, 0);
  setTimeout(() => $('#type-in')?.focus(), 350);
}

// ============ LECTURE (Parties 6 et 7) ============
function startReading(id) {
  const text = TEXTS.find(t => t.id === id);
  if (!text) return;
  state.run = { kind: 'read', id, title: text.title, answers: [], done: false, t0: Date.now(), sec: 0 };
  document.body.classList.add('running');
  window.scrollTo(0, 0);
  render({ anim: true });
  clearInterval(readTimer);
  readTimer = setInterval(tickRead, 1000);
}
let readTimer = null;
function tickRead() {
  const run = state.run;
  if (!run || run.kind !== 'read' || run.done) return clearInterval(readTimer);
  const el = $('#read-clock'); if (!el) return;
  const text = TEXTS.find(t => t.id === run.id);
  const s = Math.round((Date.now() - run.t0) / 1000);
  el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  el.parentElement.classList.toggle('over', s > text.target);
}
function renderReading() {
  const run = state.run, text = TEXTS.find(t => t.id === run.id);
  const s = run.done ? run.sec : Math.round((Date.now() - run.t0) / 1000);
  const okN = run.done ? text.questions.filter((q, i) => run.answers[i] === q.a).length : 0;
  const tg = `${Math.floor(text.target / 60)}:${String(text.target % 60).padStart(2, '0')}`;
  return `<div class="page page-run page-read">
    <div class="run-h">
      <button class="icon" data-act="quit-run" aria-label="Quitter"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="run-t"><small>Partie ${text.part} · ${esc(text.kind)}</small><b>${esc(text.title)}</b></div>
      <span class="clock ${s > text.target ? 'over' : ''}"><span id="read-clock">${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}</span><small>/ ${tg}</small></span>
    </div>
    ${run.done ? `<div class="card read-res"><b>${okN}/${text.questions.length}</b> bonnes réponses en ${Math.floor(s / 60)} min ${String(s % 60).padStart(2, '0')} s
      ${s > text.target ? '<span class="pill warn">au-delà du temps cible</span>' : '<span class="pill good">dans le temps ✓</span>'}</div>` : ''}
    <div class="read-grid">
      <div class="passages">${text.passages.map(p => `<article class="passage"><div class="p-label">${esc(p.label)}</div>${p.html.replace(/\[(\d+)\]\s*_+/g, '<span class="blank">[$1]</span>')}</article>`).join('')}</div>
      <div class="rq">${text.questions.map((q, qi) => {
        const pick = run.answers[qi];
        return `<div class="rqi"><p class="rq-q"><b>${qi + 1}.</b> ${esc(q.q)}</p>
          <div class="opts small">${q.c.map((c, i) => {
            let cls = pick === i ? 'sel' : '';
            if (run.done) cls = i === q.a ? 'right' : i === pick ? 'wrong' : 'dim';
            return `<button class="opt ${cls}" data-act="rpick" data-q="${qi}" data-i="${i}" ${run.done ? 'disabled' : ''}><span class="l">${LETTERS[i]}</span><span>${esc(c)}</span></button>`;
          }).join('')}</div>
          ${run.done ? `<div class="verdict ${pick === q.a ? 'ok' : 'ko'}"><p>${esc(q.why)}</p></div>` : ''}</div>`;
      }).join('')}
      ${run.done ? '<button class="btn primary full big" data-act="end-run">Terminer</button>'
        : `<button class="btn primary full big" data-act="rsubmit" ${run.answers.filter(x => x != null).length < text.questions.length ? 'disabled' : ''}>Valider mes réponses</button>`}
      </div>
    </div>
  </div>`;
}
function submitReading() {
  const run = state.run, text = TEXTS.find(t => t.id === run.id);
  run.done = true; run.sec = Math.round((Date.now() - run.t0) / 1000);
  clearInterval(readTimer);
  const ok = text.questions.filter((q, i) => run.answers[i] === q.a).length;
  const score = Math.round((ok / text.questions.length) * 100);
  const prev = store.get('reads', run.id);
  store.patch('reads', run.id, { best: Math.max(prev?.best ?? 0, score), last: score, tries: (prev?.tries || 0) + 1, sec: run.sec, d: today() });
  const t = today(), d = store.get('days', t) || {};
  store.patch('days', t, { n: (d.n || 0) + text.questions.length, ok: (d.ok || 0) + ok, sess: (d.sess || 0) + 1, sec: (d.sec || 0) + run.sec, rd: (d.rd || 0) + 1 });
  if (score >= 75) setTimeout(() => confetti(), 200);
  render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ APPRENDRE ============
function renderLearn() {
  const sec = state.learn;
  const seg = [['grammar', 'Grammaire'], ['vocab', 'Vocabulaire'], ['reading', 'Lecture'], ['errors', 'Carnet']]
    .map(([k, l]) => `<button class="${sec === k ? 'on' : ''}" data-act="learn-sec" data-s="${k}">${l}</button>`).join('');
  const body = { grammar: learnGrammar, vocab: learnVocab, reading: learnReading, errors: learnErrors }[sec]();
  return `<div class="page page-learn"><div class="tabs-seg">${seg}</div>${body}</div>`;
}

function learnGrammar() {
  const m = P.mastery(), rw = P.ruleOfWeek(), diag = store.get('meta', 'diag');
  const cards = RULES.map(r => {
    const v = m[r.id], total = P.QUESTIONS.filter(q => q.rule === r.id).length;
    const seenN = P.QUESTIONS.filter(q => q.rule === r.id && P.seen(`g:${q.id}`)).length;
    return `<button class="rule-card ${r.id === rw.id ? 'current' : ''}" data-act="open-rule" data-id="${r.id}">
      <div class="rc-top"><span class="rc-ico">${r.emoji}</span>${r.id === rw.id ? '<span class="pill">Cette semaine</span>' : ''}</div>
      <b>${esc(r.title)}</b><span class="rc-s">${esc(r.short)}</span>
      <div class="rc-m">${meter(`r-${r.id}`, v?.p ?? 0, v ? (v.p >= .8 ? 'good' : v.p < .5 ? 'low' : '') : '')}<small>${v ? pct(v.p) : 'à tester'} · ${seenN}/${total} vues</small></div>
    </button>`;
  }).join('');
  return `<section class="card">
      <div class="card-h"><h2>🎯 Diagnostic</h2>${diag ? `<span class="pill">fait le ${shortDate(diag.d)}</span>` : ''}</div>
      <p class="muted">${diag ? 'Refais-le dans quelques semaines pour mesurer tes progrès.' : '40 questions pour mesurer ton niveau par thème et adapter l\'ordre des semaines.'}</p>
      <button class="btn ${diag ? '' : 'primary'} full" data-act="start-diag">${diag ? 'Refaire le diagnostic' : 'Lancer le diagnostic'}</button>
    </section>
    <div class="rule-grid">${cards}</div>`;
}

function learnVocab() {
  const vt = P.vocabTheme();
  const words = P.allWords();
  const themes = [...THEMES, { id: 'perso', title: 'Mes mots', emoji: '✍️' }].map(t => {
    const ws = words.filter(w => w.t === t.id);
    if (t.id === 'perso' && !ws.length) return '';
    const seenN = ws.filter(w => P.seen(`v:${w.id}`)).length;
    const known = ws.filter(w => (store.get('srs', `v:${w.id}`)?.b || 0) >= 4).length;
    return `<button class="theme-row ${t.id === vt ? 'current' : ''}" data-act="open-theme" data-id="${t.id}">
      <span class="rc-ico">${t.emoji}</span>
      <span class="tr-t"><b>${esc(t.title)}</b><small>${seenN}/${ws.length} vus · ${known} maîtrisés${t.id === vt ? ' · <i>en cours</i>' : ''}</small>${meter(`t-${t.id}`, ws.length ? seenN / ws.length : 0)}</span>
      <svg viewBox="0 0 24 24" class="chev"><path d="M9 5l7 7-7 7"/></svg></button>`;
  }).join('');
  return `<section class="card"><div class="card-h"><h2>📚 Thèmes</h2></div>
      <p class="muted">Chaque soir, 4 mots du thème en cours. Après quelques révisions réussies, tu devras <b>écrire</b> le mot en anglais : c'est là que l'orthographe se travaille.</p>
      <div class="theme-list">${themes}</div></section>
    <section class="card"><div class="card-h"><h2>✍️ Ajouter un mot</h2></div>
      <p class="muted">Un mot croisé sur Global Exam ou dans un film ? Ajoute-le, il entre dans tes révisions.</p>
      <div class="grid2"><div class="field"><label>Anglais</label><input id="w-en" autocapitalize="off" autocomplete="off"></div>
      <div class="field"><label>Français</label><input id="w-fr" autocomplete="off"></div></div>
      <div class="field"><label>Exemple (facultatif)</label><input id="w-ex" autocomplete="off"></div>
      <button class="btn primary full" data-act="add-word">Ajouter</button></section>`;
}

function learnReading() {
  const row = t => {
    const r = store.get('reads', t.id);
    const tg = Math.round(t.target / 60);
    return `<button class="theme-row" data-act="start-read" data-id="${t.id}">
      <span class="rc-ico">${t.part === 6 ? '🧩' : t.passages.length > 1 ? '📑' : '📄'}</span>
      <span class="tr-t"><b>${esc(t.title)}</b><small>${esc(t.kind)} · ${t.questions.length} questions · ${tg} min · ${'●'.repeat(t.lvl)}${'○'.repeat(3 - t.lvl)}</small></span>
      ${r ? `<b class="sc ${r.best >= 75 ? 'good' : r.best >= 50 ? 'warn' : 'bad'}">${r.best} %</b>` : '<span class="pill">Nouveau</span>'}
    </button>`;
  };
  const p7 = TEXTS.filter(t => t.part === 7), p6 = TEXTS.filter(t => t.part === 6);
  return `<section class="card"><div class="card-h"><h2>⏱️ La méthode</h2></div>
      <ol class="steps"><li>Lis <b>les questions d'abord</b> (pas les choix).</li><li>Survole le texte : qui écrit, à qui, pourquoi.</li>
      <li>Cherche la réponse question par question. Méfie-toi du choix qui recopie les mots exacts du texte.</li>
      <li>Le chrono affiche le temps cible du vrai TOEIC : environ 1 min par question.</li></ol></section>
    <section class="card"><div class="card-h"><h2>📄 Partie 7 · Compréhension</h2><span class="pill">${p7.length} textes</span></div><div class="theme-list">${p7.map(row).join('')}</div></section>
    <section class="card"><div class="card-h"><h2>🧩 Partie 6 · Textes à trous</h2><span class="pill">${p6.length} textes</span></div><div class="theme-list">${p6.map(row).join('')}</div></section>
    <section class="card"><div class="card-h"><h2>🌍 Lire ailleurs</h2></div>
      <p class="muted">Pour t'habituer à lire vite de l'anglais business, 10 min d'article de temps en temps :</p>
      <ul class="links">
        <li><a href="https://learningenglish.voanews.com/" target="_blank" rel="noopener">VOA Learning English</a> — actu en anglais simple, avec audio</li>
        <li><a href="https://www.bbc.com/worklife" target="_blank" rel="noopener">BBC Worklife</a> — monde du travail, management</li>
        <li><a href="https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" target="_blank" rel="noopener">BBC 6 Minute English</a> — podcast + transcription (idéal en marchant)</li>
        <li><a href="https://www.theguardian.com/uk/business" target="_blank" rel="noopener">The Guardian — Business</a> — articles plus longs, niveau réel</li>
      </ul></section>`;
}

function errorForm(id) {
  const e = id ? store.get('errors', id) : {};
  return `<div class="field"><label>Thème</label><select id="e-rule">${RULES.map(r => `<option value="${r.id}" ${e.rule === r.id ? 'selected' : ''}>${r.emoji} ${esc(r.title)}</option>`).join('')}<option value="vocab" ${e.rule === 'vocab' ? 'selected' : ''}>📚 Vocabulaire</option><option value="autre" ${e.rule === 'autre' ? 'selected' : ''}>❔ Autre</option></select></div>
    <div class="field"><label>Phrase / question (mets ____ à la place du blanc)</label><input id="e-q" value="${esc(e.q || '')}" autocomplete="off" placeholder="The report must be submitted ____ Friday."></div>
    <div class="grid2"><div class="field"><label>Bonne réponse</label><input id="e-good" value="${esc(e.good || '')}" autocomplete="off" placeholder="by"></div>
    <div class="field"><label>Ma réponse</label><input id="e-mine" value="${esc(e.mine || '')}" autocomplete="off" placeholder="until"></div></div>
    <div class="field"><label>Pourquoi / astuce (facultatif)</label><input id="e-note" value="${esc(e.note || '')}" autocomplete="off" placeholder="by = au plus tard ; until = jusqu'à (durée)"></div>
    <button class="btn primary full" data-act="save-error" ${id ? `data-id="${id}"` : ''}>${id ? 'Enregistrer' : 'Ajouter au carnet'}</button>`;
}
function learnErrors() {
  const list = store.all('errors').map(([id, e]) => ({ id, ...e })).sort((a, b) => (a.d < b.d ? 1 : -1));
  const byRule = {};
  for (const e of list) byRule[e.rule] = (byRule[e.rule] || 0) + 1;
  const top = Object.entries(byRule).sort((a, b) => b[1] - a[1]).slice(0, 3);
  return `<section class="card"><div class="card-h"><h2>📓 Nouvelle erreur</h2></div>${errorForm()}</section>
    ${top.length ? `<section class="card"><div class="card-h"><h2>Où tu perds des points</h2></div>${top.map(([r, n]) => `<div class="mrow"><span>${RULE[r] ? `${RULE[r].emoji} ${esc(RULE[r].title)}` : r === 'vocab' ? '📚 Vocabulaire' : '❔ Autre'}</span>${meter(`e-${r}`, n / list.length)}<b>${n}</b></div>`).join('')}</section>` : ''}
    <section class="card"><div class="card-h"><h2>Mon carnet</h2><span class="pill">${list.length}</span></div>
    ${list.length ? `<div class="err-list">${list.map(e => {
      const s = store.get('srs', `e:${e.id}`);
      return `<div class="err"><div class="err-h">${RULE[e.rule] ? `<span class="chip sm">${RULE[e.rule].emoji} ${esc(RULE[e.rule].title)}</span>` : ''}<span class="dots" title="niveau de mémorisation">${'●'.repeat(Math.min(5, s?.b || 0))}${'○'.repeat(Math.max(0, 5 - (s?.b || 0)))}</span>
        <button class="x" data-act="del-error" data-id="${e.id}" aria-label="Supprimer">✕</button></div>
        ${e.q ? `<p>${blankify(e.q)}</p>` : ''}<p class="err-a"><b>${esc(e.good || '')}</b>${e.mine ? ` <s>${esc(e.mine)}</s>` : ''}</p>${e.note ? `<p class="muted">${esc(e.note)}</p>` : ''}</div>`;
    }).join('')}</div>` : '<p class="empty">Aucune erreur notée pour l\'instant.</p>'}</section>`;
}

// ============ GLOBAL EXAM ============
function renderGE() {
  const g = P.geStats();
  const t = today();
  const names = [...new Set(g.modules.map(m => m.name))];
  const redo = g.modules.filter(m => m.best != null && m.best < P.GE_PASS).sort((a, b) => b.best - a.best);
  const okMods = g.modules.filter(m => m.best != null && m.best >= P.GE_PASS).sort((a, b) => (a.last < b.last ? 1 : -1));
  const kind = state.geKind;
  const behind = g.ratePerWeek < g.needPerWeek;
  const pts = g.mocks.map(m => ({ date: m.d, y: m.total }));
  const lastMock = g.mocks.at(-1);
  return `<div class="page page-ge">
  <section class="hero a-hero">
    <div class="eyebrow">Parcours TOEIC · Global Exam</div>
    <h1>${fmtH(g.hours)} <small>sur ${P.GE_HOURS} h</small></h1>
    <div class="hero-body">
      ${ring(g.hours / P.GE_HOURS, `${Math.min(100, Math.round((g.hours / P.GE_HOURS) * 100))}%`, 'des heures', 'ge')}
      <div class="hero-stats">
        <div class="hs"><span>Réussite moyenne</span><b class="${g.avg == null ? '' : g.avg >= P.GE_PASS ? 'c-good' : 'c-warn'}">${g.avg == null ? '–' : `${Math.round(g.avg)} %`} <small>/ 70</small></b></div>
        <div class="hs"><span>Modules ≥ 70 %</span><b>${g.pass} / ${g.modules.length}</b></div>
        <div class="hs"><span>Cette semaine</span><b>${hm(g.weekMin)}</b></div>
      </div>
    </div>
    <p class="hero-quote">${g.left <= 0 ? '🎉 27 h atteintes ! Place aux tests blancs.'
      : `Rythme nécessaire : <b>${fmtH(g.needPerWeek)}/sem.</b> · Ton rythme : <b class="${behind ? 'c-warn' : 'c-good'}">${fmtH(g.ratePerWeek)}/sem.</b>${g.eta ? `<br>À ce rythme, 27 h atteintes vers le <b>${shortDate(g.eta)}</b>` : ''}`}</p>
  </section>

  <div class="a-main">
  <section class="card" id="ge-form">
    <div class="card-h"><h2>➕ Nouvelle session</h2></div>
    <div class="seg">${[['module', 'Module'], ['blanc', 'Test blanc'], ['autre', 'Autre']].map(([k, l]) => `<button class="${kind === k ? 'on' : ''}" data-act="ge-kind" data-k="${k}">${l}</button>`).join('')}</div>
    <div class="grid2">
      <div class="field"><label>Date</label><input id="ge-d" type="date" value="${t}" max="${t}"></div>
      <div class="field"><label>Durée (min)</label><input id="ge-min" type="number" inputmode="numeric" min="1" placeholder="30"></div>
    </div>
    <div class="quick">${[15, 30, 45, 60, 90].map(m => `<button data-act="ge-quick" data-m="${m}">${m}′</button>`).join('')}</div>
    ${kind === 'module' ? `<div class="field"><label>Nom du module</label><input id="ge-name" list="ge-names" autocomplete="off" placeholder="ex. Grammaire – Les temps"><datalist id="ge-names">${names.map(n => `<option value="${esc(n)}">`).join('')}</datalist></div>
      <div class="field"><label>Score obtenu (%)</label><input id="ge-score" type="number" inputmode="numeric" min="0" max="100" placeholder="75"></div>` : ''}
    ${kind === 'blanc' ? `<div class="grid2"><div class="field"><label>Listening /495</label><input id="ge-L" type="number" inputmode="numeric" min="5" max="495"></div>
      <div class="field"><label>Reading /495</label><input id="ge-R" type="number" inputmode="numeric" min="5" max="495"></div></div>
      <p class="muted">Pour un test blanc partiel, mets simplement le total dans une des deux cases.</p>` : ''}
    ${kind === 'autre' ? '<div class="field"><label>Activité</label><input id="ge-name" autocomplete="off" placeholder="ex. Fiches de cours"></div>' : ''}
    <button class="btn primary full" data-act="ge-save">Enregistrer</button>
  </section>

  <section class="card"><div class="card-h"><h2>🔁 À refaire</h2><span class="pill">${redo.length}</span></div>
    ${redo.length ? `<p class="muted">Seule ta meilleure tentative compte : refais-les en commençant par les plus proches de 70 %.</p><ul class="mini-list">${redo.map(m => `<li><span>${esc(m.name)}<small>${m.tries} essai${m.tries > 1 ? 's' : ''}</small></span><b class="sc ${m.best >= 60 ? 'warn' : 'bad'}">${m.best} %</b></li>`).join('')}</ul>`
      : '<p class="empty">Aucun module sous 70 % 👌</p>'}
  </section>

  <section class="card"><div class="card-h"><h2>✅ Validés</h2><span class="pill">${okMods.length}</span></div>
    ${okMods.length ? `<ul class="mini-list">${okMods.map(m => `<li><span>${esc(m.name)}</span><b class="sc good">${m.best} %</b></li>`).join('')}</ul>` : '<p class="empty">Pas encore de module validé.</p>'}
  </section>

  <section class="card"><div class="card-h"><h2>🎯 Tests blancs</h2>${lastMock ? `<span class="pill">dernier : ${lastMock.total}</span>` : ''}</div>
    ${pts.length ? lineChart({ points: pts, target: P.TARGET, decimals: 0 }) : '<p class="empty">Ta courbe apparaîtra après ton premier test blanc.</p>'}
    ${lastMock && lastMock.L != null && lastMock.R != null ? `<div class="lr"><span>🎧 Listening <b>${lastMock.L}</b></span><span>📖 Reading <b>${lastMock.R}</b></span></div>` : ''}
  </section>

  <section class="card"><div class="card-h"><h2>🗂️ Historique</h2></div>
    ${g.ses.length ? `<table class="hist"><tr><th>Date</th><th>Activité</th><th>Durée</th><th>Score</th><th></th></tr>
      ${[...g.ses].reverse().slice(0, 30).map(x => `<tr><td>${shortDate(x.d)}</td><td>${x.kind === 'blanc' ? '🎯 Test blanc' : esc(x.name || 'Autre')}</td><td>${x.min ? `${x.min}′` : '–'}</td>
        <td>${x.kind === 'blanc' ? (x.total ?? (x.L || 0) + (x.R || 0)) : x.score != null ? `${x.score} %` : '–'}</td><td><button class="x" data-act="ge-del" data-id="${x.id}" aria-label="Supprimer">✕</button></td></tr>`).join('')}</table>`
      : '<p class="empty">Aucune session enregistrée.</p>'}
    <p class="muted small">Note Global Exam = 50 % heures (27 h sur le parcours TOEIC) + 50 % réussite (≥ 70 %), à finir avant le 9 avril 2027.</p>
  </section>
  </div></div>`;
}

// ============ PROGRÈS ============
function renderStats() {
  const days = store.all('days');
  const totalSec = days.reduce((s, [, d]) => s + (d.sec || 0), 0);
  const words = P.allWords();
  const seenW = words.filter(w => P.seen(`v:${w.id}`)).length;
  const known = words.filter(w => (store.get('srs', `v:${w.id}`)?.b || 0) >= 4).length;
  const m = P.mastery();
  const from = addDays(today(), -30);
  let gOk = 0, gN = 0;
  for (const [d, r] of days) if (d >= from && r.r) for (const [ok, n] of Object.values(r.r)) { gOk += ok; gN += n; }
  const reads = store.all('reads').map(([, r]) => r);
  const rAvg = reads.length ? reads.reduce((s, r) => s + r.best, 0) / reads.length : null;
  const g = P.geStats(), lastMock = g.mocks.at(-1);
  const diag = store.get('meta', 'diag');

  const tiles = [
    ['🔥', 'Série', `${P.streak()} j`, 'jours d\'affilée'],
    ['⏱️', 'Temps dans l\'app', hm(totalSec / 60), `+ ${fmtH(g.hours)} Global Exam`],
    ['🧠', 'Mots vus', seenW, `${known} maîtrisés`],
    ['✅', 'Grammaire (30 j)', gN ? pct(gOk / gN) : '–', `${gN} réponses`],
    ['📖', 'Lecture', rAvg == null ? '–' : `${Math.round(rAvg)} %`, `${reads.length} texte${reads.length > 1 ? 's faits' : ' fait'}`],
    ['🎯', 'Dernier test blanc', lastMock ? lastMock.total : '–', `objectif ${P.TARGET}`],
  ].map(([i, l, v, s]) => `<div class="tile"><div class="t-ico">${i}</div><div class="t-l">${l}</div><div class="t-v">${v}</div><div class="t-s">${s}</div></div>`).join('');

  const rows = RULES.map(r => {
    const v = m[r.id], d0 = diag?.r?.[r.id];
    const p0 = d0 ? d0[0] / d0[1] : null;
    const delta = v && p0 != null && v.src === 'recent' ? Math.round((v.p - p0) * 100) : null;
    return `<div class="mrow"><span>${r.emoji} ${esc(r.title)}</span>${meter(`m-${r.id}`, v?.p ?? 0, v ? (v.p >= .8 ? 'good' : v.p < .5 ? 'low' : '') : '')}
      <b>${v ? pct(v.p) : '–'}${delta ? ` <small class="${delta > 0 ? 'c-good' : 'c-warn'}">${delta > 0 ? '+' : ''}${delta}</small>` : ''}</b></div>`;
  }).join('');

  return `<div class="page page-stats">
    <div class="tiles">${tiles}</div>
    <div class="cols">
    <section class="card"><div class="card-h"><h2>Maîtrise par thème</h2><span class="pill">30 derniers jours</span></div>${rows}
      <p class="muted small">${diag ? 'Le petit chiffre montre l\'évolution depuis le diagnostic.' : 'Fais le diagnostic pour avoir un point de départ.'}</p></section>
    <section class="card"><div class="card-h"><h2>Calendrier</h2></div>${heatmap()}
      <div class="legend"><span><i class="h1"></i>App</span><span><i class="h2"></i>Global Exam</span><span><i class="h3"></i>Les deux</span></div></section>
    </div>
  </div>`;
}

function heatmap() {
  const days = new Map(store.all('days'));
  const geDays = new Set(store.all('ge').map(([, r]) => r.d));
  const first = [store.all('days')[0]?.[0], store.all('ge').map(([, r]) => r.d).sort()[0], P.START].filter(Boolean).sort()[0];
  const start = mondayOf(first), end = P.EXAM;
  const weeks = [];
  for (let w = start; w <= end; w = addDays(w, 7)) weeks.push(w);
  const t = today();
  let lastLbl = -9;
  const months = weeks.map((w, i) => {
    const d = parseDate(w);
    if (!(i === 0 || d.getDate() <= 7) || i - lastLbl < 3) return '';
    lastLbl = i;
    return `<span style="grid-column:${i + 2}">${MONTHS[d.getMonth()].slice(0, 4).replace(/i$/, '')}</span>`;
  }).join('');
  let cells = '';
  for (let dow = 0; dow < 7; dow++) {
    cells += `<span class="hl">${'LMMJVSD'[dow]}</span>`;
    for (const w of weeks) {
      const d = addDays(w, dow);
      const a = days.get(d), app = a && (a.sess || a.n), ge = geDays.has(d);
      const cls = app && ge ? 'h3' : ge ? 'h2' : app ? 'h1' : '';
      cells += `<i class="${cls} ${d === t ? 'now' : ''} ${d > t ? 'fut' : ''} ${d === P.EXAM ? 'exam' : ''}" title="${shortDate(d)}"></i>`;
    }
  }
  return `<div class="heat" style="--w:${weeks.length}"><div class="hm-m">${months}</div><div class="hm-g">${cells}</div></div>`;
}

// ============ RÉGLAGES ============
function renderSettings() {
  const cfg = sync.config();
  const st = sync.status;
  const stTxt = { off: 'Non configurée', syncing: 'Synchronisation…', ok: 'À jour', error: `Erreur : ${st.error}`, offline: 'Hors ligne' }[st.state];
  let qr = '';
  if (cfg && state.showQR && window.qrcode) {
    const q = window.qrcode(0, 'L'); q.addData(sync.pairLink(cfg)); q.make();
    qr = `<div class="qr">${q.createSvgTag({ cellSize: 4, margin: 2, scalable: true })}</div>
      <p class="alert">🔒 Ce QR contient ton jeton : ne le montre à personne. Scanne-le avec l'appareil photo de ton autre appareil.</p>
      <button class="btn full" data-act="copy-link">Copier le lien d'appairage</button>`;
  }
  const plan = P.planMeta();
  return `<div class="page page-settings">
  <section class="card">
    <div class="card-h"><h2>Synchronisation</h2><span class="sync-st st-${st.state}">${esc(stTxt)}</span></div>
    ${st.last ? `<p class="muted">Dernière synchro : ${new Date(st.last).toLocaleString('fr-FR')}</p>` : ''}
    <div class="grid2">
      <div class="field"><label>Compte GitHub</label><input id="cfg-owner" value="${esc(cfg?.owner || 'Greilleur45')}" autocapitalize="off"></div>
      <div class="field"><label>Repo des données</label><input id="cfg-repo" value="${esc(cfg?.repo || 'toeic-data')}" autocapitalize="off"></div>
    </div>
    <div class="field"><label>Jeton d'accès</label><input id="cfg-token" type="password" value="${esc(cfg?.token || '')}" placeholder="github_pat_…" autocapitalize="off" autocomplete="off"></div>
    <div class="row">
      <button class="btn primary" data-act="cfg-save">Enregistrer & synchroniser</button>
      ${cfg ? '<button class="btn" data-act="sync-now">Synchroniser</button>' : ''}
    </div>
    ${cfg ? `<button class="btn full" data-act="toggle-qr">${state.showQR ? 'Masquer le QR code' : 'Appairer un autre appareil (QR code)'}</button>${qr}` : ''}
    <details class="help"><summary>Comment obtenir le jeton</summary><ol>
      <li>Ouvre <a href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">github.com → Fine-grained tokens</a>.</li>
      <li>Soit tu modifies ton jeton Shape (<b>Edit</b>) et tu ajoutes le repo <code>toeic-data</code>, soit tu en crées un nouveau (<b>Generate new token</b>).</li>
      <li>Repository access : <b>Only select repositories</b> → <code>toeic-data</code>.</li>
      <li>Permissions → <b>Contents</b> → <b>Read and write</b>.</li>
      <li>Colle le jeton ici, puis « Enregistrer ».</li>
    </ol></details>
  </section>
  <section class="card">
    <div class="card-h"><h2>Programme</h2></div>
    <p class="muted">Début : ${plan ? esc(longDate(plan.start)) : '—'} · TOEIC : vendredi 9 avril 2027</p>
    ${plan ? `<ol class="order">${plan.order.map((id, i) => `<li class="${i === P.weekIndex() ? 'on' : ''}">S${i + 1} · ${RULE[id]?.emoji} ${esc(RULE[id]?.title || id)}</li>`).join('')}<li>Ensuite : révision ciblée sur tes thèmes les plus faibles</li></ol>` : ''}
  </section>
  <section class="card">
    <div class="card-h"><h2>Sauvegarde</h2></div>
    <div class="row">
      <button class="btn" data-act="export">Exporter (JSON)</button>
      <label class="btn">Importer<input type="file" accept="application/json" id="import" hidden></label>
    </div>
    ${cfg ? '<button class="link danger" data-act="unpair">Déconnecter cet appareil</button>' : ''}
    <p class="muted small">Contenu original (grammaire, vocabulaire, textes) créé pour cette appli.</p>
  </section></div>`;
}

// ============ FEUILLE (fiches, listes) ============
function openSheet(html) {
  const sh = $('#sheet');
  sh.innerHTML = `<div class="sh-back" data-act="sheet-close"></div><div class="sh-panel"><div class="sh-grab"></div>${html}</div>`;
  sh.hidden = false; document.body.classList.add('noscroll');
  requestAnimationFrame(() => requestAnimationFrame(() => sh.classList.add('open')));
}
function closeSheet() {
  const sh = $('#sheet'); sh.classList.remove('open'); document.body.classList.remove('noscroll');
  setTimeout(() => { if (!sh.classList.contains('open')) { sh.hidden = true; sh.innerHTML = ''; } }, 350);
}
const sheetHead = (title, sub) => `<div class="sh-h"><div><div class="eyebrow">${sub}</div><h2>${title}</h2></div>
  <button class="icon" data-act="sheet-close" aria-label="Fermer"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`;

function openRule(id) {
  const r = RULE[id]; if (!r) return;
  openSheet(`${sheetHead(`${r.emoji} ${esc(r.title)}`, 'Fiche de grammaire')}
    <p class="muted">${esc(r.short)}</p>
    ${r.card.map(c => `<div class="sh-block fiche"><h3>${esc(c.h)}</h3>${c.html}</div>`).join('')}
    <div class="sh-tip">⚡ ${esc(r.tip)}</div>
    ${state.run ? '' : `<button class="btn primary full" data-act="practice-rule" data-id="${id}">S'entraîner (10 questions)</button>`}`);
}
function openTheme(id) {
  const th = id === 'perso' ? { id, title: 'Mes mots', emoji: '✍️' } : THEMES.find(t => t.id === id);
  const ws = P.allWords().filter(w => w.t === id);
  const vt = P.vocabTheme();
  openSheet(`${sheetHead(`${th.emoji} ${esc(th.title)}`, `${ws.length} mots`)}
    <div class="row"><button class="btn primary grow" data-act="practice-theme" data-id="${id}">Réviser ce thème</button>
    ${id !== 'perso' && id !== vt ? `<button class="btn" data-act="set-vtheme" data-id="${id}">★ Thème en cours</button>` : ''}</div>
    <div class="words">${ws.map(w => {
      const b = store.get('srs', `v:${w.id}`)?.b || 0;
      return `<div class="wd ${b ? '' : 'unseen'}"><div class="wd-h"><b>${esc(w.en)}</b> ${sayBtn(w.en)}<span class="dots">${'●'.repeat(Math.min(5, b))}${'○'.repeat(Math.max(0, 5 - b))}</span>
        ${w.t === 'perso' ? `<button class="x" data-act="del-word" data-id="${w.id}">✕</button>` : ''}</div>
        <span>${esc(w.fr)}</span>${w.note ? `<small>📝 ${esc(w.note)}</small>` : ''}</div>`;
    }).join('')}</div>`);
}

// ============ RENDU ============
function applyMeter(el, p) {
  if (el.tagName === 'circle') { el.style.strokeDashoffset = String(100 - p * 100); el.style.opacity = p > 0 ? 1 : 0; }
  else el.style.width = `${p * 100}%`;
}

function render(opts = {}) {
  const view = $('#view');
  const y = window.scrollY;
  const active = document.activeElement;
  const keep = active && view.contains(active) && active.id ? { id: active.id, v: active.value } : null;
  view.innerHTML = state.run ? renderRun()
    : { today: renderToday, learn: renderLearn, ge: renderGE, stats: renderStats, settings: renderSettings }[state.tab]();

  view.classList.remove('enter', 'from-left', 'from-right');
  if (opts.anim && !REDUCED) { void view.offsetWidth; view.classList.add('enter'); if (opts.dir) view.classList.add(opts.dir); }

  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('on', b.dataset.tab === state.tab));
  document.documentElement.style.setProperty('--tab', TABS.indexOf(state.tab));

  view.querySelectorAll('[data-meter]').forEach(el => {
    const k = el.dataset.meter, to = +el.dataset.p;
    applyMeter(el, opts.anim ? 0 : (meters.get(k) ?? to));
    el.getBoundingClientRect();
    requestAnimationFrame(() => applyMeter(el, to));
    meters.set(k, to);
  });
  const run = state.run;
  $('#progress').hidden = !run || run.kind === 'read';
  if (run && run.kind !== 'read') $('#progress i').style.width = `${(Math.min(run.i, run.steps.length) / run.steps.length) * 100}%`;
  bindTips(view);
  if (!opts.anim) window.scrollTo(0, y);
  if (keep) { const el = document.getElementById(keep.id); if (el) { el.value = keep.v; el.focus(); } }
}

function renderSync() {
  const s = sync.status.state, el = $('#sync');
  el.className = `sync s-${s}`;
  el.querySelector('span').textContent = { off: 'Hors synchro', syncing: 'Synchro…', ok: 'Synchronisé', error: 'Erreur', offline: 'Hors ligne' }[s];
  el.title = s === 'error' ? sync.status.error : '';
  if (!state.run && state.tab === 'settings' && !document.activeElement?.id?.startsWith('cfg-')) render();
}

// ============ ACTIONS ============
function checkTyped() {
  const run = state.run, s = run.steps[run.i], w = P.wordById(s.id);
  run.typed = $('#type-in')?.value || '';
  if (!run.typed.trim()) return toast('Tape ta réponse (ou « Je ne sais pas »)');
  const ok = w.en.split(' / ').map(normWord).includes(normWord(run.typed));
  answer(ok);
  render();
}

function saveError(id) {
  const v = k => $(`#e-${k}`)?.value.trim() || '';
  const e = { rule: v('rule'), q: v('q'), good: v('good'), mine: v('mine'), note: v('note') };
  if (!e.good && !e.q) return toast('Note au moins la phrase ou la bonne réponse');
  if (e.q && !/_{3,}/.test(e.q) && e.good) {
    // Si la bonne réponse est dans la phrase, on la remplace par un blanc
    const i = e.q.toLowerCase().indexOf(e.good.toLowerCase());
    if (i >= 0) e.q = `${e.q.slice(0, i)}____${e.q.slice(i + e.good.length)}`;
  }
  if (id) { store.patch('errors', id, e); closeSheet(); toast('Erreur mise à jour'); return render(); }
  const nid = uid();
  store.patch('errors', nid, { ...e, d: today() });
  store.patch('srs', `e:${nid}`, { b: 0, n: 0, lp: 0, due: today() });
  closeSheet();
  toast('Ajoutée au carnet 📓 elle revient ce soir');
  buzz();
  render();
}

function saveGE() {
  const kind = state.geKind;
  const x = { d: $('#ge-d').value || today(), min: num($('#ge-min').value), kind };
  if (!x.min) { $('#ge-min').focus(); return toast('Indique la durée en minutes'); }
  if (kind === 'module') {
    x.name = $('#ge-name').value.trim(); x.score = num($('#ge-score').value);
    if (!x.name) { $('#ge-name').focus(); return toast('Indique le nom du module'); }
    if (x.score != null && (x.score < 0 || x.score > 100)) return toast('Le score doit être entre 0 et 100 %');
  } else if (kind === 'blanc') {
    x.L = num($('#ge-L').value); x.R = num($('#ge-R').value);
  } else x.name = $('#ge-name').value.trim() || 'Autre';
  const before = P.geStats();
  store.patch('ge', uid(), x);
  const after = P.geStats();
  buzz([20, 40, 20]);
  if (before.hours < P.GE_HOURS && after.hours >= P.GE_HOURS) { confetti(200); toast('27 heures atteintes 🎉'); }
  else if (kind === 'module' && x.score >= P.GE_PASS) { confetti(80); toast(`Module validé ✓ ${x.score} %`); }
  else if (kind === 'module' && x.score != null) toast(`Enregistré · ${x.score} % : à refaire plus tard 🔁`);
  else if (kind === 'blanc') { confetti(80); toast(`Test blanc enregistré : ${(x.L || 0) + (x.R || 0)}`); }
  else toast(`+${x.min} min enregistrées`);
  render();
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-act], nav button');
  if (!b) return;
  if (b.dataset.tab) {
    if (state.run && !confirm('Quitter la séance en cours ?')) return;
    if (state.run) endRun();
    if (state.tab !== b.dataset.tab) { state.tab = b.dataset.tab; window.scrollTo(0, 0); render({ anim: true }); }
    return;
  }
  const a = b.dataset.act, ds = b.dataset;
  switch (a) {
    case 'start-evening': return startRun(P.buildEvening({ extra: !!ds.extra }));
    case 'start-diag': state.skipDiag = false; return startRun(P.buildDiagnostic());
    case 'skip-diag': state.skipDiag = true; break;
    case 'practice-rule': closeSheet(); return startRun(P.buildRulePractice(ds.id));
    case 'practice-theme': closeSheet(); return startRun(P.buildVocabPractice(ds.id));
    case 'start-read': return startReading(ds.id);
    case 'quit-run':
      if (state.run.kind === 'read' ? state.run.done || confirm('Quitter ce texte ?') : (state.run.i >= state.run.steps.length || !state.run.results.length || confirm('Quitter la séance ? Tes réponses déjà données sont enregistrées.'))) endRun();
      return;
    case 'end-run': return endRun();
    case 'pick': {
      const run = state.run; if (run.phase !== 'q') return;
      run.pick = +ds.i;
      answer(run.pick === QUESTION[run.steps[run.i].id].a);
      break;
    }
    case 'reveal': state.run.phase = 'a'; break;
    case 'self': answer(ds.ok === '1'); return nextStep();
    case 'check-type': return checkTyped();
    case 'type-skip': state.run.typed = ''; answer(false); break;
    case 'next': return nextStep();
    case 'say': return speak(ds.t);
    case 'rpick': if (state.run.done) return; state.run.answers[+ds.q] = +ds.i; buzz(6); break;
    case 'rsubmit': return submitReading();
    case 'open-rule': return openRule(ds.id);
    case 'open-theme': return openTheme(ds.id);
    case 'set-vtheme': store.patch('meta', 'plan', { vtheme: ds.id }); closeSheet(); toast('Thème en cours changé ★'); break;
    case 'sheet-close': return closeSheet();
    case 'learn-sec': state.learn = ds.s; return render({ anim: true });
    case 'add-word': {
      const en = $('#w-en').value.trim(), fr = $('#w-fr').value.trim();
      if (!en || !fr) return toast('Remplis l\'anglais et le français');
      const id = `u${uid()}`;
      store.patch('words', id, { en, fr, ex: $('#w-ex').value.trim(), pos: 'expr', note: '' });
      store.patch('srs', `v:${id}`, { b: 1, n: 0, lp: 0, due: addDays(today(), 1) });
      toast('Mot ajouté ✍️'); break;
    }
    case 'del-word': if (!confirm('Supprimer ce mot ?')) return; store.remove('words', ds.id); store.remove('srs', `v:${ds.id}`); closeSheet(); break;
    case 'add-error': return openSheet(`${sheetHead('📓 Nouvelle erreur', 'Carnet d\'erreurs')}${errorForm()}`);
    case 'save-error': return saveError(ds.id);
    case 'del-error': if (!confirm('Supprimer cette erreur du carnet ?')) return; store.remove('errors', ds.id); store.remove('srs', `e:${ds.id}`); break;
    case 'goto-ge': state.tab = 'ge'; render({ anim: true }); setTimeout(() => $('#ge-form')?.scrollIntoView({ behavior: 'smooth' }), 100); return;
    case 'ge-kind': state.geKind = ds.k; break;
    case 'ge-quick': $('#ge-min').value = ds.m; buzz(6); return;
    case 'ge-save': return saveGE();
    case 'ge-del': if (!confirm('Supprimer cette session ?')) return; store.remove('ge', ds.id); break;
    case 'cfg-save': {
      const cfg = { owner: $('#cfg-owner').value.trim(), repo: $('#cfg-repo').value.trim(), token: $('#cfg-token').value.trim() };
      if (!cfg.owner || !cfg.repo || !cfg.token) { toast('Remplis les trois champs'); return; }
      document.activeElement?.blur();
      sync.setConfig(cfg); sync.syncNow(); toast('Configuration enregistrée'); break;
    }
    case 'sync-now': sync.syncNow(); break;
    case 'toggle-qr': state.showQR = !state.showQR; break;
    case 'copy-link': navigator.clipboard.writeText(sync.pairLink(sync.config())).then(() => toast('Lien copié')); return;
    case 'unpair': if (confirm('Déconnecter cet appareil ? Les données restent sur GitHub.')) { sync.setConfig(null); state.showQR = false; } break;
    case 'export': {
      const blob = new Blob([JSON.stringify(store.snapshot(), null, 1)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      Object.assign(document.createElement('a'), { href: url, download: `toeic-${today()}.json` }).click();
      setTimeout(() => URL.revokeObjectURL(url), 1000); return;
    }
    default: return;
  }
  render();
});

document.addEventListener('change', e => {
  const t = e.target;
  if (t.id === 'import' && t.files[0]) {
    t.files[0].text().then(txt => { store.replaceAll(JSON.parse(txt)); toast('Données importées'); render(); })
      .catch(err => toast(`Import impossible : ${err.message}`));
  }
});

// Clavier (ordinateur) : 1-4 / A-D pour répondre, Entrée pour continuer
document.addEventListener('keydown', e => {
  const run = state.run;
  if (e.key === 'Escape' && !$('#sheet').hidden) return closeSheet();
  if (!run || run.kind === 'read' || e.ctrlKey || e.metaKey || e.altKey) return;
  const s = run.steps[run.i];
  if (e.target.id === 'type-in') { if (e.key === 'Enter') { e.preventDefault(); checkTyped(); } return; }
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  if (!s) { if (e.key === 'Enter') endRun(); return; }
  const k = e.key.toLowerCase();
  if (s.k === 'g' && run.phase === 'q') {
    const i = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
    if (i >= 0) { run.pick = i; answer(i === QUESTION[s.id].a); render(); }
  } else if ((s.k === 'v' || s.k === 'vr' || s.k === 'e') && run.phase === 'q' && (k === ' ' || k === 'enter') && wordMode(s) !== 'type') {
    e.preventDefault(); run.phase = 'a'; render();
  } else if (run.phase === 'a' && (s.k === 'v' || s.k === 'e' || (s.k === 'vr' && wordMode(s) !== 'type')) && (k === '1' || k === '2')) {
    answer(k === '2'); nextStep();
  } else if (k === 'enter' && (run.phase === 'a' || s.k === 'rule')) { e.preventDefault(); nextStep(); }
});

// ---------- Démarrage ----------
if (sync.consumePairLink()) setTimeout(() => toast('Appareil appairé ✓ synchro en cours'), 300);
store.onChange(local => { if (!local && !state.run) render(); });
sync.onStatus(renderSync);
$('#sync').addEventListener('click', () => sync.config() ? sync.syncNow() : (state.run ? null : (state.tab = 'settings', render({ anim: true }))));
sync.init();
render({ anim: true });
renderSync();

// Mise à jour automatique : dès qu'une nouvelle version est publiée, l'appli se recharge toute seule
if ('serviceWorker' in navigator) {
  const hadController = !!navigator.serviceWorker.controller;
  let reloaded = false;
  navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(reg => {
    reg.update();
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update(); });
  });
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadController && !reloaded && !state.run) { reloaded = true; location.reload(); }
  });
}
