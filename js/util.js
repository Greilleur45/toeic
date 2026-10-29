// Dates au format AAAA-MM-JJ (heure locale) et petits utilitaires.
export const pad = n => String(n).padStart(2, '0');
export const fmtDate = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const parseDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
export const today = () => fmtDate(new Date());
export const addDays = (s, n) => { const d = parseDate(s); d.setDate(d.getDate() + n); return fmtDate(d); };
export const daysBetween = (a, b) => Math.round((parseDate(b) - parseDate(a)) / 86400000);
export const isoDow = s => ((parseDate(s).getDay() + 6) % 7) + 1;
export const mondayOf = s => addDays(s, 1 - isoDow(s));

export const DAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
export const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export const longDate = s => { const d = parseDate(s); return `${DAYS[isoDow(s) - 1]} ${d.getDate()} ${MONTHS[d.getMonth()]}`; };
export const shortDate = s => { const d = parseDate(s); return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 4).replace(/\.?$/, '')}.`; };

export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
export const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// Comparaison tolérante pour la saisie : casse, espaces, apostrophes, « to » des verbes, articles.
export function normWord(s) {
  return String(s || '').toLowerCase().normalize('NFKC').replace(/[’‘`]/g, "'").replace(/[.!?]+$/, '')
    .replace(/\s+/g, ' ').trim().replace(/^(to|a|an|the) /, '');
}
export function levenshtein(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
