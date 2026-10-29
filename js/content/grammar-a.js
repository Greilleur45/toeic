// Grammaire TOEIC — thèmes 1 à 4
export const RULES = [
  {
    id: 'nature', n: 1, emoji: '🧩', title: 'Nature des mots',
    short: "Nom, adjectif, adverbe ou verbe : choisir la bonne forme d'une même famille.",
    tip: "Ignore le sens : regarde le mot juste avant et juste après le blanc, puis le suffixe.",
    card: [
      { h: 'Le principe', html: `<p>Au TOEIC, beaucoup de questions proposent <b>4 mots de la même famille</b> (<i>quick, quickly, quickness, quicker</i>). Tu n'as pas besoin du sens : il faut juste savoir <b>quelle nature de mot</b> va dans le trou.</p>
<ul>
<li><b>déterminant (the, a, your, its…) + ___ + nom</b> → adjectif : <i>a <b>detailed</b> report</i></li>
<li><b>déterminant + ___ + of / verbe</b> → nom : <i>the <b>expansion</b> of…</i></li>
<li><b>be / become / seem + ___</b> → adjectif : <i>is <b>responsible</b></i></li>
<li><b>verbe + ___</b> (ou fin de phrase) → adverbe : <i>worked <b>efficiently</b></i></li>
<li><b>aux + ___ + participe</b> → adverbe : <i>has <b>finally</b> approved</i></li>
<li><b>___ + adjectif</b> → adverbe : <i><b>remarkably</b> detailed</i></li>
<li><b>to / will / must + ___</b> → verbe : <i>to <b>broaden</b></i></li>
</ul>` },
      { h: 'Reconnaître les suffixes', html: `<table><thead><tr><th>Nature</th><th>Suffixes</th></tr></thead><tbody>
<tr><td>Nom (chose)</td><td>-tion, -ment, -ity, -ance/-ence, -ness, -al (<i>renewal</i>), -sis</td></tr>
<tr><td>Nom (personne)</td><td>-er/-or, -ee, -ant/-ent, -ist, -ian</td></tr>
<tr><td>Adjectif</td><td>-ive, -able/-ible, -ful, -ous, -al, -ic, -ent/-ant, -less</td></tr>
<tr><td>Adverbe</td><td>adjectif + -ly</td></tr>
<tr><td>Verbe</td><td>-ize, -en, -ify, -ate</td></tr>
</tbody></table>
<p><b>Personne ou chose ?</b> <i>applicant</i> (le candidat) / <i>application</i> (la candidature). Si le mot doit <b>faire une action humaine</b> (were asked, will receive, expressed interest), c'est la personne.</p>` },
      { h: 'Le piège', html: `<ul>
<li><b>-ing ou -ed ?</b> -ing = ce qui <b>provoque</b> l'émotion, -ed = celui qui la <b>ressent</b>.<br><span class="ok">✔ The results were disappointing.</span><br><span class="ok">✔ Customers were impressed.</span><br><span class="ko">✘ The results were disappointed.</span></li>
<li><b>Faux adverbes en -ly</b> : <i>friendly, timely, costly, lively, likely</i> sont des <b>adjectifs</b>.<br><span class="ok">✔ a friendly speech</span> <span class="ko">✘ a friendlily speech</span></li>
<li><b>Adverbe devant un participe-adjectif</b> : <span class="ok">✔ newly hired staff</span></li>
<li><b>Adverbe après be + adjectif</b> : <span class="ok">✔ surprisingly high</span> <span class="ko">✘ surprising high</span></li>
</ul>` },
      { h: 'Méthode express', html: `<p>1. Repère ce qu'il y a <b>juste avant</b> et <b>juste après</b> le blanc.<br>2. Déduis la nature (nom ? adj ? adv ? verbe ?).<br>3. Élimine par les suffixes. Si 2 noms restent : personne ou chose ?<br>4. Si 2 adjectifs restent : -ing (cause) ou -ed (ressenti) ?</p>` }
    ]
  },
  {
    id: 'temps', n: 2, emoji: '⏱️', title: 'Temps & indicateurs',
    short: "Choisir le bon temps grâce aux mots-indices, et accorder le verbe avec le sujet.",
    tip: "Cherche l'indice de temps (ago, since, by, next…) et le vrai sujet du verbe.",
    card: [
      { h: 'Les mots-indices', html: `<table><thead><tr><th>Indice</th><th>Temps</th></tr></thead><tbody>
<tr><td>ago, last, yesterday, in 2019</td><td>prétérit : <i>arrived</i></td></tr>
<tr><td>since, for, already, yet, so far, over the past…</td><td>present perfect : <i>has worked</i></td></tr>
<tr><td>usually, every day, often</td><td>présent simple : <i>opens</i></td></tr>
<tr><td>now, currently, this week</td><td>présent en -ing : <i>is meeting</i></td></tr>
<tr><td>tomorrow, next month</td><td><i>will</i> + verbe, ou -ing si c'est organisé</td></tr>
<tr><td>by + date future / by the time + présent</td><td>futur antérieur : <i>will have opened</i></td></tr>
<tr><td>by the time + prétérit / before (passé)</td><td>plus-que-parfait : <i>had solved</i></td></tr>
</tbody></table>` },
      { h: 'Futur après when, as soon as…', html: `<p>Après <b>when, as soon as, before, after, until, once, by the time</b>, on met le <b>présent</b>, même si l'action est future. Le <i>will</i> va dans l'autre partie de la phrase.</p>
<p><span class="ok">✔ We will call you as soon as your order arrives.</span><br><span class="ko">✘ …as soon as your order will arrive.</span></p>` },
      { h: "L'accord sujet-verbe", html: `<ul>
<li><b>each / every</b> + nom → singulier : <i>Each employee <b>receives</b>…</i>, même <i>every manager and supervisor <b>is</b></i>.</li>
<li><b>the number of</b> + pluriel → singulier (<i>has</i>) ; <b>a number of</b> (= plusieurs) → pluriel (<i>have</i>).</li>
<li><b>neither… nor / either… or</b> → on accorde avec le nom le <b>plus proche</b>.</li>
<li><b>X, along with / as well as Y,</b> → on accorde avec X.</li>
<li>Noms collectifs (<i>committee, staff, board</i>) → singulier en anglais américain (le TOEIC) : <i>The committee <b>is</b>… its report</i>.</li>
</ul>` },
      { h: 'Le piège', html: `<ul>
<li><b>since</b> + date passée, mais le verbe principal reste au present perfect :<br><span class="ok">✔ It has increased its profits since it was founded.</span></li>
<li><b>yet</b> au négatif → present perfect : <span class="ok">✔ hasn't finalized … yet</span></li>
<li>Le vrai sujet est souvent loin du verbe : ne t'accorde pas avec le nom juste avant le blanc.</li>
</ul>` },
      { h: 'Méthode express', html: `<p>1. Cherche l'indice de temps (souvent en fin de phrase).<br>2. Y a-t-il <i>when / as soon as / until</i> ? → présent.<br>3. <i>by</i> ? → forme en <i>have + participe</i> (will have / had).<br>4. Vérifie le sujet : singulier ou pluriel ?</p>` }
    ]
  },
  {
    id: 'passif', n: 3, emoji: '🔄', title: 'Voix passive',
    short: "Reconnaître quand le sujet subit l'action : be + participe passé, à tous les temps.",
    tip: "Pas de complément après le blanc (ou un « by… ») ? C'est sûrement un passif.",
    card: [
      { h: 'La forme', html: `<p>Passif = <b>be (au bon temps) + participe passé</b>. Le sujet <b>subit</b> l'action.</p>
<table><thead><tr><th>Temps</th><th>Passif</th></tr></thead><tbody>
<tr><td>présent</td><td>is reviewed</td></tr>
<tr><td>en cours</td><td>is <b>being</b> reviewed</td></tr>
<tr><td>prétérit</td><td>was reviewed</td></tr>
<tr><td>present perfect</td><td>has <b>been</b> approved</td></tr>
<tr><td>futur / modal</td><td>will <b>be</b> shipped, must <b>be</b> paid</td></tr>
<tr><td>plus-que-parfait</td><td>had <b>been</b> approved</td></tr>
</tbody></table>` },
      { h: 'Actif ou passif ?', html: `<p>Pose-toi la question : <b>le sujet fait-il l'action ?</b> Puis regarde <b>après le blanc</b> :</p>
<ul>
<li>un complément d'objet (<i>the contract, the printer</i>) → <b>actif</b> : <i>Ms. Hall signed the contract.</i></li>
<li>rien, une préposition, ou <i>by + agent</i> → <b>passif</b> : <i>The contract was signed by Ms. Hall.</i></li>
</ul>
<p>Expressions toutes faites au passif : <b>be required / expected / scheduled / advised / reminded / asked to</b> + verbe.</p>` },
      { h: 'Causatif et participes', html: `<ul>
<li><b>have / get + chose + participe passé</b> = faire faire : <i>We had the carpets <b>cleaned</b>.</i></li>
<li><b>Nom + participe passé</b> (sens passif) : <i>the report <b>submitted</b> yesterday</i> (= qui a été soumis).</li>
<li><b>Nom + -ing</b> (sens actif) : <i>employees <b>wishing</b> to attend</i> (= qui souhaitent).</li>
</ul>` },
      { h: 'Le piège', html: `<ul>
<li>Les verbes <b>sans complément</b> (occur, happen, arrive, take place) n'ont <b>jamais</b> de passif.<br><span class="ok">✔ The outage occurred at 3 P.M.</span> <span class="ko">✘ was occurred</span></li>
<li>Ne pas oublier <b>being</b> (en cours) ou <b>been</b> (parfait) : <span class="ok">✔ is being replaced</span> <span class="ok">✔ has been delayed</span></li>
<li>Un verbe au passif ne peut pas avoir d'objet direct derrière lui.</li>
</ul>` },
      { h: 'Méthode express', html: `<p>1. Qui fait l'action ? Le sujet ou quelqu'un d'autre ?<br>2. Un objet après le blanc ? → actif. Sinon → passif.<br>3. Choisis la forme de <i>be</i> qui colle à l'indice de temps.</p>` }
    ]
  },
  {
    id: 'connecteurs', n: 4, emoji: '🔗', title: 'Connecteurs & prépositions',
    short: "Despite ou although, during ou while, unless, however… et les prépositions de temps.",
    tip: "Regarde ce qui suit le blanc : un nom → préposition ; sujet + verbe → conjonction.",
    card: [
      { h: 'Nom ou proposition ?', html: `<p>La règle n°1 : <b>préposition + nom</b>, <b>conjonction + sujet + verbe</b>.</p>
<table><thead><tr><th>Sens</th><th>+ nom / -ing</th><th>+ sujet + verbe</th></tr></thead><tbody>
<tr><td>malgré</td><td>despite, in spite of</td><td>although, even though</td></tr>
<tr><td>à cause de</td><td>because of, due to, owing to</td><td>because, since</td></tr>
<tr><td>pendant</td><td>during, throughout</td><td>while</td></tr>
<tr><td>en cas de</td><td>in case of</td><td>in case</td></tr>
<tr><td>but</td><td>in order to + verbe</td><td>so that</td></tr>
</tbody></table>
<p><span class="ok">✔ Despite the rain</span> <span class="ko">✘ Although the rain</span></p>` },
      { h: 'Condition et logique', html: `<ul>
<li><b>unless</b> = sauf si (<i>if… not</i>) ; <b>provided that / as long as</b> = à condition que.</li>
<li><b>however</b> (contraste), <b>therefore</b> (conséquence), <b>moreover</b> (ajout), <b>meanwhile</b> (pendant ce temps) : adverbes, souvent après <b>un point ou un point-virgule</b>, suivis d'une virgule.</li>
<li><b>but / so / while</b> relient deux parties d'une même phrase, sans point-virgule.</li>
<li>Paires : <b>either… or</b>, <b>neither… nor</b>, <b>both… and</b>, <b>not only… but also</b>.</li>
<li><b>whether</b> (… or not) = si (alternative). <i>if</i> ne marche pas devant un infinitif : <span class="ok">✔ whether to accept</span>.</li>
</ul>` },
      { h: 'Prépositions de temps', html: `<table><tbody>
<tr><td><b>at</b></td><td>heure : at 9 A.M.</td></tr>
<tr><td><b>on</b></td><td>jour, date : on Sundays, on May 5</td></tr>
<tr><td><b>in</b></td><td>mois, année, saison : in March</td></tr>
<tr><td><b>by</b></td><td>au plus tard (date limite) : by Friday</td></tr>
<tr><td><b>until</b></td><td>jusqu'à (ça dure) : until further notice</td></tr>
<tr><td><b>within</b></td><td>dans un délai de : within two weeks</td></tr>
<tr><td><b>throughout</b></td><td>tout au long de : throughout the year</td></tr>
</tbody></table>` },
      { h: 'Le piège', html: `<ul>
<li><b>Despite</b> + -ing est possible : <span class="ok">✔ Despite being small…</span> <span class="ko">✘ Although being small…</span></li>
<li><b>by</b> (une échéance) ≠ <b>until</b> (une durée) : <i>submit by 5 P.M.</i> / <i>closed until Monday</i>.</li>
<li>Avec <i>neither</i>, c'est <b>nor</b> ; avec <i>both</i>, c'est <b>and</b>.</li>
</ul>` },
      { h: 'Méthode express', html: `<p>1. Après le blanc : nom ou phrase complète ?<br>2. Quel lien logique entre les deux parties (contraste, cause, condition) ?<br>3. Un mot-paire déjà dans la phrase (<i>neither, both, not only</i>) ? Trouve son partenaire.</p>` }
    ]
  }
];

export const QUESTIONS = [
  // ——— Nature des mots ———
  { id: 'nat-001', rule: 'nature', lvl: 1, q: "The manager responded ____ to the customer complaint.", c: ["quick", "quickly", "quickness", "quicker"], a: 1, why: "Après le verbe « responded », il faut un adverbe pour dire comment : quickly (-ly)." },
  { id: 'nat-002', rule: 'nature', lvl: 1, q: "Please submit your ____ before Friday.", c: ["apply", "applicant", "application", "applicable"], a: 2, why: "Après « your », il faut un nom. On soumet une candidature (application, chose), pas un candidat (applicant, personne)." },
  { id: 'nat-003', rule: 'nature', lvl: 1, q: "The new software is extremely ____ for tracking inventory.", c: ["useful", "use", "usefully", "usefulness"], a: 0, why: "Après « is extremely », il faut un adjectif : useful (-ful)." },
  { id: 'nat-004', rule: 'nature', lvl: 1, q: "Ms. Tanaka made a significant ____ to the project.", c: ["contribute", "contributed", "contributive", "contribution"], a: 3, why: "« a significant ___ » : déterminant + adjectif + NOM. Le suffixe -tion indique le nom." },
  { id: 'nat-005', rule: 'nature', lvl: 1, q: "The hotel offers a ____ shuttle service to the airport.", c: ["free", "freely", "freedom", "freeing"], a: 0, why: "Entre « a » et le nom « shuttle service », il faut un adjectif : free (gratuit)." },
  { id: 'nat-006', rule: 'nature', lvl: 1, q: "The marketing team worked ____ to meet the deadline.", c: ["efficient", "efficiency", "efficiently", "efficiencies"], a: 2, why: "Le verbe « worked » est modifié par un adverbe : efficiently." },
  { id: 'nat-007', rule: 'nature', lvl: 1, q: "The ____ of the factory is scheduled for May.", c: ["expand", "expansion", "expansive", "expanded"], a: 1, why: "« The ___ of » : après « the » et avant « of », il faut un nom. -sion = nom." },
  { id: 'nat-008', rule: 'nature', lvl: 1, q: "Our sales figures have improved ____ since January.", c: ["significant", "significance", "signify", "significantly"], a: 3, why: "Après le verbe « have improved », il faut un adverbe : significantly." },
  { id: 'nat-009', rule: 'nature', lvl: 1, q: "The CEO gave a very ____ presentation at the conference.", c: ["inform", "information", "informative", "informatively"], a: 2, why: "« a very ___ presentation » : adjectif devant le nom. -ive = adjectif." },
  { id: 'nat-010', rule: 'nature', lvl: 1, q: "Mr. Lopez is ____ for approving all travel expenses.", c: ["responsible", "responsibly", "responsibility", "responsibilities"], a: 0, why: "Après « is », il faut un adjectif : be responsible for (être responsable de)." },
  { id: 'nat-011', rule: 'nature', lvl: 2, q: "Due to ____ demand, the store has extended its opening hours.", c: ["increasingly", "increasing", "increase", "increases"], a: 1, why: "Devant le nom « demand », il faut un adjectif : increasing (croissante). L'adverbe increasingly ne peut pas qualifier un nom." },
  { id: 'nat-012', rule: 'nature', lvl: 2, q: "The board has ____ approved the merger.", c: ["final", "finalize", "finality", "finally"], a: 3, why: "Entre l'auxiliaire « has » et le participe « approved », on place un adverbe : finally." },
  { id: 'nat-013', rule: 'nature', lvl: 2, q: "The ____ were asked to bring two forms of identification.", c: ["applications", "applicants", "applies", "applicable"], a: 1, why: "Ce sont des personnes à qui on demande d'apporter une pièce d'identité : applicants (-ant = personne), pas applications (des dossiers)." },
  { id: 'nat-014', rule: 'nature', lvl: 2, q: "The quarterly report was ____ detailed.", c: ["remarkable", "remark", "remarkably", "remarked"], a: 2, why: "Le blanc modifie l'adjectif « detailed » : il faut un adverbe, remarkably." },
  { id: 'nat-015', rule: 'nature', lvl: 2, q: "Customers were ____ with the speed of the delivery.", c: ["impress", "impressive", "impressing", "impressed"], a: 3, why: "Les clients RESSENTENT l'impression : -ed (impressed with). Impressive décrirait ce qui impressionne (la livraison)." },
  { id: 'nat-016', rule: 'nature', lvl: 2, q: "The company plans to ____ its operations in Asia.", c: ["broadly", "breadth", "broaden", "broad"], a: 2, why: "Après « to » et avant un objet (its operations), il faut un verbe : broaden (-en = verbe)." },
  { id: 'nat-017', rule: 'nature', lvl: 2, q: "Ms. Kim's ____ to detail makes her an excellent editor.", c: ["attentive", "attend", "attention", "attentively"], a: 2, why: "Après le possessif « Ms. Kim's », il faut un nom, sujet de « makes » : attention (attention to detail)." },
  { id: 'nat-018', rule: 'nature', lvl: 2, q: "The hotel staff were very ____ to our requests.", c: ["response", "respond", "responsively", "responsive"], a: 3, why: "Après « were very », il faut un adjectif : responsive (-ive). Response est un nom." },
  { id: 'nat-019', rule: 'nature', lvl: 2, q: "The new policy will ____ the approval process for expenses.", c: ["simple", "simply", "simplicity", "simplify"], a: 3, why: "Après « will », il faut un verbe à la base : simplify (-ify = verbe)." },
  { id: 'nat-020', rule: 'nature', lvl: 2, q: "Please read the instructions ____ before installing the device.", c: ["carefully", "careful", "cared", "carefulness"], a: 0, why: "« read the instructions ___ » : après verbe + objet, l'adverbe dit comment lire : carefully." },
  { id: 'nat-021', rule: 'nature', lvl: 2, q: "Several ____ have expressed interest in the office building.", c: ["investors", "investments", "invests", "investing"], a: 0, why: "Après « several », un nom pluriel ; et seules des personnes peuvent « exprimer leur intérêt » : investors (-or = personne)." },
  { id: 'nat-022', rule: 'nature', lvl: 2, q: "The ____ of the contract will be discussed at Monday's meeting.", c: ["renew", "renewal", "renewable", "renewed"], a: 1, why: "« The ___ of » appelle un nom. Ici le suffixe -al fait un nom : renewal (le renouvellement)." },
  { id: 'nat-023', rule: 'nature', lvl: 3, q: "The results of the customer survey were rather ____.", c: ["disappointing", "disappointed", "disappoint", "disappointment"], a: 0, why: "Les résultats PROVOQUENT la déception : -ing. Disappointed = ressentir la déception, ce que des résultats ne peuvent pas faire." },
  { id: 'nat-024', rule: 'nature', lvl: 3, q: "Sales of the new model have been ____ high this quarter.", c: ["surprise", "surprising", "surprisingly", "surprised"], a: 2, why: "Le blanc modifie l'adjectif « high » : il faut un adverbe, surprisingly. « surprising high » sonne presque bien mais est faux." },
  { id: 'nat-025', rule: 'nature', lvl: 3, q: "Mr. Chen was hired as a ____ for the advertising campaign.", c: ["consultation", "consultant", "consulting", "consult"], a: 1, why: "« hired as a ___ » : on embauche une personne. -ant = personne : consultant. Consultation est une activité." },
  { id: 'nat-026', rule: 'nature', lvl: 3, q: "The training program is designed for ____ hired staff.", c: ["new", "newer", "newly", "newness"], a: 2, why: "« hired » est un participe utilisé comme adjectif : on le modifie avec un adverbe, newly (newly hired = récemment embauché)." },
  { id: 'nat-027', rule: 'nature', lvl: 3, q: "The proposal was ____ received by the investors.", c: ["favor", "favorable", "favorite", "favorably"], a: 3, why: "Entre « was » et le participe « received » (passif), il faut un adverbe : favorably." },
  { id: 'nat-028', rule: 'nature', lvl: 3, q: "The ____ of the award will be announced at the annual dinner.", c: ["recipient", "reception", "receptive", "receive"], a: 0, why: "On annonce le nom de la personne qui reçoit le prix : recipient (-ent = personne). Reception = l'accueil ou la réception." },
  { id: 'nat-029', rule: 'nature', lvl: 3, q: "Our representatives will answer your questions in a ____ manner.", c: ["time", "timely", "timing", "timed"], a: 1, why: "Devant le nom « manner », il faut un adjectif. Piège : timely se termine en -ly mais c'est un adjectif (rapide, ponctuel)." },
  { id: 'nat-030', rule: 'nature', lvl: 3, q: "The CEO gave a ____ speech to welcome the new partners.", c: ["friendly", "friend", "friendship", "friendlily"], a: 0, why: "« a ___ speech » : adjectif. Friendly est un adjectif malgré son -ly (comme costly, likely)." },

  // ——— Temps & indicateurs ———
  { id: 'tem-001', rule: 'temps', lvl: 1, q: "Ms. Reyes ____ for the company since 2015.", c: ["works", "has worked", "worked", "is working"], a: 1, why: "« since 2015 » : une action commencée dans le passé qui dure encore → present perfect (has worked)." },
  { id: 'tem-002', rule: 'temps', lvl: 1, q: "The shipment ____ two days ago.", c: ["arrived", "has arrived", "arrives", "will arrive"], a: 0, why: "« ago » = moment passé précis → prétérit. Jamais de present perfect avec ago." },
  { id: 'tem-003', rule: 'temps', lvl: 1, q: "We will call you as soon as your order ____.", c: ["will arrive", "arrived", "arrives", "arriving"], a: 2, why: "Après « as soon as » (comme when, before), on met le présent même pour le futur : arrives." },
  { id: 'tem-004', rule: 'temps', lvl: 1, q: "Each employee ____ a parking permit at the start of the year.", c: ["receive", "have received", "are receiving", "receives"], a: 3, why: "« Each » + nom singulier → verbe au singulier : receives. Les autres choix sont au pluriel." },
  { id: 'tem-005', rule: 'temps', lvl: 1, q: "Last year, the company ____ three new stores.", c: ["opens", "has opened", "will open", "opened"], a: 3, why: "« Last year » = période passée terminée → prétérit (opened)." },
  { id: 'tem-006', rule: 'temps', lvl: 1, q: "Mr. Park is not available; he ____ a client right now.", c: ["meets", "met", "is meeting", "has met"], a: 2, why: "« right now » = en ce moment → présent en -ing (is meeting)." },
  { id: 'tem-007', rule: 'temps', lvl: 1, q: "The board ____ the new budget at next Tuesday's meeting.", c: ["reviewed", "has reviewed", "will review", "was reviewing"], a: 2, why: "« next Tuesday » → futur : will review. Les autres sont des temps du passé." },
  { id: 'tem-008', rule: 'temps', lvl: 1, q: "The store usually ____ at 9 A.M., but today it will open at 10.", c: ["opens", "opened", "has opened", "will open"], a: 0, why: "« usually » = habitude → présent simple (opens)." },
  { id: 'tem-009', rule: 'temps', lvl: 1, q: "The company ____ into its new headquarters in 2019.", c: ["moved", "has moved", "moves", "will move"], a: 0, why: "« in 2019 » = date passée précise → prétérit (moved). Has moved est impossible avec une date passée." },
  { id: 'tem-010', rule: 'temps', lvl: 1, q: "Sales ____ steadily since the new campaign began.", c: ["rose", "rise", "have risen", "will rise"], a: 2, why: "« since » + point de départ passé : ça dure jusqu'à maintenant → present perfect (have risen)." },
  { id: 'tem-011', rule: 'temps', lvl: 2, q: "The number of applicants ____ increased sharply this year.", c: ["have", "has", "are", "were"], a: 1, why: "Le sujet est « The number » (le nombre, singulier) → has. Ne t'accorde pas avec « applicants »." },
  { id: 'tem-012', rule: 'temps', lvl: 2, q: "Before the guests ____, the staff will set up the conference room.", c: ["arrive", "will arrive", "arrived", "arriving"], a: 0, why: "Après « Before » avec un sens futur (will set up), on met le présent : arrive." },
  { id: 'tem-013', rule: 'temps', lvl: 2, q: "The new manager ____ to the Boston office three weeks ago.", c: ["has transferred", "transferred", "transfers", "had been transferring"], a: 1, why: "« three weeks ago » → prétérit (transferred). Le present perfect est interdit avec ago." },
  { id: 'tem-014', rule: 'temps', lvl: 2, q: "A number of employees ____ asked for flexible working hours.", c: ["has", "is", "was", "have"], a: 3, why: "« A number of » = plusieurs → sujet pluriel → have. À l'inverse, « The number of » prend le singulier." },
  { id: 'tem-015', rule: 'temps', lvl: 2, q: "Every manager and supervisor ____ required to attend the workshop.", c: ["is", "are", "were", "be"], a: 0, why: "« Every » impose le singulier, même avec deux noms reliés par and : is." },
  { id: 'tem-016', rule: 'temps', lvl: 2, q: "Mr. Dubois ____ the conference in Lyon next month; his flight is already booked.", c: ["has been attending", "is attending", "attended", "had attended"], a: 1, why: "« next month » + vol déjà réservé = projet organisé → présent en -ing avec sens futur (is attending)." },
  { id: 'tem-017', rule: 'temps', lvl: 2, q: "The marketing department ____ its budget yet.", c: ["hasn't finalized", "didn't finalize", "doesn't finalize", "wasn't finalizing"], a: 0, why: "« yet » à la forme négative → present perfect : hasn't finalized." },
  { id: 'tem-018', rule: 'temps', lvl: 2, q: "Ms. Ito ____ in Tokyo for ten years before she moved to Paris.", c: ["has lived", "had lived", "lives", "will have lived"], a: 1, why: "Action antérieure à une autre action passée (moved) → plus-que-parfait (had lived)." },
  { id: 'tem-019', rule: 'temps', lvl: 2, q: "The finance team ____ the quarterly results once the auditors approve them.", c: ["published", "has published", "had published", "will publish"], a: 3, why: "« once the auditors approve » : présent après once = futur. Le verbe principal est donc au futur : will publish." },
  { id: 'tem-020', rule: 'temps', lvl: 2, q: "The staff ____ the new scheduling software since last Monday.", c: ["use", "used", "have been using", "will use"], a: 2, why: "« since last Monday » : ça dure jusqu'à maintenant → present perfect (ici en -ing : have been using)." },
  { id: 'tem-021', rule: 'temps', lvl: 2, q: "The committee ____ its decision tomorrow afternoon.", c: ["announced", "will announce", "has announced", "announcing"], a: 1, why: "« tomorrow » → futur : will announce. « announcing » seul n'est pas un verbe conjugué." },
  { id: 'tem-022', rule: 'temps', lvl: 2, q: "The restaurant ____ over 200 positive reviews so far this year.", c: ["receives", "received", "has received", "will receive"], a: 2, why: "« so far » (jusqu'ici) → present perfect : has received." },
  { id: 'tem-023', rule: 'temps', lvl: 3, q: "By the time Mr. Shah retires next year, he ____ for the firm for 30 years.", c: ["works", "worked", "will have worked", "has worked"], a: 2, why: "« By the time » + futur (next year) → futur antérieur : will have worked (il aura travaillé)." },
  { id: 'tem-024', rule: 'temps', lvl: 3, q: "By the time the technician arrived, the team ____ the problem.", c: ["has solved", "had solved", "solves", "will solve"], a: 1, why: "« By the time » + prétérit (arrived) → l'action était déjà finie avant : plus-que-parfait (had solved)." },
  { id: 'tem-025', rule: 'temps', lvl: 3, q: "Neither the manager nor the assistants ____ available on Friday.", c: ["is", "was", "has", "are"], a: 3, why: "Avec neither… nor, le verbe s'accorde avec le nom le plus proche : « the assistants » (pluriel) → are." },
  { id: 'tem-026', rule: 'temps', lvl: 3, q: "The committee ____ expected to release its report next week.", c: ["is", "are", "were", "have"], a: 0, why: "Nom collectif + « its report » : on traite le comité comme un seul groupe → singulier (is). Were est en plus au passé." },
  { id: 'tem-027', rule: 'temps', lvl: 3, q: "The training manual, along with the safety guidelines, ____ distributed to all new hires.", c: ["were", "are", "have been", "was"], a: 3, why: "Le sujet est « The training manual » (singulier). « along with… » entre virgules ne compte pas : was." },
  { id: 'tem-028', rule: 'temps', lvl: 3, q: "Please do not leave the building until the alarm ____.", c: ["will stop", "stops", "stopped", "had stopped"], a: 1, why: "Après « until » (comme when, before), on met le présent pour parler du futur : stops, pas will stop." },
  { id: 'tem-029', rule: 'temps', lvl: 3, q: "The firm ____ its profits every year since it was founded.", c: ["increased", "increases", "has increased", "had increased"], a: 2, why: "Avec « since », la proposition principale est au present perfect (has increased) ; c'est seulement après since qu'on met le prétérit (was founded)." },
  { id: 'tem-030', rule: 'temps', lvl: 3, q: "By next March, the company ____ its new plant in Ohio.", c: ["will have opened", "has opened", "opened", "had opened"], a: 0, why: "« By + date future » (next March) → futur antérieur : will have opened." },

  // ——— Voix passive ———
  { id: 'pas-001', rule: 'passif', lvl: 1, q: "The documents ____ to the client yesterday.", c: ["sent", "were sent", "sending", "send"], a: 1, why: "Les documents ne s'envoient pas eux-mêmes : passif au prétérit (yesterday) → were sent." },
  { id: 'pas-002', rule: 'passif', lvl: 1, q: "The conference room ____ every Friday afternoon.", c: ["cleans", "cleaning", "is cleaned", "clean"], a: 2, why: "La salle subit le nettoyage et « every Friday » = habitude → passif présent : is cleaned." },
  { id: 'pas-003', rule: 'passif', lvl: 1, q: "All refund requests will ____ within five business days.", c: ["process", "processing", "processed", "be processed"], a: 3, why: "Les demandes sont traitées (elles subissent) : will + be + participe passé → will be processed." },
  { id: 'pas-004', rule: 'passif', lvl: 1, q: "The new branch ____ by the mayor last week.", c: ["was opened", "opened", "has opened", "opening"], a: 0, why: "« by the mayor » = l'agent → passif ; « last week » → prétérit : was opened." },
  { id: 'pas-005', rule: 'passif', lvl: 1, q: "Visitors ____ to wear a badge at all times.", c: ["are required", "require", "requiring", "have required"], a: 0, why: "Expression figée : be required to + verbe (être obligé de). Les visiteurs ne « requièrent » rien." },
  { id: 'pas-006', rule: 'passif', lvl: 1, q: "The meeting has been ____ until next Thursday.", c: ["postponing", "postpone", "postpones", "postponed"], a: 3, why: "« has been » + participe passé = present perfect passif : has been postponed." },
  { id: 'pas-007', rule: 'passif', lvl: 1, q: "Ms. Hall ____ the contract before the deadline.", c: ["signed", "was signed", "has been signed", "is signed"], a: 0, why: "Ms. Hall fait l'action et il y a un objet (the contract) → actif : signed." },
  { id: 'pas-008', rule: 'passif', lvl: 1, q: "The results of the survey ____ at tomorrow's meeting.", c: ["will present", "will be presented", "presented", "are presenting"], a: 1, why: "Les résultats sont présentés (par quelqu'un) et « tomorrow » → passif futur : will be presented." },
  { id: 'pas-009', rule: 'passif', lvl: 1, q: "Our products ____ in a factory near Lyon.", c: ["manufacture", "manufacturing", "have manufactured", "are manufactured"], a: 3, why: "Les produits sont fabriqués, ils ne fabriquent rien : passif → are manufactured." },
  { id: 'pas-010', rule: 'passif', lvl: 1, q: "The staff party is ____ for December 15.", c: ["schedule", "scheduling", "scheduled", "schedules"], a: 2, why: "be scheduled for + date = être prévu pour. Après « is », participe passé : scheduled." },
  { id: 'pas-011', rule: 'passif', lvl: 2, q: "The applications are currently ____ by the HR team.", c: ["reviewing", "been reviewed", "being reviewed", "review"], a: 2, why: "« currently » = en cours + « by the HR team » = passif → are being reviewed. Reviewing serait actif (les dossiers examineraient)." },
  { id: 'pas-012', rule: 'passif', lvl: 2, q: "The budget proposal ____ by the board yet.", c: ["hasn't approved", "hasn't been approved", "didn't approve", "isn't approving"], a: 1, why: "« yet » → present perfect ; « by the board » → passif : hasn't been approved." },
  { id: 'pas-013', rule: 'passif', lvl: 2, q: "Employees are ____ to submit their timesheets by Friday.", c: ["reminding", "remind", "reminded", "reminder"], a: 2, why: "be reminded to = on rappelle aux employés de… (passif). « are reminding » exigerait un objet (remind someone)." },
  { id: 'pas-014', rule: 'passif', lvl: 2, q: "We had the carpets ____ before the new tenants moved in.", c: ["cleans", "cleaning", "to clean", "cleaned"], a: 3, why: "Causatif : have + chose + participe passé (faire nettoyer) → had the carpets cleaned." },
  { id: 'pas-015', rule: 'passif', lvl: 2, q: "The report ____ yesterday contains several errors.", c: ["submitted", "submitting", "was submitted", "submits"], a: 0, why: "Le verbe principal est « contains ». Le blanc décrit le rapport (qui a été soumis) → participe passé seul : submitted. Was submitted ferait deux verbes conjugués." },
  { id: 'pas-016', rule: 'passif', lvl: 2, q: "Employees ____ to attend the seminar should register online.", c: ["wish", "wishing", "wished", "are wished"], a: 1, why: "Le verbe principal est « should register ». Les employés souhaitent eux-mêmes (sens actif) → -ing : wishing (= who wish)." },
  { id: 'pas-017', rule: 'passif', lvl: 2, q: "The package ____ to the wrong address, so it was returned.", c: ["was delivered", "delivered", "delivering", "has delivered"], a: 0, why: "Le colis ne livre pas, il est livré : passif au passé → was delivered." },
  { id: 'pas-018', rule: 'passif', lvl: 2, q: "The new parking regulations will ____ starting next month.", c: ["enforcing", "enforce", "be enforced", "have enforced"], a: 2, why: "Les règles sont appliquées (par quelqu'un), aucun objet après le blanc → will be enforced." },
  { id: 'pas-019', rule: 'passif', lvl: 2, q: "The technician ____ the printer this morning, so it works now.", c: ["repaired", "was repaired", "has been repaired", "is repaired"], a: 0, why: "Le technicien fait l'action et « the printer » est l'objet → actif : repaired." },
  { id: 'pas-020', rule: 'passif', lvl: 2, q: "All guests are advised ____ their valuables in the hotel safe.", c: ["to keep", "keep", "keeping", "kept"], a: 0, why: "Structure figée : be advised to + verbe (il est conseillé de) → to keep." },
  { id: 'pas-021', rule: 'passif', lvl: 2, q: "The new product line ____ at the trade fair next spring.", c: ["will unveil", "unveiled", "has unveiled", "will be unveiled"], a: 3, why: "La gamme est dévoilée (pas d'objet après le blanc) et « next spring » → passif futur : will be unveiled." },
  { id: 'pas-022', rule: 'passif', lvl: 2, q: "All invoices must ____ by the end of the month.", c: ["pay", "paying", "be paid", "paid"], a: 2, why: "Les factures sont payées : modal + be + participe passé → must be paid." },
  { id: 'pas-023', rule: 'passif', lvl: 3, q: "The kitchen equipment is ____ this week, so the restaurant is closed.", c: ["replacing", "being replaced", "been replaced", "replace"], a: 1, why: "Action en cours (this week) subie par l'équipement → is being replaced. « is been » n'existe pas." },
  { id: 'pas-024', rule: 'passif', lvl: 3, q: "The marketing director ____ the campaign results to the board tomorrow.", c: ["will be presented", "will present", "is presented", "has been presented"], a: 1, why: "Le directeur fait l'action et il y a un objet (the campaign results) → actif : will present." },
  { id: 'pas-025', rule: 'passif', lvl: 3, q: "The proposal ____ by the time the client called.", c: ["had already been approved", "has already approved", "had already approved", "already approves"], a: 0, why: "« by the time » + prétérit → plus-que-parfait ; la proposition est approuvée → passif : had already been approved." },
  { id: 'pas-026', rule: 'passif', lvl: 3, q: "Mr. Novak got his visa ____ in just two days.", c: ["processing", "processed", "to process", "process"], a: 1, why: "Causatif avec get : get + chose + participe passé → got his visa processed (il a fait traiter son visa)." },
  { id: 'pas-027', rule: 'passif', lvl: 3, q: "The shipment ____ since early this morning.", c: ["has delayed", "is delaying", "has been delayed", "delays"], a: 2, why: "« since » → present perfect ; l'envoi subit le retard (pas d'objet) → passif : has been delayed." },
  { id: 'pas-028', rule: 'passif', lvl: 3, q: "Candidates ____ for the second interview will be contacted by Friday.", c: ["selecting", "select", "are selected", "selected"], a: 3, why: "Le verbe principal est « will be contacted ». Les candidats ont été sélectionnés (sens passif) → participe seul : selected." },
  { id: 'pas-029', rule: 'passif', lvl: 3, q: "The power outage ____ shortly after 3 P.M.", c: ["was occurred", "occurred", "has been occurred", "is occurred"], a: 1, why: "occur n'a pas de complément, donc pas de passif possible : occurred. Même chose pour happen, take place." },
  { id: 'pas-030', rule: 'passif', lvl: 3, q: "The figures ____ in this report are only estimates.", c: ["include", "including", "included", "includes"], a: 2, why: "Les chiffres sont inclus dans le rapport (sens passif) → participe passé : included. Le verbe principal est « are »." },

  // ——— Connecteurs & prépositions ———
  { id: 'con-001', rule: 'connecteurs', lvl: 1, q: "____ the heavy rain, the outdoor event was a success.", c: ["Although", "Despite", "Because", "Even though"], a: 1, why: "« the heavy rain » est un nom, sans verbe → préposition : Despite. Although et even though demandent sujet + verbe." },
  { id: 'con-002', rule: 'connecteurs', lvl: 1, q: "The flight was delayed ____ bad weather.", c: ["because", "although", "because of", "so"], a: 2, why: "Cause + nom (bad weather) → because of. Because seul doit être suivi de sujet + verbe." },
  { id: 'con-003', rule: 'connecteurs', lvl: 1, q: "Please do not use your phone ____ the presentation.", c: ["while", "during", "as", "meanwhile"], a: 1, why: "« the presentation » est un nom → during. While demande sujet + verbe (while she is speaking)." },
  { id: 'con-004', rule: 'connecteurs', lvl: 1, q: "The office is closed ____ Sundays.", c: ["on", "in", "at", "by"], a: 0, why: "Jours de la semaine et dates → on (on Sundays, on May 5)." },
  { id: 'con-005', rule: 'connecteurs', lvl: 1, q: "The new store will open ____ March.", c: ["on", "at", "in", "since"], a: 2, why: "Mois, années, saisons → in (in March). Since ne va pas avec un futur." },
  { id: 'con-006', rule: 'connecteurs', lvl: 1, q: "You can pay ____ by credit card or by bank transfer.", c: ["both", "neither", "whether", "either"], a: 3, why: "« or » appelle either : either… or (soit… soit). Both va avec and, neither avec nor." },
  { id: 'con-007', rule: 'connecteurs', lvl: 1, q: "The hotel is clean and comfortable; ____, it is quite expensive.", c: ["however", "but", "although", "despite"], a: 0, why: "Après un point-virgule et devant une virgule, il faut un adverbe de liaison de contraste : however." },
  { id: 'con-008', rule: 'connecteurs', lvl: 1, q: "The company hired more staff ____ it could handle the holiday rush.", c: ["in order to", "because of", "so that", "despite"], a: 2, why: "But + sujet + verbe (it could handle) → so that. In order to est suivi d'un verbe à la base, sans sujet." },
  { id: 'con-009', rule: 'connecteurs', lvl: 1, q: "Reports must be submitted ____ 5 P.M. on Thursday at the latest.", c: ["until", "since", "by", "during"], a: 2, why: "« at the latest » = date limite → by. Until exprime une durée qui continue jusqu'à un moment." },
  { id: 'con-010', rule: 'connecteurs', lvl: 1, q: "____ the manager nor her assistant was available.", c: ["Either", "Both", "Not only", "Neither"], a: 3, why: "« nor » va toujours avec neither : neither… nor (ni… ni)." },
  { id: 'con-011', rule: 'connecteurs', lvl: 2, q: "____ sales increased, the company did not reach its annual target.", c: ["Despite", "Although", "Because", "Due to"], a: 1, why: "Contraste + sujet + verbe (sales increased) → Although. Despite et due to demandent un nom." },
  { id: 'con-012', rule: 'connecteurs', lvl: 2, q: "The meeting was canceled ____ the director's illness.", c: ["because", "since", "owing to", "although"], a: 2, why: "Cause + nom (the director's illness) → owing to (= because of, due to). Because et since demandent un verbe." },
  { id: 'con-013', rule: 'connecteurs', lvl: 2, q: "Employees may work from home ____ they finish their tasks on time.", c: ["unless", "as long as", "despite", "in case of"], a: 1, why: "Sens de condition (à condition que) + sujet + verbe → as long as. Unless (sauf si) donne le sens inverse." },
  { id: 'con-014', rule: 'connecteurs', lvl: 2, q: "The package will not be delivered ____ someone is there to sign for it.", c: ["if", "provided that", "so that", "unless"], a: 3, why: "« will not… unless » = pas de livraison sauf si quelqu'un signe. If ou provided that donneraient un sens illogique avec la négation." },
  { id: 'con-015', rule: 'connecteurs', lvl: 2, q: "The new software is not only faster ____ easier to use.", c: ["and", "or", "nor", "but also"], a: 3, why: "« not only » appelle but also : not only… but also (non seulement… mais aussi)." },
  { id: 'con-016', rule: 'connecteurs', lvl: 2, q: "Production costs have risen sharply; ____, prices will increase next month.", c: ["therefore", "however", "although", "but"], a: 0, why: "Les coûts montent, DONC les prix montent : conséquence → therefore. However exprimerait un contraste." },
  { id: 'con-017', rule: 'connecteurs', lvl: 2, q: "Ms. Lee has not decided ____ to accept the job offer.", c: ["that", "either", "whether", "if"], a: 2, why: "Devant un infinitif (to accept), seul whether est possible pour dire « si ». « if to » est incorrect." },
  { id: 'con-018', rule: 'connecteurs', lvl: 2, q: "The renovation must be completed ____ two weeks of signing the contract.", c: ["within", "during", "since", "between"], a: 0, why: "« ___ two weeks of… » = dans un délai de → within." },
  { id: 'con-019', rule: 'connecteurs', lvl: 2, q: "The store remains open late ____ the holiday season.", c: ["while", "throughout", "since", "among"], a: 1, why: "Nom (the holiday season) + idée de « tout au long de » → throughout. While demande un verbe." },
  { id: 'con-020', rule: 'connecteurs', lvl: 2, q: "____ his lack of experience, Mr. Ford was promoted to team leader.", c: ["Even though", "Although", "In spite of", "Because"], a: 2, why: "Contraste + nom (his lack of experience) → In spite of. Even though et although demandent sujet + verbe." },
  { id: 'con-021', rule: 'connecteurs', lvl: 2, q: "The shipment arrived late ____ a problem at customs.", c: ["because", "although", "since", "due to"], a: 3, why: "Cause + nom (a problem) → due to. Because et since demandent sujet + verbe." },
  { id: 'con-022', rule: 'connecteurs', lvl: 2, q: "The cafeteria will be closed ____ the kitchen is being renovated.", c: ["during", "despite", "throughout", "while"], a: 3, why: "Après le blanc : sujet + verbe (the kitchen is being renovated) → conjonction while. During et throughout veulent un nom." },
  { id: 'con-023', rule: 'connecteurs', lvl: 3, q: "____ being the smallest firm in the region, Greenway won the city contract.", c: ["Although", "Despite", "Even though", "However"], a: 1, why: "Devant un -ing (being), il faut une préposition : Despite. « Although being » sonne bien à l'oral mais est fautif au TOEIC." },
  { id: 'con-024', rule: 'connecteurs', lvl: 3, q: "____ the contract is signed by Friday, the project will start on Monday.", c: ["Provided that", "Unless", "Despite", "In case of"], a: 0, why: "Sens : si le contrat est signé, le projet démarre → Provided that (à condition que). Unless inverse la logique ; despite et in case of veulent un nom." },
  { id: 'con-025', rule: 'connecteurs', lvl: 3, q: "The library will remain closed ____ further notice.", c: ["by", "until", "since", "within"], a: 1, why: "Expression figée : until further notice (jusqu'à nouvel ordre). « remain closed » = durée → until." },
  { id: 'con-026', rule: 'connecteurs', lvl: 3, q: "The outdoor concert will take place ____ it rains or not.", c: ["whether", "if", "either", "unless"], a: 0, why: "« ___ … or not » = que… ou non → whether. If ne s'emploie pas dans cette structure (whether or not)." },
  { id: 'con-027', rule: 'connecteurs', lvl: 3, q: "Both the sales team ____ the marketing team will attend the workshop.", c: ["or", "nor", "and", "but also"], a: 2, why: "« Both » appelle and : both… and. Ne pas confondre avec not only… but also." },
  { id: 'con-028', rule: 'connecteurs', lvl: 3, q: "The offices will be renovated in May; ____, staff will work from the Elm Street branch.", c: ["meanwhile", "while", "during", "whereas"], a: 0, why: "Après un point-virgule + virgule, il faut un adverbe de liaison : meanwhile (pendant ce temps). While et whereas ne s'emploient pas seuls entre « ; » et « , »." },
  { id: 'con-029', rule: 'connecteurs', lvl: 3, q: "Please use the stairs ____ fire.", c: ["in case", "unless", "in case of", "so that"], a: 2, why: "« fire » est un nom → in case of (en cas de). In case seul est suivi de sujet + verbe." },
  { id: 'con-030', rule: 'connecteurs', lvl: 3, q: "____ to reduce costs, the company switched to a cheaper supplier.", c: ["So that", "Because", "Due", "In order"], a: 3, why: "Le « to » est déjà là : il faut compléter in order to + verbe (afin de). So that demande sujet + verbe." }
];
