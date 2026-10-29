// Grammaire TOEIC — thèmes 5 à 8
export const RULES = [
  {
    id: 'pronoms', n: 5, emoji: '👥', title: 'Pronoms & relatifs',
    short: 'Sujet, complément, possessif, réfléchi, et les relatifs who/which/whose/that/what.',
    tip: 'Regarde la fonction du blanc : sujet du verbe ? après un verbe/préposition ? devant un nom ? Puis choisis la forme.',
    card: [
      {
        h: 'Les 5 formes du pronom',
        html: '<p>Chaque personne a 5 formes. Le TOEIC te les propose <b>toutes les quatre</b> : il suffit de trouver la <b>fonction</b> du blanc.</p>'
          + '<table><thead><tr><th>Sujet</th><th>Complément</th><th>Adj. poss.</th><th>Pron. poss.</th><th>Réfléchi</th></tr></thead><tbody>'
          + '<tr><td>I</td><td>me</td><td>my</td><td>mine</td><td>myself</td></tr>'
          + '<tr><td>he / she</td><td>him / her</td><td>his / her</td><td>his / hers</td><td>himself / herself</td></tr>'
          + '<tr><td>it</td><td>it</td><td>its</td><td>—</td><td>itself</td></tr>'
          + '<tr><td>we</td><td>us</td><td>our</td><td>ours</td><td>ourselves</td></tr>'
          + '<tr><td>they</td><td>them</td><td>their</td><td>theirs</td><td>themselves</td></tr>'
          + '</tbody></table>'
          + '<ul><li><b>Devant un nom</b> → adjectif possessif : <i>their report</i>.</li>'
          + '<li><b>Seul, à la place d’un nom</b> → pronom possessif : <i>The idea was <b>hers</b>.</i></li>'
          + '<li><b>by + réfléchi</b> = tout seul : <i>She did it <b>by herself</b>.</i></li>'
          + '<li>Réfléchi = le sujet agit sur lui-même. Réciproque (l’un l’autre) = <b>each other / one another</b>.</li></ul>'
      },
      {
        h: 'Les relatifs',
        html: '<table><thead><tr><th>Relatif</th><th>Remplace</th><th>Exemple</th></tr></thead><tbody>'
          + '<tr><td>who</td><td>personne, sujet</td><td>the man <b>who</b> called</td></tr>'
          + '<tr><td>whom</td><td>personne, complément</td><td>the man <b>whom</b> we hired</td></tr>'
          + '<tr><td>which</td><td>chose</td><td>the file <b>which</b> was lost</td></tr>'
          + '<tr><td>that</td><td>personne ou chose (sans virgule)</td><td>the file <b>that</b> I sent</td></tr>'
          + '<tr><td>whose</td><td>« dont le / la » + nom</td><td>the client <b>whose</b> order…</td></tr>'
          + '<tr><td>where / when</td><td>lieu / moment</td><td>the hotel <b>where</b> we stayed</td></tr>'
          + '</tbody></table>'
          + '<p><b>what</b> = « ce que / ce qui ». Il n’a <b>pas d’antécédent</b> : <span class="ok">✔ This is what we need.</span> <span class="ko">✘ the plan what we need</span></p>'
      },
      {
        h: 'Le piège',
        html: '<ul><li><b>Virgule + that</b> : interdit. Après une virgule → <i>which</i> ou <i>who</i>. <span class="ko">✘ The car, that is new, …</span></li>'
          + '<li><b>its</b> (possessif) ≠ <b>it’s</b> (= it is). <b>their</b> (leur) ≠ <b>there</b> (là / il y a) ≠ <b>they’re</b> (= they are).</li>'
          + '<li><b>Those who</b> = ceux qui. <span class="ko">✘ They who</span> <span class="ko">✘ Them who</span></li>'
          + '<li><b>one of the + pluriel</b> : <span class="ok">✔ one of the best hotels</span></li>'
          + '<li><b>where</b> remplace « at/in which » : <span class="ko">✘ the hotel which we stayed</span> <span class="ok">✔ the hotel where we stayed</span></li>'
          + '<li><b>Mr. Chen and I</b> (sujet) mais <b>between you and me</b> (après préposition).</li>'
          + '<li><b>whoever</b> = n’importe qui qui (sujet du verbe qui suit) : <i>reimburse <b>whoever</b> attends</i>.</li></ul>'
      },
      {
        h: 'Méthode express',
        html: '<ul><li>Verbe juste après le blanc → forme <b>sujet</b> (ou <i>who/which</i>).</li>'
          + '<li>Nom juste après → <b>my/their/its…</b> ou <b>whose</b>.</li>'
          + '<li>Après verbe ou préposition → <b>me/them/us…</b></li>'
          + '<li>Rien après (fin de phrase / virgule) → <b>mine/theirs…</b> ou réfléchi.</li>'
          + '<li>Relatif : personne ou chose ? virgule avant ? sujet ou complément ?</li></ul>'
      }
    ]
  },
  {
    id: 'quantif', n: 6, emoji: '⚖️', title: 'Quantifieurs & comparatifs',
    short: 'Few/little, each/every/all, other/another, amount/number, comparatifs et superlatifs, enough, so/such.',
    tip: 'Regarde le nom après le blanc : dénombrable ou pas ? singulier ou pluriel ? Et cherche « than », « as » ou « the » autour.',
    card: [
      {
        h: 'Dénombrable ou pas ?',
        html: '<table><thead><tr><th>+ pluriel dénombrable</th><th>+ indénombrable</th></tr></thead><tbody>'
          + '<tr><td>many</td><td>much</td></tr>'
          + '<tr><td>few / a few</td><td>little / a little</td></tr>'
          + '<tr><td>fewer</td><td>less</td></tr>'
          + '<tr><td>a number of</td><td>an amount of</td></tr>'
          + '</tbody></table>'
          + '<p><b>few / little</b> = peu (sens négatif). <b>a few / a little</b> = quelques-uns, un peu (sens positif).</p>'
          + '<p>Indénombrables fréquents : <i>information, equipment, advice, furniture, luggage, paperwork, progress, staff</i>.</p>'
      },
      {
        h: 'Each, every, all, other',
        html: '<ul><li><b>each / every + nom singulier</b> + verbe singulier : <i>Every employee <b>has</b>…</i></li>'
          + '<li><b>each of the + pluriel</b> + verbe singulier : <i>Each of the managers <b>is</b>…</i> <span class="ko">✘ every of</span></li>'
          + '<li><b>all / most / many + pluriel</b> : <i>most respondents</i>.</li>'
          + '<li><b>another</b> + singulier (un autre). <b>other</b> + pluriel. <b>others</b> = pronom seul (d’autres). <b>the other</b> = le dernier des deux.</li>'
          + '<li><b>some</b> en phrase affirmative / offre ; <b>any</b> en question et négation.</li></ul>'
      },
      {
        h: 'Comparer',
        html: '<table><thead><tr><th>Forme</th><th>Exemple</th></tr></thead><tbody>'
          + '<tr><td>court : -er than / the -est</td><td>faster than, the fastest</td></tr>'
          + '<tr><td>long : more … than / the most</td><td>more reliable, the most expensive</td></tr>'
          + '<tr><td>égalité : as … as</td><td>as large as</td></tr>'
          + '<tr><td>irréguliers</td><td>good → better → best ; bad → worse → worst ; far → further</td></tr>'
          + '</tbody></table>'
          + '<ul><li>Renforcer un comparatif : <b>much / far / even</b> + comparatif. <span class="ko">✘ very better</span></li>'
          + '<li><b>The + comparatif, the + comparatif</b> : <i>The sooner, the better.</i></li>'
          + '<li><b>adjectif + enough</b> (large enough) mais <b>enough + nom</b> (enough staff).</li>'
          + '<li><b>so + adjectif</b> (so useful that) ; <b>such + a + adjectif + nom</b> (such a success that). <b>so</b> aussi devant <i>few / little / many / much</i>.</li></ul>'
      },
      {
        h: 'Le piège',
        html: '<ul><li><span class="ko">✘ very better</span> <span class="ok">✔ much better</span></li>'
          + '<li><span class="ko">✘ enough large</span> <span class="ok">✔ large enough</span></li>'
          + '<li><span class="ko">✘ as reliable than</span> <span class="ok">✔ as reliable as</span></li>'
          + '<li><span class="ko">✘ such few volunteers</span> <span class="ok">✔ so few volunteers</span></li>'
          + '<li><span class="ko">✘ an amount of employees</span> <span class="ok">✔ a number of employees</span></li>'
          + '<li><span class="ko">✘ much more engineers</span> <span class="ok">✔ a few more / many more engineers</span></li></ul>'
      },
      {
        h: 'Méthode express',
        html: '<ul><li><b>than</b> dans la phrase → comparatif. <b>the … of / in</b> → superlatif. <b>as</b> → as … as.</li>'
          + '<li>Regarde le nom : pluriel → many / few / number ; indénombrable → much / little / amount.</li>'
          + '<li>Nom singulier → each / every / another.</li></ul>'
      }
    ]
  },
  {
    id: 'verbes', n: 7, emoji: '⚙️', title: 'Formes verbales',
    short: 'Gérondif ou infinitif, make/let/have, modaux, conditionnels, subjonctif, used to.',
    tip: 'Repère le mot juste avant le blanc (verbe, préposition, modal, if) : c’est lui qui impose la forme.',
    card: [
      {
        h: '-ing ou to ?',
        html: '<table><thead><tr><th>+ -ing</th><th>+ to + base</th></tr></thead><tbody>'
          + '<tr><td>avoid, consider, suggest, recommend, enjoy, finish, mind, postpone</td><td>decide, plan, agree, hope, want, expect, offer, refuse, manage</td></tr>'
          + '<tr><td>toute <b>préposition</b> + -ing (before, after, for, by…)</td><td>verbe + personne + to : ask / allow / encourage / remind / require someone <b>to</b> do</td></tr>'
          + '</tbody></table>'
          + '<p><b>Le « to » préposition</b> (+ -ing) : <b>look forward to</b>, <b>be committed to</b>, <b>object to</b>, <b>be used to</b>, <b>get used to</b>.</p>'
          + '<p><span class="ok">✔ We look forward to meeting you.</span> <span class="ko">✘ look forward to meet</span></p>'
      },
      {
        h: 'Base verbale nue',
        html: '<ul><li><b>Modaux</b> (can, must, should, will, would…) + base : <i>must show</i>.</li>'
          + '<li><b>make / let / have + personne + base</b> : <i>let you leave, had them revise</i>.</li>'
          + '<li><b>Subjonctif</b> après <i>recommend / require / insist / request / it is essential</i> <b>that</b> + sujet + <b>base</b> (même au singulier) : <i>that every vehicle <b>be</b> inspected</i>.</li>'
          + '<li><b>used to + base</b> = habitude passée (avant). <b>be/get used to + -ing</b> = être/s’habituer à.</li></ul>'
      },
      {
        h: 'Les conditionnels',
        html: '<table><thead><tr><th>Type</th><th>If…</th><th>Résultat</th></tr></thead><tbody>'
          + '<tr><td>réel</td><td>if + présent</td><td>will + base</td></tr>'
          + '<tr><td>hypothèse</td><td>if + prétérit (were)</td><td>would + base</td></tr>'
          + '<tr><td>regret (passé)</td><td>if + had + pp</td><td>would have + pp</td></tr>'
          + '</tbody></table>'
          + '<p><b>Inversion</b> sans if : <i><b>Should</b> you need help…</i> = If you need help. <i><b>Had</b> we known…</i> = If we had known.</p>'
          + '<p>Jamais <b>will</b> après <b>if / unless / when</b> (sens futur) : <span class="ko">✘ if it will arrive</span></p>'
      },
      {
        h: 'Le piège',
        html: '<ul><li><b>suggest / recommend</b> + -ing (pas « to ») : <span class="ko">✘ suggested to change</span></li>'
          + '<li><b>got used to using</b>, pas <span class="ko">✘ got used to use</span></li>'
          + '<li><b>remember to do</b> (ne pas oublier) ≠ <b>remember doing</b> (se souvenir de l’avoir fait).</li>'
          + '<li><b>made them feel</b> (pas <i>to feel</i>), mais <b>allowed them to work</b>.</li>'
          + '<li><b>If I were you</b> : forme à retenir telle quelle.</li></ul>'
      },
      {
        h: 'Méthode express',
        html: '<ul><li>Modal / make / let / have → <b>base</b>.</li>'
          + '<li>Préposition (y compris <i>to</i> de look forward to…) → <b>-ing</b>.</li>'
          + '<li>Verbe + personne + blanc → <b>to + base</b> (sauf make/let/have).</li>'
          + '<li>If + had + pp → <b>would have + pp</b>.</li></ul>'
      }
    ]
  },
  {
    id: 'lexique', n: 8, emoji: '💬', title: 'Expressions & mots proches',
    short: 'Prépositions qui vont avec, collocations du TOEIC et paires de mots qu’on confond.',
    tip: 'Les quatre choix se ressemblent ? C’est du par-cœur : relis le mot juste avant le blanc et cherche l’expression figée.',
    card: [
      {
        h: 'Prépositions qui vont avec',
        html: '<table><thead><tr><th>Expression</th><th>Sens</th></tr></thead><tbody>'
          + '<tr><td>responsible <b>for</b></td><td>responsable de</td></tr>'
          + '<tr><td>comply <b>with</b></td><td>respecter (une règle)</td></tr>'
          + '<tr><td><b>in charge of</b></td><td>en charge de</td></tr>'
          + '<tr><td>eligible <b>for</b></td><td>éligible à</td></tr>'
          + '<tr><td>interested <b>in</b> / depend <b>on</b></td><td>intéressé par / dépendre de</td></tr>'
          + '<tr><td>apologize <b>for</b></td><td>s’excuser de</td></tr>'
          + '<tr><td><b>according to</b> / <b>on behalf of</b></td><td>selon / au nom de</td></tr>'
          + '<tr><td><b>in advance</b> / <b>at your earliest convenience</b></td><td>à l’avance / dès que possible</td></tr>'
          + '</tbody></table>'
      },
      {
        h: 'Collocations',
        html: '<ul><li><b>make</b> a decision, a reservation, a profit, a mistake, an effort.</li>'
          + '<li><b>do</b> business, research, a job, your best.</li>'
          + '<li><b>meet</b> a deadline / a requirement ; <b>take place</b> (avoir lieu) ; <b>take part in</b> (participer).</li></ul>'
      },
      {
        h: 'Paires qu’on confond',
        html: '<table><thead><tr><th>Mot</th><th>Sens</th></tr></thead><tbody>'
          + '<tr><td>raise (+ objet) / rise (sans objet)</td><td>augmenter qqch / monter</td></tr>'
          + '<tr><td>lend / borrow</td><td>prêter / emprunter</td></tr>'
          + '<tr><td>rent / hire</td><td>louer (un bien) / embaucher</td></tr>'
          + '<tr><td>affect (verbe) / effect (nom)</td><td>affecter / effet</td></tr>'
          + '<tr><td>lay, laid, laid (+ objet) / lie, lay, lain</td><td>poser / être posé, allongé</td></tr>'
          + '<tr><td>assure qqn / ensure que / insure</td><td>assurer à qqn / garantir / assurer (contrat)</td></tr>'
          + '<tr><td>especially / specially</td><td>surtout / spécialement (exprès)</td></tr>'
          + '<tr><td>late / lately ; hard / hardly ; near / nearly</td><td>en retard / récemment ; dur / à peine ; près / presque</td></tr>'
          + '<tr><td>economic / economical</td><td>de l’économie / économe, pas cher</td></tr>'
          + '<tr><td>considerable / considerate</td><td>important / attentionné</td></tr>'
          + '<tr><td>successful / successive</td><td>réussi / consécutif</td></tr>'
          + '</tbody></table>'
      },
      {
        h: 'Le piège',
        html: '<ul><li><span class="ko">✘ prices have raised</span> <span class="ok">✔ prices have risen</span> / <span class="ok">✔ we raised prices</span></li>'
          + '<li><span class="ko">✘ worked very hardly</span> <span class="ok">✔ worked very hard</span> (hardly = à peine !)</li>'
          + '<li><span class="ko">✘ Could you borrow me…</span> <span class="ok">✔ Could you lend me…</span></li>'
          + '<li><span class="ko">✘ responsible of</span> <span class="ok">✔ responsible for</span> (le « de » français trompe).</li></ul>'
      },
      {
        h: 'Méthode express',
        html: '<ul><li>Le blanc est une préposition → lis le mot <b>avant</b> (adjectif / verbe) : c’est lui qui commande.</li>'
          + '<li>Paire de mots proches → objet derrière ? (raise / lay / lend) ; sens de la phrase ? (late / lately).</li>'
          + '<li>Ne traduis pas mot à mot depuis le français.</li></ul>'
      }
    ]
  }
];

export const QUESTIONS = [
  // ——— 5. Pronoms & relatifs ———
  { id: 'pro-001', rule: 'pronoms', lvl: 1, q: 'Ms. Lee asked that all reports be sent directly to ____ by Friday.', c: ['she', 'her', 'hers', 'herself'], a: 1, why: 'Après la préposition « to », il faut la forme complément : « her ». « she » est sujet, « hers » remplace un nom.' },
  { id: 'pro-002', rule: 'pronoms', lvl: 1, q: 'The marketing team presented ____ new campaign to the board yesterday.', c: ['they', 'them', 'their', 'theirs'], a: 2, why: 'Le blanc est suivi d’un nom (« new campaign ») : il faut un adjectif possessif, « their ».' },
  { id: 'pro-003', rule: 'pronoms', lvl: 1, q: 'Mr. Okafor prefers to review the contracts ____ before signing them.', c: ['he', 'him', 'his', 'himself'], a: 3, why: 'La phrase est complète ; le blanc insiste sur « lui-même » : réfléchi « himself ».' },
  { id: 'pro-004', rule: 'pronoms', lvl: 1, q: 'The company updated ____ privacy policy last month.', c: ['its', 'it’s', 'it', 'itself'], a: 0, why: 'Devant le nom « privacy policy », il faut le possessif « its ». « it’s » = it is.' },
  { id: 'pro-005', rule: 'pronoms', lvl: 1, q: 'Applicants ____ résumés arrive after June 1 will not be considered.', c: ['who', 'whose', 'whom', 'which'], a: 1, why: 'Le relatif est suivi d’un nom (« résumés ») = « les candidats dont les CV » : « whose ».' },
  { id: 'pro-006', rule: 'pronoms', lvl: 1, q: 'The technician ____ repaired the printer left a note on the desk.', c: ['who', 'whom', 'whose', 'which'], a: 0, why: 'Antécédent humain (« technician ») et le relatif est sujet de « repaired » : « who ». « which » ne s’emploie pas pour une personne.' },
  { id: 'pro-007', rule: 'pronoms', lvl: 1, q: 'The conference room is reserved, so ____ will have to meet in the cafeteria.', c: ['us', 'our', 'ours', 'we'], a: 3, why: 'Le blanc est sujet de « will have to meet » : forme sujet « we ».' },
  { id: 'pro-008', rule: 'pronoms', lvl: 1, q: 'Ms. Tanaka will lead the training session because the original idea was ____.', c: ['she', 'her', 'herself', 'hers'], a: 3, why: 'Rien après le blanc : il faut un pronom qui remplace « her idea », donc le pronom possessif « hers ».' },
  { id: 'pro-009', rule: 'pronoms', lvl: 1, q: 'Visitors must sign in at the front desk, ____ is located near the main entrance.', c: ['which', 'that', 'where', 'who'], a: 0, why: 'Après une virgule, pour une chose sujet du verbe « is » : « which ». « that » est interdit après une virgule, « where » ne peut pas être sujet.' },
  { id: 'pro-010', rule: 'pronoms', lvl: 1, q: '____ going to receive the updated schedule by e-mail this afternoon.', c: ['There', 'Their', 'They’re', 'Them'], a: 2, why: '« ____ going to » demande un sujet + verbe être : « They’re » = They are.' },
  { id: 'pro-011', rule: 'pronoms', lvl: 2, q: 'The new software, ____ was installed on Monday, has already reduced processing times.', c: ['that', 'what', 'which', 'who'], a: 2, why: 'Relatif entre virgules pour une chose : « which ». « that » ne se met jamais après une virgule.' },
  { id: 'pro-012', rule: 'pronoms', lvl: 2, q: 'Our quarterly sales were higher than ____ of our main competitor.', c: ['that', 'those', 'them', 'it'], a: 1, why: 'On compare « sales » (pluriel) à « les ventes de… » : « those of ». « that of » remplacerait un nom singulier.' },
  { id: 'pro-013', rule: 'pronoms', lvl: 2, q: 'The interns finished the inventory by ____, without any help from the warehouse staff.', c: ['them', 'their', 'themselves', 'theirs'], a: 2, why: '« by + réfléchi » = tout seuls, confirmé par « without any help » : « by themselves ».' },
  { id: 'pro-014', rule: 'pronoms', lvl: 2, q: 'The two managers have known ____ since they worked together in Singapore.', c: ['themselves', 'each other', 'theirs', 'them'], a: 1, why: 'Ils se connaissent l’un l’autre : réciproque « each other ». « themselves » voudrait dire que chacun se connaît soi-même.' },
  { id: 'pro-015', rule: 'pronoms', lvl: 2, q: 'Please let us know ____ you need for the presentation, and we will prepare it.', c: ['that', 'which', 'whose', 'what'], a: 3, why: 'Pas d’antécédent avant le blanc, et « need » n’a pas de complément : « what » = ce dont / ce que.' },
  { id: 'pro-016', rule: 'pronoms', lvl: 2, q: 'The hotel ____ we stayed during the trade fair offers free airport transfers.', c: ['which', 'where', 'when', 'who'], a: 1, why: '« stay » n’a pas de complément direct (on reste « dans » l’hôtel) : « where » = in which. « which » seul ne marche pas ici.' },
  { id: 'pro-017', rule: 'pronoms', lvl: 2, q: '____ who wish to attend the workshop should register by Thursday.', c: ['Those', 'These', 'They', 'Them'], a: 0, why: '« Ceux qui » se dit « Those who ». « They who » et « Them who » sont incorrects.' },
  { id: 'pro-018', rule: 'pronoms', lvl: 2, q: 'Ms. Diaz is one of the most experienced ____ in our legal department.', c: ['attorney', 'attorneys', 'attorney’s', 'attorneyship'], a: 1, why: '« one of the + pluriel » : « one of the most experienced attorneys ».' },
  { id: 'pro-019', rule: 'pronoms', lvl: 2, q: 'The candidate ____ we interviewed on Tuesday has accepted the offer.', c: ['whose', 'which', 'what', 'whom'], a: 3, why: 'Personne, complément de « interviewed » (le sujet est « we ») : « whom ». « whose » demanderait un nom après.' },
  { id: 'pro-020', rule: 'pronoms', lvl: 2, q: 'Friday is the day ____ the auditors will arrive to inspect our records.', c: ['which', 'where', 'when', 'what'], a: 2, why: 'Antécédent de temps (« the day ») et la proposition est complète : « when ».' },
  { id: 'pro-021', rule: 'pronoms', lvl: 2, q: 'Mr. Chen and ____ will represent the company at the trade show in Berlin.', c: ['I', 'me', 'my', 'mine'], a: 0, why: 'Le blanc fait partie du sujet de « will represent » : forme sujet « I ». Astuce : enlève « Mr. Chen and » → « I will represent ».' },
  { id: 'pro-022', rule: 'pronoms', lvl: 2, q: 'Anyone ____ needs a parking permit should contact the facilities office.', c: ['who', 'whom', 'which', 'whose'], a: 0, why: '« Anyone » est une personne et le relatif est sujet de « needs » : « who ».' },
  { id: 'pro-023', rule: 'pronoms', lvl: 3, q: 'The company will reimburse ____ attends the conference on its behalf.', c: ['whoever', 'whomever', 'anyone', 'who'], a: 0, why: 'Le blanc est à la fois complément de « reimburse » et sujet de « attends » : « whoever ». « whomever » est un piège (forme complément), « anyone » demanderait « who » derrière.' },
  { id: 'pro-024', rule: 'pronoms', lvl: 3, q: 'The renovation, ____ cost exceeded the original estimate, was completed in May.', c: ['which', 'whose', 'that', 'its'], a: 1, why: 'Suivi d’un nom (« cost ») = « dont le coût » : « whose » (aussi pour les choses). « its » créerait deux phrases sans lien.' },
  { id: 'pro-025', rule: 'pronoms', lvl: 3, q: 'This is exactly ____ the customers have been asking for.', c: ['that', 'which', 'what', 'whose'], a: 2, why: 'Pas d’antécédent avant le blanc : « what » = ce que. « that » / « which » demanderaient un nom avant.' },
  { id: 'pro-026', rule: 'pronoms', lvl: 3, q: 'The proposal ____ the committee approved last week will be implemented in January.', c: ['what', 'who', 'whose', 'that'], a: 3, why: 'Antécédent chose (« proposal »), pas de virgule : « that ». « what » est impossible après un nom.' },
  { id: 'pro-027', rule: 'pronoms', lvl: 3, q: 'Ms. Patel, ____ the board appointed in March, has already reorganized the finance team.', c: ['that', 'whom', 'whose', 'what'], a: 1, why: 'Personne, complément de « appointed », après une virgule : « whom ». « that » est interdit après une virgule.' },
  { id: 'pro-028', rule: 'pronoms', lvl: 3, q: 'The other bids were rejected, so the contract will be ____ if the client signs today.', c: ['us', 'our', 'ours', 'ourselves'], a: 2, why: 'Rien après le blanc et idée de possession : pronom possessif « ours » (= our contract). « our » doit être suivi d’un nom.' },
  { id: 'pro-029', rule: 'pronoms', lvl: 3, q: 'The board members met with one ____ to discuss the proposed merger.', c: ['each', 'another', 'other', 'some'], a: 1, why: 'Réciproque : « one another » (= each other). « one other » et « one each » n’ont pas ce sens.' },
  { id: 'pro-030', rule: 'pronoms', lvl: 3, q: 'Between you and ____, the merger is likely to be announced next week.', c: ['I', 'my', 'myself', 'me'], a: 3, why: 'Après la préposition « between », forme complément : « between you and me ». « you and I » sonne chic mais est faux ici.' },

  // ——— 6. Quantifieurs & comparatifs ———
  { id: 'qua-001', rule: 'quantif', lvl: 1, q: 'We received very ____ complaints about the new delivery service, which is encouraging.', c: ['few', 'little', 'much', 'less'], a: 0, why: '« complaints » est un pluriel dénombrable → « few ». « little / much / less » vont avec l’indénombrable.' },
  { id: 'qua-002', rule: 'quantif', lvl: 1, q: 'There is not ____ time left before the deadline, so please hurry.', c: ['few', 'many', 'much', 'several'], a: 2, why: '« time » est indénombrable → « much ». « many / few / several » demandent un pluriel.' },
  { id: 'qua-003', rule: 'quantif', lvl: 1, q: '____ employee must wear an identification badge in the building.', c: ['All', 'Most', 'Many', 'Every'], a: 3, why: '« employee » est au singulier → « Every ». « All / Most / Many » demandent un pluriel.' },
  { id: 'qua-004', rule: 'quantif', lvl: 1, q: 'The new printer is ____ than the old one.', c: ['fastest', 'more fast', 'fast', 'faster'], a: 3, why: '« than » → comparatif. Adjectif court : « faster ». « more fast » est incorrect.' },
  { id: 'qua-005', rule: 'quantif', lvl: 1, q: 'This is the ____ expensive hotel we have ever booked for a conference.', c: ['more', 'much', 'very', 'most'], a: 3, why: '« the … we have ever » → superlatif : « the most expensive ».' },
  { id: 'qua-006', rule: 'quantif', lvl: 1, q: 'Our new office is twice as large ____ the previous one.', c: ['as', 'than', 'that', 'so'], a: 0, why: 'Comparaison d’égalité « as … as » (ici « twice as large as »). « than » va avec un comparatif (larger than).' },
  { id: 'qua-007', rule: 'quantif', lvl: 1, q: 'Could you give me ____ information about the shipping costs?', c: ['a few', 'some', 'many', 'several'], a: 1, why: '« information » est indénombrable → « some ». « a few / many / several » demandent un pluriel.' },
  { id: 'qua-008', rule: 'quantif', lvl: 1, q: 'The ____ of paperwork required for the visa application was surprising.', c: ['number', 'amount', 'many', 'few'], a: 1, why: '« paperwork » est indénombrable → « amount ». « number » va avec un pluriel dénombrable.' },
  { id: 'qua-009', rule: 'quantif', lvl: 1, q: 'I have two meetings today: one is at 10 a.m., and ____ is at 3 p.m.', c: ['other', 'another', 'the other', 'others'], a: 2, why: 'Deux éléments, on parle du second : « the other ». « another » laisserait entendre qu’il y en a plus.' },
  { id: 'qua-010', rule: 'quantif', lvl: 1, q: 'Is there ____ coffee left in the break room?', c: ['any', 'many', 'few', 'a few'], a: 0, why: 'Question + indénombrable (« coffee ») → « any ».' },
  { id: 'qua-011', rule: 'quantif', lvl: 2, q: 'Sales in the second quarter were ____ better than expected.', c: ['very', 'more', 'much', 'most'], a: 2, why: 'Pour renforcer un comparatif (« better »), on utilise « much / far ». « very better » est faux (calque de « très meilleur »).' },
  { id: 'qua-012', rule: 'quantif', lvl: 2, q: '____ of the participants received a certificate at the end of the training.', c: ['Each', 'Every', 'Whole', 'Much'], a: 0, why: '« … of the + pluriel » : « Each of the participants ». « Every of » n’existe pas (il faudrait « every one of ») ; « much » va avec l’indénombrable.' },
  { id: 'qua-013', rule: 'quantif', lvl: 2, q: 'The ____ you submit your expense report, the sooner you will be reimbursed.', c: ['early', 'more early', 'earlier', 'earliest'], a: 2, why: 'Structure « the + comparatif, the + comparatif » (« the sooner ») : « the earlier ».' },
  { id: 'qua-014', rule: 'quantif', lvl: 2, q: 'The meeting room is not ____ for forty people.', c: ['enough large', 'largely enough', 'enough largely', 'large enough'], a: 3, why: '« enough » se place après l’adjectif : « large enough ».' },
  { id: 'qua-015', rule: 'quantif', lvl: 2, q: 'We do not have ____ staff to open the new branch this year.', c: ['so', 'too', 'sufficiently', 'enough'], a: 3, why: 'Devant un nom (« staff »), « enough » se place avant : « enough staff ». « sufficiently » modifie un adjectif ou un verbe.' },
  { id: 'qua-016', rule: 'quantif', lvl: 2, q: 'The training session was ____ useful that we decided to repeat it.', c: ['such', 'so', 'too', 'very'], a: 1, why: '« ____ + adjectif seul + that » → « so useful that ». « such » demande un nom (such a useful session).' },
  { id: 'qua-017', rule: 'quantif', lvl: 2, q: 'It was ____ a successful launch that the company doubled production.', c: ['so', 'too', 'such', 'very'], a: 2, why: '« ____ a + adjectif + nom + that » → « such a successful launch that ».' },
  { id: 'qua-018', rule: 'quantif', lvl: 2, q: 'Only ____ seats remain for Thursday’s seminar, so register soon.', c: ['a few', 'a little', 'much', 'little'], a: 0, why: '« seats » est un pluriel dénombrable → « a few ». « a little / much / little » vont avec l’indénombrable.' },
  { id: 'qua-019', rule: 'quantif', lvl: 2, q: 'Most ____ in the survey said they were satisfied with the service.', c: ['respondent', 'respondents', 'of respondent', 'respondent’s'], a: 1, why: '« Most + nom pluriel » : « Most respondents ».' },
  { id: 'qua-020', rule: 'quantif', lvl: 2, q: 'This printer is not as reliable ____ the model we bought last year.', c: ['than', 'like', 'that', 'as'], a: 3, why: '« as reliable » appelle « as » : « not as … as ». « than » irait avec « more reliable ».' },
  { id: 'qua-021', rule: 'quantif', lvl: 2, q: 'If this supplier cannot meet our deadline, we will have to find ____ one.', c: ['other', 'another', 'others', 'the others'], a: 1, why: '« one » est singulier et indéfini (un autre) → « another ».' },
  { id: 'qua-022', rule: 'quantif', lvl: 2, q: 'Ms. Ito is the ____ qualified of the three candidates.', c: ['much', 'more', 'most', 'many'], a: 2, why: '« the … of the three » → superlatif : « the most qualified ».' },
  { id: 'qua-023', rule: 'quantif', lvl: 3, q: 'The new tablet is ____ lighter than its predecessor, which makes it popular with sales representatives.', c: ['far', 'very', 'too', 'so'], a: 0, why: 'Devant un comparatif (« lighter than »), on renforce avec « far / much ». « very / too / so » ne s’emploient pas devant un comparatif.' },
  { id: 'qua-024', rule: 'quantif', lvl: 3, q: 'Some clients prefer e-mail updates, while ____ would rather receive a phone call.', c: ['other', 'another', 'others', 'the other'], a: 2, why: 'Pronom seul (pas de nom après), pluriel en écho à « Some clients » : « others ». « other » doit être suivi d’un nom.' },
  { id: 'qua-025', rule: 'quantif', lvl: 3, q: 'A large ____ of employees have requested more flexible working hours.', c: ['amount', 'number', 'deal', 'much'], a: 1, why: '« employees » est dénombrable → « a large number of ». « amount » et « a great deal of » vont avec l’indénombrable.' },
  { id: 'qua-026', rule: 'quantif', lvl: 3, q: 'Each of the branch managers ____ responsible for submitting a monthly report.', c: ['is', 'are', 'be', 'being'], a: 0, why: 'Le sujet est « Each » (singulier), pas « managers » : verbe au singulier « is ». L’oreille pousse vers « are » à cause du pluriel juste avant.' },
  { id: 'qua-027', rule: 'quantif', lvl: 3, q: 'We had ____ few volunteers that the charity event had to be postponed.', c: ['such', 'so', 'too', 'very'], a: 1, why: 'Avec « few / little / many / much », on emploie « so » (et non « such ») : « so few … that ».' },
  { id: 'qua-028', rule: 'quantif', lvl: 3, q: 'The ____ the team prepares for the audit, the fewer problems we will encounter.', c: ['much', 'most', 'more', 'many'], a: 2, why: 'Structure « the + comparatif, the + comparatif » (« the fewer ») : « the more ».' },
  { id: 'qua-029', rule: 'quantif', lvl: 3, q: 'The firm hired ____ more engineers to complete the project on time.', c: ['a few', 'a little', 'much', 'little'], a: 0, why: '« engineers » est dénombrable : « a few more engineers ». « much more » et « a little more » ne vont qu’avec l’indénombrable.' },
  { id: 'qua-030', rule: 'quantif', lvl: 3, q: 'This year’s conference attracted almost as ____ participants as last year’s.', c: ['more', 'most', 'much', 'many'], a: 3, why: '« as … as » + nom pluriel dénombrable : « as many participants as ». « much » irait avec l’indénombrable.' },

  // ——— 7. Formes verbales ———
  { id: 'ver-001', rule: 'verbes', lvl: 1, q: 'We look forward to ____ you at our annual conference.', c: ['see', 'seeing', 'seen', 'be seeing'], a: 1, why: 'Dans « look forward to », « to » est une préposition → verbe en -ing : « seeing ».' },
  { id: 'ver-002', rule: 'verbes', lvl: 1, q: 'The manager decided ____ the meeting until next week.', c: ['postpone', 'postponing', 'to postpone', 'postponed'], a: 2, why: '« decide » est suivi de « to + base » : « decided to postpone ».' },
  { id: 'ver-003', rule: 'verbes', lvl: 1, q: 'All passengers must ____ their boarding passes at the gate.', c: ['showing', 'to show', 'shown', 'show'], a: 3, why: 'Après un modal (« must »), base verbale sans « to » : « must show ».' },
  { id: 'ver-004', rule: 'verbes', lvl: 1, q: 'Ms. Kim suggested ____ the launch date to avoid the holiday season.', c: ['change', 'to change', 'changing', 'changed'], a: 2, why: '« suggest » est suivi de -ing : « suggested changing ». « suggested to change » est un piège classique.' },
  { id: 'ver-005', rule: 'verbes', lvl: 1, q: 'If the shipment ____ late, we will notify you immediately.', c: ['arrives', 'will arrive', 'arrived', 'would arrive'], a: 0, why: 'Condition réelle : « if + présent », « will » dans l’autre partie. Jamais « will » après « if ».' },
  { id: 'ver-006', rule: 'verbes', lvl: 1, q: 'The supervisor asked the new employees ____ the safety manual carefully.', c: ['read', 'reading', 'to read', 'reads'], a: 2, why: '« ask + personne + to + base » : « asked the new employees to read ».' },
  { id: 'ver-007', rule: 'verbes', lvl: 1, q: 'Our director will let you ____ the office early on Friday.', c: ['leave', 'to leave', 'leaving', 'left'], a: 0, why: '« let + personne + base verbale » (sans « to ») : « let you leave ».' },
  { id: 'ver-008', rule: 'verbes', lvl: 1, q: 'The company plans ____ two new stores next spring.', c: ['opening', 'open', 'opened', 'to open'], a: 3, why: '« plan » est suivi de « to + base » : « plans to open ».' },
  { id: 'ver-009', rule: 'verbes', lvl: 1, q: 'You should avoid ____ personal calls during business hours.', c: ['make', 'to make', 'made', 'making'], a: 3, why: '« avoid » est toujours suivi de -ing : « avoid making ».' },
  { id: 'ver-010', rule: 'verbes', lvl: 1, q: 'The new policy allows staff ____ from home two days a week.', c: ['to work', 'work', 'working', 'worked'], a: 0, why: '« allow + personne + to + base » : « allows staff to work ».' },
  { id: 'ver-011', rule: 'verbes', lvl: 2, q: 'If we had more staff, we ____ able to open on Sundays.', c: ['will be', 'would be', 'are', 'had been'], a: 1, why: 'Hypothèse : « if + prétérit (had) » → « would + base » : « would be ».' },
  { id: 'ver-012', rule: 'verbes', lvl: 2, q: 'The regulations require that every vehicle ____ inspected once a year.', c: ['be', 'being', 'to be', 'been'], a: 0, why: '« require that » + sujet + base verbale (subjonctif), même au singulier : « every vehicle be inspected ».' },
  { id: 'ver-013', rule: 'verbes', lvl: 2, q: 'The team is committed to ____ the highest quality of service.', c: ['provide', 'providing', 'provided', 'provides'], a: 1, why: '« be committed to » : « to » est une préposition → -ing : « committed to providing ».' },
  { id: 'ver-014', rule: 'verbes', lvl: 2, q: 'Mr. Dubois is used to ____ long hours during the tax season.', c: ['work', 'worked', 'working', 'works'], a: 2, why: '« be used to » (= être habitué à) + -ing : « is used to working ». Ne pas confondre avec « used to work » (habitude passée).' },
  { id: 'ver-015', rule: 'verbes', lvl: 2, q: 'The marketing director had the designers ____ the logo three times.', c: ['revise', 'to revise', 'revised', 'revisions'], a: 0, why: '« have + personne + base verbale » (faire faire) : « had the designers revise ».' },
  { id: 'ver-016', rule: 'verbes', lvl: 2, q: '____ you need further assistance, please do not hesitate to contact us.', c: ['Would', 'Could', 'Unless', 'Should'], a: 3, why: 'Inversion formelle : « Should you need » = « If you need ». Très fréquent dans les lettres et e-mails du TOEIC.' },
  { id: 'ver-017', rule: 'verbes', lvl: 2, q: 'Several employees objected to ____ on weekends without extra pay.', c: ['work', 'worked', 'be working', 'working'], a: 3, why: '« object to » : « to » est une préposition → -ing : « objected to working ».' },
  { id: 'ver-018', rule: 'verbes', lvl: 2, q: 'The consultant recommended ____ the outdated servers before the end of the year.', c: ['to replace', 'replace', 'replaced', 'replacing'], a: 3, why: '« recommend » + -ing (sans personne derrière) : « recommended replacing ».' },
  { id: 'ver-019', rule: 'verbes', lvl: 2, q: 'Before he joined our firm, Mr. Haddad used to ____ for an airline in Dubai.', c: ['work', 'working', 'worked', 'works'], a: 0, why: '« used to + base » = habitude passée (« il travaillait avant ») : « used to work ».' },
  { id: 'ver-020', rule: 'verbes', lvl: 2, q: 'The guests agreed ____ the dinner to a later date.', c: ['moving', 'to move', 'move', 'moved'], a: 1, why: '« agree » est suivi de « to + base » : « agreed to move ».' },
  { id: 'ver-021', rule: 'verbes', lvl: 2, q: 'The manager encouraged the interns ____ questions during the meeting.', c: ['ask', 'asking', 'to ask', 'asked'], a: 2, why: '« encourage + personne + to + base » : « encouraged the interns to ask ».' },
  { id: 'ver-022', rule: 'verbes', lvl: 2, q: 'Unless the budget ____ approved by Friday, the project will be delayed.', c: ['will be', 'is', 'was', 'would be'], a: 1, why: '« unless » fonctionne comme « if » : présent, jamais « will » : « unless the budget is approved ».' },
  { id: 'ver-023', rule: 'verbes', lvl: 3, q: 'If the shipment had been sent on time, the client ____ the order.', c: ['would not cancel', 'will not cancel', 'would not have canceled', 'had not canceled'], a: 2, why: 'Regret sur le passé : « if + had + pp » → « would have + pp » : « would not have canceled ».' },
  { id: 'ver-024', rule: 'verbes', lvl: 3, q: 'Had we known about the strike, we ____ the trip.', c: ['would postpone', 'would have postponed', 'will postpone', 'had postponed'], a: 1, why: '« Had we known » = « If we had known » (inversion) → « would have + pp » : « would have postponed ».' },
  { id: 'ver-025', rule: 'verbes', lvl: 3, q: 'It is essential that every participant ____ the consent form before the session.', c: ['sign', 'signing', 'signed', 'to sign'], a: 0, why: '« It is essential that » + sujet + base verbale (subjonctif), sans -s : « every participant sign ».' },
  { id: 'ver-026', rule: 'verbes', lvl: 3, q: 'The hands-on training made the employees ____ more confident about using the system.', c: ['to feel', 'feeling', 'feel', 'felt'], a: 2, why: '« make + personne + base verbale » (sans « to ») : « made the employees feel ».' },
  { id: 'ver-027', rule: 'verbes', lvl: 3, q: 'Please remember ____ off the lights when you leave the office tonight.', c: ['turning', 'to turn', 'turn', 'turned'], a: 1, why: 'Consigne pour plus tard (« when you leave… tonight ») : « remember to do » = ne pas oublier de. « remember turning » = se souvenir de l’avoir fait.' },
  { id: 'ver-028', rule: 'verbes', lvl: 3, q: 'Mr. Lopez is considering ____ his contract with the logistics provider.', c: ['to renew', 'renewing', 'renew', 'renewed'], a: 1, why: '« consider » est suivi de -ing : « considering renewing ». Le double -ing sonne bizarre, mais il est correct.' },
  { id: 'ver-029', rule: 'verbes', lvl: 3, q: 'The staff quickly got used to ____ the new scheduling software.', c: ['use', 'used', 'uses', 'using'], a: 3, why: '« get used to » (= s’habituer à) : « to » est une préposition → -ing : « got used to using ».' },
  { id: 'ver-030', rule: 'verbes', lvl: 3, q: 'If I ____ you, I would accept the transfer to the Tokyo office.', c: ['am', 'be', 'were', 'had been'], a: 2, why: 'Hypothèse avec « would » → « if + prétérit » ; avec « be », la forme soignée est « were » pour toutes les personnes : « If I were you ».' },

  // ——— 8. Expressions & mots proches ———
  { id: 'lex-001', rule: 'lexique', lvl: 1, q: 'Mr. Grant is responsible ____ training all new sales representatives.', c: ['to', 'for', 'of', 'with'], a: 1, why: '« responsible for » (+ -ing). Le « de » de « responsable de » pousse à tort vers « of ».' },
  { id: 'lex-002', rule: 'lexique', lvl: 1, q: 'All suppliers must comply ____ the new safety regulations.', c: ['to', 'for', 'with', 'at'], a: 2, why: '« comply with » = respecter (une règle, une norme).' },
  { id: 'lex-003', rule: 'lexique', lvl: 1, q: 'The annual shareholders’ meeting will take ____ in the main auditorium.', c: ['care', 'time', 'part', 'place'], a: 3, why: '« take place » = avoir lieu, confirmé par le lieu « in the main auditorium ». « take part » demande une personne comme sujet (participer à).' },
  { id: 'lex-004', rule: 'lexique', lvl: 1, q: 'According ____ the latest report, sales rose by 8 percent.', c: ['to', 'with', 'for', 'by'], a: 0, why: 'Expression figée « according to » = selon.' },
  { id: 'lex-005', rule: 'lexique', lvl: 1, q: 'We apologize ____ any inconvenience this delay may cause.', c: ['about', 'to', 'of', 'for'], a: 3, why: '« apologize for + chose » (s’excuser de). « apologize to » se dit d’une personne.' },
  { id: 'lex-006', rule: 'lexique', lvl: 1, q: 'Please book your tickets in ____ to secure the group rate.', c: ['advance', 'advanced', 'front', 'before'], a: 0, why: 'Expression figée « in advance » = à l’avance.' },
  { id: 'lex-007', rule: 'lexique', lvl: 1, q: 'Ms. Moreau signed the agreement on ____ of the entire board.', c: ['part', 'name', 'behalf', 'side'], a: 2, why: '« on behalf of » = au nom de, de la part de.' },
  { id: 'lex-008', rule: 'lexique', lvl: 1, q: 'Only full-time employees are eligible ____ the annual bonus.', c: ['for', 'to', 'of', 'with'], a: 0, why: '« eligible for + nom » (« eligible to » est suivi d’un verbe).' },
  { id: 'lex-009', rule: 'lexique', lvl: 1, q: 'The success of the campaign will depend ____ the size of our budget.', c: ['of', 'from', 'at', 'on'], a: 3, why: '« depend on » = dépendre de. Le « de » français trompe.' },
  { id: 'lex-010', rule: 'lexique', lvl: 1, q: 'Could you ____ me your calculator for a few minutes?', c: ['borrow', 'take', 'hire', 'lend'], a: 3, why: 'Donner à quelqu’un temporairement = « lend » (prêter). « borrow » = emprunter (prendre).' },
  { id: 'lex-011', rule: 'lexique', lvl: 2, q: 'The price of raw materials has ____ sharply since January.', c: ['raised', 'risen', 'rose', 'arisen'], a: 1, why: 'Pas de complément (les prix montent tout seuls) → « rise, rose, risen » ; après « has » : « risen ». « raise » demande un objet.' },
  { id: 'lex-012', rule: 'lexique', lvl: 2, q: 'The new tax law will mainly ____ small businesses.', c: ['effect', 'affection', 'effective', 'affect'], a: 3, why: 'Après « will (mainly) », il faut un verbe : « affect » (toucher, avoir un effet sur). « effect » est le nom.' },
  { id: 'lex-013', rule: 'lexique', lvl: 2, q: 'We need to ____ a decision about the new supplier by Monday.', c: ['do', 'give', 'make', 'put'], a: 2, why: 'Collocation : « make a decision ». On « make » une décision, une réservation, une erreur.' },
  { id: 'lex-014', rule: 'lexique', lvl: 2, q: 'The design team worked very ____ to finish the prototype on time.', c: ['hard', 'hardly', 'harder', 'hardness'], a: 0, why: '« hard » est aussi l’adverbe (travailler dur). « hardly » = à peine ! « very harder » est impossible.' },
  { id: 'lex-015', rule: 'lexique', lvl: 2, q: 'The warehouse is ____ full, so we must find additional storage space.', c: ['near', 'nearly', 'nearby', 'nearest'], a: 1, why: 'Devant un adjectif (« full ») : « nearly » = presque. « near » = près de.' },
  { id: 'lex-016', rule: 'lexique', lvl: 2, q: 'The firm plans to ____ ten additional engineers for the project.', c: ['rent', 'lend', 'hire', 'borrow'], a: 2, why: 'Pour des personnes : « hire » = embaucher. « rent » = louer un bien.' },
  { id: 'lex-017', rule: 'lexique', lvl: 2, q: 'Please reply at your earliest ____ so that we can confirm the booking.', c: ['convenient', 'convenience', 'conveniently', 'convene'], a: 1, why: 'Expression figée « at your earliest convenience » (dès que possible) ; après « your earliest », il faut un nom.' },
  { id: 'lex-018', rule: 'lexique', lvl: 2, q: 'The new compact car is very ____, using only four liters of fuel per 100 km.', c: ['economic', 'economics', 'economical', 'economy'], a: 2, why: '« economical » = économe, qui consomme peu. « economic » = relatif à l’économie (economic growth).' },
  { id: 'lex-019', rule: 'lexique', lvl: 2, q: 'Mr. Patel has been in ____ of the accounting department since 2019.', c: ['charge', 'responsible', 'lead', 'head'], a: 0, why: 'Expression figée « in charge of » = responsable de.' },
  { id: 'lex-020', rule: 'lexique', lvl: 2, q: 'We can ____ you that your personal data will remain confidential.', c: ['ensure', 'insure', 'assure', 'secure'], a: 2, why: '« assure + personne + that » = garantir à quelqu’un. « ensure » ne prend pas la personne en objet (ensure that…).' },
  { id: 'lex-021', rule: 'lexique', lvl: 2, q: 'The project manager has been very busy ____, so the meeting was rescheduled.', c: ['late', 'lately', 'later', 'latest'], a: 1, why: 'Avec le present perfect (« has been »), « lately » = ces derniers temps. « late » = en retard.' },
  { id: 'lex-022', rule: 'lexique', lvl: 2, q: 'Our team managed to ____ the deadline despite the technical problems.', c: ['meet', 'do', 'succeed', 'arrive'], a: 0, why: 'Collocation : « meet a deadline » = respecter une échéance.' },
  { id: 'lex-023', rule: 'lexique', lvl: 3, q: 'Please ____ the signed documents on my desk before you leave.', c: ['lie', 'lay', 'lain', 'lying'], a: 1, why: 'Il y a un objet (« the documents ») : « lay » = poser. « lie » = être allongé, sans objet.' },
  { id: 'lex-024', rule: 'lexique', lvl: 3, q: 'The committee thanked Ms. Ng for her ____ contribution to the merger negotiations.', c: ['considerable', 'considerate', 'considering', 'consider'], a: 0, why: '« considerable » = important, conséquent. « considerate » = attentionné (se dit d’une personne).' },
  { id: 'lex-025', rule: 'lexique', lvl: 3, q: 'The launch of the new app was highly ____, attracting 50,000 users in its first week.', c: ['successive', 'succeeding', 'success', 'successful'], a: 3, why: '« successful » = réussi. « successive » = consécutif. Après « was highly », il faut un adjectif.' },
  { id: 'lex-026', rule: 'lexique', lvl: 3, q: 'Traffic is heavy downtown, ____ during the morning rush hour.', c: ['specially', 'especially', 'special', 'specialize'], a: 1, why: '« especially » = surtout, en particulier. « specially » = spécialement, exprès (specially designed for…).' },
  { id: 'lex-027', rule: 'lexique', lvl: 3, q: 'The building’s elevators are inspected regularly to ____ that they operate safely.', c: ['assure', 'insure', 'ensure', 'reassure'], a: 2, why: '« ensure that » = s’assurer que, garantir. « assure » et « reassure » demandent une personne en objet ; « insure » = assurer (contrat).' },
  { id: 'lex-028', rule: 'lexique', lvl: 3, q: 'The board voted to ____ the salaries of all warehouse staff in January.', c: ['raise', 'rise', 'arise', 'rising'], a: 0, why: 'Il y a un objet (« the salaries ») : « raise » = augmenter qqch. « rise » n’a jamais d’objet.' },
  { id: 'lex-029', rule: 'lexique', lvl: 3, q: 'The contracts have ____ on the manager’s desk for two weeks without being signed.', c: ['laid', 'lay', 'lied', 'lain'], a: 3, why: 'Pas d’objet (les contrats sont posés là) → « lie, lay, lain » ; après « have » : « lain ». « laid » vient de « lay » (poser qqch).' },
  { id: 'lex-030', rule: 'lexique', lvl: 3, q: 'The keynote speaker arrived ____ because her flight was delayed.', c: ['late', 'lately', 'lateness', 'latter'], a: 0, why: '« late » est aussi l’adverbe : arriver en retard = « arrive late ». « lately » = récemment.' }
];
