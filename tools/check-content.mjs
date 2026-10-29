// Vérifie la forme des fichiers de contenu : node tools/check-content.mjs
import { pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';
const root = new URL('../js/content/', import.meta.url);
const errs = [];
const ids = new Set();
const uniq = (id, where) => { if (ids.has(id)) errs.push(`${where}: id en double ${id}`); ids.add(id); };
const mcq = (q, where) => {
  if (!q.q || !Array.isArray(q.c) || q.c.length !== 4) errs.push(`${where}: il faut q + 4 choix`);
  if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) errs.push(`${where}: a doit être 0..3`);
  if (q.c && new Set(q.c).size !== q.c.length) errs.push(`${where}: choix en double`);
  if (!q.why || q.why.length < 15) errs.push(`${where}: why manquant`);
};
async function load(f) { const u = new URL(f, root); return existsSync(u) ? import(pathToFileURL(u.pathname)) : null; }

for (const f of ['grammar-a.js', 'grammar-b.js']) {
  const m = await load(f); if (!m) { console.log(`(absent) ${f}`); continue; }
  for (const r of m.RULES) {
    if (!r.id || !r.title || !r.emoji || !r.short || !Array.isArray(r.card) || !r.tip) errs.push(`${f} règle ${r.id}: champs manquants`);
    const qs = m.QUESTIONS.filter(q => q.rule === r.id);
    console.log(`${f} ${r.id}: ${qs.length} questions (niv1 ${qs.filter(q => q.lvl === 1).length}, niv2 ${qs.filter(q => q.lvl === 2).length}, niv3 ${qs.filter(q => q.lvl === 3).length})`);
  }
  for (const q of m.QUESTIONS) {
    uniq(q.id, f); mcq(q, `${f} ${q.id}`);
    if (!m.RULES.some(r => r.id === q.rule)) errs.push(`${f} ${q.id}: règle inconnue ${q.rule}`);
    if (![1, 2, 3].includes(q.lvl)) errs.push(`${f} ${q.id}: lvl 1..3`);
    if (!q.q.includes('____')) errs.push(`${f} ${q.id}: pas de blanc ____`);
  }
}
{
  const m = await load('vocab.js');
  if (m) {
    for (const t of m.THEMES) console.log(`vocab ${t.id}: ${m.WORDS.filter(w => w.t === t.id).length} mots`);
    for (const w of m.WORDS) {
      uniq(w.id, 'vocab');
      if (!w.en || !w.fr || !w.ex || !w.pos) errs.push(`vocab ${w.id}: champs manquants`);
      if (!m.THEMES.some(t => t.id === w.t)) errs.push(`vocab ${w.id}: thème inconnu`);
    }
  } else console.log('(absent) vocab.js');
}
{
  const m = await load('reading.js');
  if (m) {
    for (const t of m.TEXTS) {
      uniq(t.id, 'reading');
      if (!t.title || !t.kind || !Array.isArray(t.passages) || !t.passages.length || !t.target) errs.push(`reading ${t.id}: champs manquants`);
      t.questions.forEach((q, i) => mcq(q, `reading ${t.id} q${i + 1}`));
      if (t.part === 6) for (let i = 1; i <= t.questions.length; i++) if (!t.passages.some(p => p.html.includes(`[${i}]`))) errs.push(`reading ${t.id}: blanc [${i}] absent`);
    }
    console.log(`reading: ${m.TEXTS.filter(t => t.part === 7).length} textes P7, ${m.TEXTS.filter(t => t.part === 6).length} textes P6`);
  } else console.log('(absent) reading.js');
}
// Répartition des bonnes réponses (éviter que ce soit toujours B)
console.log(errs.length ? `\n${errs.length} erreur(s) :\n` + errs.join('\n') : '\nOK');
process.exit(errs.length ? 1 : 0);
