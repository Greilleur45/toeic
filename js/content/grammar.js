// Réunit les thèmes de grammaire (fichiers grammar-a et grammar-b).
import * as A from './grammar-a.js';
import * as B from './grammar-b.js';

export const RULES = [...A.RULES, ...B.RULES].sort((a, b) => a.n - b.n);
export const QUESTIONS = [...A.QUESTIONS, ...B.QUESTIONS];
export const RULE = Object.fromEntries(RULES.map(r => [r.id, r]));
export const QUESTION = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
