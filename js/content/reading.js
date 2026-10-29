// Textes de lecture TOEIC (Parties 6 et 7)
export const TEXTS = [
  // ───────────── PARTIE 7 — passages simples ─────────────
  {
    id: 'p7-01', part: 7, kind: 'E-mail', title: 'Delayed shipment', lvl: 1, target: 180,
    passages: [{
      label: 'E-mail',
      html: `<p class="meta"><b>From:</b> Lucia Ortiz &lt;lortiz@brightlineoffice.com&gt;<br><b>To:</b> Daniel Kemp &lt;dkemp@kempandrowe.com&gt;<br><b>Date:</b> May 11<br><b>Subject:</b> Order #48213</p>
<p>Dear Mr. Kemp,</p>
<p>Thank you for your recent order of twelve ergonomic desk chairs and four standing desks. I am writing to let you know that the standing desks are temporarily out of stock because our supplier has experienced a delay at its factory. The chairs were shipped this morning and should arrive at your office on Thursday, May 14.</p>
<p>We expect to receive the desks by May 22 and will ship them to you the same day. Since the delay is our responsibility, we will waive the delivery fee for the second shipment. If you would prefer to cancel the desks instead, simply reply to this e-mail before May 20, and we will issue a full refund for that portion of your order.</p>
<p>We apologize for the inconvenience.</p>
<p>Sincerely,<br>Lucia Ortiz<br>Customer Service, Brightline Office Supply</p>`
    }],
    questions: [
      { q: 'Why did Ms. Ortiz write the e-mail?', c: ['To confirm that an order has been canceled', 'To request payment for a delivery', 'To explain that part of an order will arrive late', 'To announce a new line of office furniture'], a: 2,
        why: `Paragraphe 1 : « the standing desks are temporarily out of stock » — seuls les bureaux sont en retard, les chaises partent. Piège : « cancel » apparaît, mais c'est une simple option proposée, pas une annulation confirmée.` },
      { q: 'When will the chairs most likely arrive?', c: ['On May 11', 'On May 14', 'On May 20', 'On May 22'], a: 1,
        why: `« should arrive at your office on Thursday, May 14 ». Pièges : May 22 = arrivée des bureaux chez le fournisseur, May 20 = date limite pour annuler, May 11 = date de l'e-mail.` },
      { q: 'What does Ms. Ortiz offer Mr. Kemp?', c: ['Free delivery of the desks', 'A discount on the chairs', 'A different model of desk', 'An extended warranty'], a: 0,
        why: `« we will waive the delivery fee for the second shipment » : waive = renoncer à facturer, donc livraison gratuite des bureaux. Aucune remise sur les chaises ni autre modèle n'est mentionné.` },
    ]
  },
  {
    id: 'p7-02', part: 7, kind: 'Mémo', title: 'Parking lot repaving', lvl: 1, target: 180,
    passages: [{
      label: 'Mémo',
      html: `<p class="meta"><b>To:</b> All Harwell Engineering staff<br><b>From:</b> Facilities Department<br><b>Date:</b> September 3<br><b>Subject:</b> Parking lot repaving</p>
<p>The north parking lot will be closed from Monday, September 15, through Friday, September 19, while it is repaved and new lines are painted. During this period, employees may park in the Grandview Shopping Center lot on Elm Street, which is a five-minute walk from our building. The center's management has kindly agreed to reserve its east section for our staff on weekdays until 7 P.M.</p>
<p>Visitors will still be able to use the six spaces in front of the main entrance. Employees are asked not to park in these spaces.</p>
<p>A free shuttle bus will run between the shopping center and our main entrance every 15 minutes from 7:30 to 9:30 A.M. and from 4:30 to 6:30 P.M. Please direct any questions to Ahmed Rahimi at extension 214.</p>`
    }],
    questions: [
      { q: 'What is the purpose of the memo?', c: ['To report damage to a parking lot', 'To introduce a new shuttle service for visitors', 'To invite staff to a shopping center opening', 'To announce a temporary change in parking arrangements'], a: 3,
        why: `Le parking est fermé une semaine (« will be closed from... through... ») et le personnel doit se garer ailleurs. Piège : la navette existe, mais elle est pour les employés et n'est qu'un détail, pas le but du mémo.` },
      { q: 'What is indicated about the spaces in front of the main entrance?', c: ['They will be repaved first', 'They are for visitors only', 'They are available until 7 P.M.', 'They are located on Elm Street'], a: 1,
        why: `« Visitors will still be able to use the six spaces... Employees are asked not to park in these spaces. » Pièges : « 7 P.M. » et « Elm Street » concernent le parking du centre commercial.` },
      { q: 'What is NOT mentioned in the memo?', c: ['The dates of the work', 'The shuttle schedule', 'The name of the paving company', 'A person to contact'], a: 2,
        why: `Question NOT : on élimine ce qui est dans le texte. Dates (Sept. 15-19), horaires de navette (7:30-9:30...), contact (Ahmed Rahimi) sont cités. L'entreprise de travaux n'est jamais nommée.` },
    ]
  },
  {
    id: 'p7-03', part: 7, kind: 'Annonce', title: 'Assistant store manager', lvl: 2, target: 240,
    passages: [{
      label: 'Offre d\'emploi',
      html: `<h4>Now Hiring: Assistant Store Manager</h4>
<p>Fernwood Garden Centers, a family-owned business with five locations across the Portland area, is looking for an assistant store manager for our newest location in Beaverton, scheduled to open in March.</p>
<p>Responsibilities include supervising a team of 10 to 15 sales associates, preparing weekly work schedules, monitoring inventory, and helping customers with plant selection and care. The successful candidate will report directly to the store manager and will oversee the store in his or her absence.</p>
<p><b>Requirements:</b></p>
<ul><li>At least two years of supervisory experience in retail</li>
<li>Knowledge of plants and gardening (a horticulture certificate is a plus but not required)</li>
<li>Availability on weekends, especially from April to June, our busiest season</li></ul>
<p>We offer a competitive salary, a 20 percent employee discount, and paid training at our Gresham headquarters.</p>
<p>To apply, send a résumé and a short cover letter to jobs@fernwoodgarden.com by January 31. Only candidates selected for an interview will be contacted.</p>`
    }],
    questions: [
      { q: 'What is suggested about Fernwood Garden Centers?', c: ['It was recently purchased by a larger company', 'It is expanding its operations', 'It offers horticulture courses to customers', 'It is closed on weekends'], a: 1,
        why: `Inférence : « our newest location in Beaverton, scheduled to open in March » → l'entreprise ouvre un nouveau magasin, donc elle s'agrandit. Piège : « family-owned » contredit le rachat ; les week-ends sont au contraire très actifs.` },
      { q: 'What is NOT a requirement for the position?', c: ['Experience supervising staff', 'Knowledge of gardening', 'A horticulture certificate', 'Availability on weekends'], a: 2,
        why: `« a horticulture certificate is a plus but not required » : c'est un atout, pas une exigence. Les trois autres figurent dans la liste « Requirements ».` },
      { q: 'The word "oversee" in paragraph 2, line 3, is closest in meaning to', c: ['ignore', 'observe', 'visit', 'be in charge of'], a: 3,
        why: `« will oversee the store in his or her absence » = diriger le magasin quand le gérant est absent → « be in charge of ». Piège : « observe » ressemble à « see », mais le sens ici est « superviser », pas « regarder ».` },
      { q: 'What is indicated about the period from April to June?', c: ['It is the company\'s busiest time', 'Training takes place at headquarters', 'The new store will open', 'Interviews will be held'], a: 0,
        why: `« especially from April to June, our busiest season ». Piège : le magasin ouvre en mars (« scheduled to open in March »), pas en avril.` },
    ]
  },
  {
    id: 'p7-04', part: 7, kind: 'Messagerie', title: 'Brochure problem', lvl: 2, target: 180,
    passages: [{
      label: 'Messagerie',
      html: `<p><b>Karen Liu [10:12 A.M.]</b><br>Hi Tom, are you still at the printer's?</p>
<p><b>Tom Becker [10:14 A.M.]</b><br>Just arrived. They say the brochures for the trade fair are ready, but the cover color looks much darker than on the proof we approved.</p>
<p><b>Karen Liu [10:15 A.M.]</b><br>How much darker?</p>
<p><b>Tom Becker [10:17 A.M.]</b><br>Noticeably. The logo is hard to read against the background.</p>
<p><b>Karen Liu [10:18 A.M.]</b><br>That's not acceptable. The fair starts Friday.</p>
<p><b>Tom Becker [10:20 A.M.]</b><br>The manager says they can reprint the covers by Thursday at noon at no charge.</p>
<p><b>Karen Liu [10:21 A.M.]</b><br>That works. Can you pick them up then?</p>
<p><b>Tom Becker [10:22 A.M.]</b><br>I have a client meeting Thursday morning, but I'll be free after one.</p>
<p><b>Karen Liu [10:23 A.M.]</b><br>Perfect. I'll let Ms. Patel know the booth materials will be a little late.</p>`
    }],
    questions: [
      { q: 'What problem does Mr. Becker report?', c: ['The brochures have not been printed', 'The logo was left off the cover', 'The printer charged too much', 'The cover color is too dark'], a: 3,
        why: `« the cover color looks much darker than on the proof ». Piège : le logo est présent mais « hard to read », pas absent ; les brochures sont imprimées (« are ready »).` },
      { q: 'At 10:18 A.M., what does Ms. Liu mean when she writes, "That\'s not acceptable"?', c: ['She wants the problem corrected before the event', 'She disagrees with the price', 'She thinks the fair should be postponed', 'She is unhappy with Mr. Becker\'s work'], a: 0,
        why: `Contexte : couverture illisible + « The fair starts Friday » → elle exige une correction avant le salon. Le prix n'a pas encore été évoqué, et le reproche vise l'imprimeur, pas Tom.` },
      { q: 'What will Mr. Becker most likely do on Thursday afternoon?', c: ['Meet with a client', 'Attend the trade fair', 'Collect the brochures', 'Call Ms. Patel'], a: 2,
        why: `Les couvertures sont prêtes jeudi midi ; Tom : « I'll be free after one » en réponse à « Can you pick them up then? ». Piège : le rendez-vous client est jeudi matin ; c'est Karen qui préviendra Ms. Patel.` },
    ]
  },
  {
    id: 'p7-05', part: 7, kind: 'Article', title: 'Local bakery chain expands', lvl: 3, target: 300,
    passages: [{
      label: 'Article',
      html: `<h4>Local Bakery Chain Rises to the Challenge</h4>
<p>DUNMORE (April 8) — When Rosa Delgado opened her first Crumb &amp; Co. bakery on Hillcrest Avenue twelve years ago, she baked every loaf herself. Today, the chain operates nine shops in three counties and employs more than 140 people. Next month, it will take its biggest step yet: a 4,000-square-meter production facility in the Westbrook Industrial Park.</p>
<p>"Until now, each shop has had its own kitchen," explained Ms. Delgado. "That worked well when we were small, but it became difficult to keep quality consistent as we grew." The new facility will supply bread and pastries to all locations each morning, freeing up space in the shops for additional seating.</p>
<p>The move has not been without obstacles. Construction was originally scheduled to finish last autumn, but a shortage of specialized ovens pushed the opening back by six months. Ms. Delgado also admits that some long-time customers were worried that the change would affect the taste of their favorite products. To address those concerns, the company invited a group of regular customers to blind taste tests over the winter. According to Ms. Delgado, most participants could not tell the difference between items made in the shops and those prepared in the test kitchen.</p>
<p>The facility will create about 35 new jobs, mainly for bakers and delivery drivers. Crumb &amp; Co. is also considering selling its products through local supermarkets, though Ms. Delgado says no decision will be made before next year.</p>`
    }],
    questions: [
      { q: 'What is the article mainly about?', c: ['The opening of a new supermarket', 'A bakery\'s plan to centralize its production', 'A shortage of qualified bakers', 'A baking competition in Dunmore'], a: 1,
        why: `Idée générale : un site de production unique qui « will supply bread and pastries to all locations ». Piège : les supermarchés ne sont qu'une piste future (« no decision... before next year »).` },
      { q: 'What caused the construction delay?', c: ['Bad weather', 'Customer complaints', 'Difficulty hiring staff', 'A lack of certain equipment'], a: 3,
        why: `« a shortage of specialized ovens pushed the opening back by six months » : shortage of ovens = manque d'équipement. Piège : les clients étaient « worried », mais cela n'a pas retardé le chantier.` },
      { q: 'What is suggested about the blind taste tests?', c: ['They indicated that product quality would not change', 'They were held in supermarkets', 'They were open to the public', 'They took place last autumn'], a: 0,
        why: `« most participants could not tell the difference » → le goût reste le même. Pièges : tests réservés à « a group of regular customers », « over the winter » ; l'automne est la date initiale de fin des travaux.` },
      { q: 'The word "address" in paragraph 3, line 5, is closest in meaning to', c: ['speak to', 'send', 'deal with', 'locate'], a: 2,
        why: `« To address those concerns » = pour répondre à / traiter ces inquiétudes → « deal with ». Pièges : « address » peut signifier « s'adresser à » ou « adresse postale », mais pas ici.` },
    ]
  },
  {
    id: 'p7-06', part: 7, kind: 'Page web', title: 'Community center classes', lvl: 1, target: 180,
    passages: [{
      label: 'Page web',
      html: `<h4>Riverside Community Center — Spring Class Registration</h4>
<table><tr><th>Class</th><th>Day</th><th>Time</th><th>Fee</th></tr>
<tr><td>Beginner Spanish</td><td>Mondays</td><td>6:00–7:30 P.M.</td><td>$60</td></tr>
<tr><td>Digital Photography</td><td>Wednesdays</td><td>7:00–9:00 P.M.</td><td>$85</td></tr>
<tr><td>Watercolor Painting</td><td>Saturdays</td><td>10:00 A.M.–12:00 P.M.</td><td>$70</td></tr>
<tr><td>Introduction to Accounting</td><td>Thursdays</td><td>6:30–8:00 P.M.</td><td>$90</td></tr></table>
<p>All classes run for eight weeks, starting the week of March 2. Center members receive a 15 percent discount on all fees. Registration closes on February 25; classes with fewer than six participants by that date will be canceled, and registered students will receive a full refund.</p>
<p>Photography students must bring their own camera. Art materials for the painting class are included in the fee.</p>`
    }],
    questions: [
      { q: 'Which class takes place on the weekend?', c: ['Beginner Spanish', 'Digital Photography', 'Watercolor Painting', 'Introduction to Accounting'], a: 2,
        why: `Tableau : Watercolor Painting → « Saturdays ». Les autres cours sont en semaine (lundi, mercredi, jeudi).` },
      { q: 'What is indicated about the classes?', c: ['They are free for members', 'They last six weeks', 'They all take place in the evening', 'They may be canceled if too few people register'], a: 3,
        why: `« classes with fewer than six participants by that date will be canceled ». Pièges : « six » = participants, pas semaines (eight weeks) ; les membres ont 15 % de remise, pas la gratuité ; la peinture a lieu le matin.` },
      { q: 'What must Digital Photography students provide?', c: ['Art materials', 'A camera', 'A membership card', 'Proof of a $70 payment'], a: 1,
        why: `« Photography students must bring their own camera. » Piège : les « art materials » sont fournis, et concernent le cours de peinture.` },
    ]
  },
  {
    id: 'p7-07', part: 7, kind: 'Facture', title: 'Catering invoice', lvl: 2, target: 180,
    passages: [{
      label: 'Facture',
      html: `<h4>Kestrel Catering — Invoice</h4>
<p class="meta"><b>Invoice No.:</b> 2291<br><b>Date:</b> June 10<br><b>Bill to:</b> Marlow &amp; Finch Architects, 22 Quay Street<br><b>Event:</b> Staff retirement luncheon, June 6</p>
<table><tr><th>Item</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr>
<tr><td>Lunch buffet (per person)</td><td>40</td><td>$22.00</td><td>$880.00</td></tr>
<tr><td>Vegetarian lunch box</td><td>6</td><td>$18.00</td><td>$108.00</td></tr>
<tr><td>Coffee and tea service</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Celebration cake</td><td>1</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td colspan="3"><b>Subtotal</b></td><td>$1,158.00</td></tr>
<tr><td colspan="3">Deposit paid (May 20)</td><td>–$300.00</td></tr>
<tr><td colspan="3"><b>Balance due</b></td><td><b>$858.00</b></td></tr></table>
<p>Payment is due within 30 days of the invoice date. A 2 percent late fee applies after the due date. Please note that the staff service charge was waived because the event lasted less than three hours.</p>`
    }],
    questions: [
      { q: 'What kind of event did Kestrel Catering serve?', c: ['A retirement celebration', 'A product launch', 'A grand opening', 'A training session'], a: 0,
        why: `En-tête : « Event: Staff retirement luncheon ». Le gâteau « Celebration cake » confirme qu'il s'agit d'une fête.` },
      { q: 'What is true about the invoice?', c: ['It has been paid in full', 'It includes a service charge for staff', 'A deposit was paid before the event', 'It was issued on the day of the event'], a: 2,
        why: `« Deposit paid (May 20) » : avant l'événement du 6 juin. Pièges : il reste $858 à payer ; le service charge a été « waived » (supprimé) ; facture du 10 juin ≠ événement le 6.` },
      { q: 'By what date must the balance be paid to avoid a late fee?', c: ['June 6', 'June 10', 'July 6', 'July 10'], a: 3,
        why: `« due within 30 days of the invoice date » : facture du 10 juin + 30 jours = 10 juillet. Piège : July 6 compte à partir de la date de l'événement.` },
    ]
  },
  {
    id: 'p7-08', part: 7, kind: 'Avis', title: 'Water service interruption', lvl: 1, target: 120,
    passages: [{
      label: 'Avis',
      html: `<h4>Notice to Residents — Lakeview Towers</h4>
<p>Please be advised that water service to the entire building will be shut off on Tuesday, November 4, from 9:00 A.M. to approximately 2:00 P.M. so that our maintenance team can replace the main water valve in the basement. Residents are encouraged to store water for drinking and cooking before the shutoff. The laundry room on the ground floor will also be closed during this time.</p>
<p>We apologize for any inconvenience. If you have questions, please contact the building office at 555-0148 between 8:00 A.M. and 5:00 P.M., Monday through Friday.</p>`
    }],
    questions: [
      { q: 'Why will the water be shut off?', c: ['To clean the laundry room', 'To replace a piece of equipment', 'To inspect the apartments', 'To repair the basement floor'], a: 1,
        why: `« so that our maintenance team can replace the main water valve » : une vanne = un équipement. Pièges : « laundry room » et « basement » sont dans le texte mais pas pour cette raison.` },
      { q: 'What are residents advised to do?', c: ['Leave the building', 'Call the office before 9 A.M.', 'Use the ground-floor laundry room', 'Store water before the shutoff'], a: 3,
        why: `« Residents are encouraged to store water... before the shutoff ». Piège : la laverie du rez-de-chaussée sera justement fermée.` },
    ]
  },
  {
    id: 'p7-09', part: 7, kind: 'Communiqué', title: 'New route to Lisbon', lvl: 3, target: 270,
    passages: [{
      label: 'Communiqué de presse',
      html: `<h4>Solavia Airlines to Launch Direct Service to Lisbon</h4>
<p>FOR IMMEDIATE RELEASE — MONTREAL, February 12 — Solavia Airlines announced today that it will begin nonstop flights between Montreal and Lisbon on June 1. The route will operate four times a week during the summer season and three times a week from October through May. — [1] —</p>
<p>The flights will use the carrier's new A321 aircraft, which seats 190 passengers in two classes. Business-class travelers will have access to fully reclining seats, while all passengers will enjoy free wireless Internet. — [2] —</p>
<p>"Portugal has become one of the most requested destinations among our customers," said Solavia's chief commercial officer, Marc Tremblay. "Until now, they have had to connect through other European cities, which can add several hours to the trip." — [3] —</p>
<p>Introductory one-way fares start at $499, including taxes, for tickets purchased before March 15. Members of Solavia's frequent-flyer program, SkyPoints, will earn double points on the new route through the end of August. — [4] —</p>
<p>Solavia currently serves 38 destinations in North America, Europe, and the Caribbean. Lisbon will be its fifth European city, after Paris, Brussels, Dublin, and Madrid.</p>`
    }],
    questions: [
      { q: 'What is the purpose of the press release?', c: ['To announce a new flight route', 'To report record passenger numbers', 'To introduce a new frequent-flyer program', 'To advertise a new aircraft model'], a: 0,
        why: `Titre et 1re phrase : « will begin nonstop flights between Montreal and Lisbon ». Pièges : SkyPoints existe déjà ; l'A321 n'est qu'un détail.` },
      { q: 'What is indicated about the Montreal–Lisbon flights?', c: ['They will operate daily in summer', 'They will be less frequent in winter', 'They will stop in Paris', 'They will offer only business class'], a: 1,
        why: `« four times a week during the summer... three times a week from October through May » → moins de vols en hiver. Pièges : vols « nonstop » ; Paris est une autre destination ; « two classes ».` },
      { q: 'What is NOT mentioned about the A321 aircraft?', c: ['Its seating capacity', 'Its Internet service', 'Its fuel efficiency', 'Its business-class seats'], a: 2,
        why: `Cités : « seats 190 passengers », « free wireless Internet », « fully reclining seats ». La consommation de carburant n'est jamais évoquée.` },
      { q: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?<br>"The new service will save them a considerable amount of time."', c: ['[1]', '[2]', '[3]', '[4]'], a: 2,
        why: `« them » renvoie aux clients et « save time » répond à « which can add several hours to the trip », juste avant [3]. Astuce : cherche le pronom et le lien logique.` },
    ]
  },

  // ───────────── PARTIE 7 — doubles passages ─────────────
  {
    id: 'p7-10', part: 7, kind: 'Double', title: 'Conference room rental', lvl: 2, target: 300,
    passages: [
      {
        label: 'Annonce',
        html: `<h4>Harbor View Conference Center</h4>
<p>Host your next event by the water! Choose from three fully equipped rooms:</p>
<table><tr><th>Room</th><th>Capacity</th><th>Half day</th><th>Full day</th></tr>
<tr><td>Bayside Room</td><td>20</td><td>$250</td><td>$400</td></tr>
<tr><td>Marina Hall</td><td>60</td><td>$500</td><td>$850</td></tr>
<tr><td>Lighthouse Suite</td><td>120</td><td>$900</td><td>$1,500</td></tr></table>
<p>All rentals include projectors, Wi-Fi, and free parking. Catering is available from our in-house kitchen at an additional cost. Book before April 30 and receive 10 percent off any full-day rental.</p>`
      },
      {
        label: 'E-mail',
        html: `<p class="meta"><b>From:</b> Nadia Okafor &lt;nokafor@trellisdesign.com&gt;<br><b>To:</b> events@harborviewcc.com<br><b>Date:</b> April 22<br><b>Subject:</b> Reservation inquiry</p>
<p>Hello,</p>
<p>I am organizing a full-day training workshop for Trellis Design on May 16. We expect about 45 participants, so I believe your mid-sized room would be suitable. Could you confirm that it is available on that date? We would also like lunch for all attendees, so please send me your catering menu.</p>
<p>Finally, several of our participants will be coming by train. Is the center within walking distance of Central Station?</p>
<p>Thank you,<br>Nadia Okafor</p>`
      }
    ],
    questions: [
      { q: 'Why did Ms. Okafor write the e-mail?', c: ['To ask about renting a space', 'To cancel a booking', 'To complain about catering', 'To request a train schedule'], a: 0,
        why: `« Could you confirm that it is available on that date? » : elle se renseigne avant de réserver. Piège : « train » apparaît, mais elle demande la distance de la gare, pas des horaires.` },
      { q: 'How much will Ms. Okafor\'s room most likely cost before any discount?', c: ['$400', '$500', '$850', '$1,500'], a: 2,
        why: `Croisement : 45 personnes, « mid-sized room » → Marina Hall (60 places) ; « full-day workshop » → colonne Full day = $850. Piège : $500 = demi-journée.` },
      { q: 'What is suggested about Ms. Okafor\'s reservation?', c: ['It will be for half a day', 'It may qualify for a reduced price', 'It will include free lunch', 'It must be paid by April 30'], a: 1,
        why: `Croisement : e-mail du 22 avril, location à la journée → « Book before April 30 and receive 10 percent off any full-day rental ». Piège : April 30 est une date de réservation, pas de paiement ; le repas est payant (« additional cost »).` },
      { q: 'According to the advertisement, what is NOT included in all rentals?', c: ['Projectors', 'Wi-Fi', 'Parking', 'Meals'], a: 3,
        why: `« All rentals include projectors, Wi-Fi, and free parking. Catering is available... at an additional cost » → les repas sont en supplément.` },
      { q: 'What does Ms. Okafor ask about?', c: ['The cancellation policy', 'The number of projectors', 'How close the center is to a station', 'Transportation from the airport'], a: 2,
        why: `« Is the center within walking distance of Central Station? » Piège : il s'agit d'une gare, pas d'un aéroport.` },
    ]
  },
  {
    id: 'p7-11', part: 7, kind: 'Double', title: 'Hotel lighting project', lvl: 3, target: 330,
    passages: [
      {
        label: 'E-mail 1',
        html: `<p class="meta"><b>From:</b> Gregory Walsh, Operations Manager, Pinecrest Hotels<br><b>To:</b> Amira Haddad, Lumen Lighting Solutions<br><b>Date:</b> October 3<br><b>Subject:</b> Lobby lighting project</p>
<p>Dear Ms. Haddad,</p>
<p>Thank you for the proposal you sent last week for replacing the lighting in the lobbies of our three Pinecrest hotels. Our management team was impressed by the energy savings you projected, and we would like to move forward. However, we have two concerns.</p>
<p>First, your proposal schedules the work at our Riverside location for the second week of November. That is when we host the regional tourism conference, and the hotel will be fully booked. Could that installation be moved to a later date?</p>
<p>Second, the quote of $48,000 is slightly above our budget of $45,000. Is there any flexibility on price, perhaps if we sign a maintenance contract as well?</p>
<p>I look forward to your reply.</p>
<p>Gregory Walsh</p>`
      },
      {
        label: 'E-mail 2',
        html: `<p class="meta"><b>From:</b> Amira Haddad<br><b>To:</b> Gregory Walsh<br><b>Date:</b> October 5<br><b>Subject:</b> RE: Lobby lighting project</p>
<p>Dear Mr. Walsh,</p>
<p>I am delighted to hear that Pinecrest wishes to proceed. Regarding your first point, our crew can complete the Riverside installation during the first week of December instead; the other two hotels will remain on the original schedule.</p>
<p>As for the price, we are unable to lower the cost of the fixtures themselves. However, if you agree to a two-year maintenance contract, we will waive the $3,000 installation fee included in our quote. The maintenance contract costs $150 per month per hotel and covers quarterly inspections and the replacement of any defective parts.</p>
<p>Please let me know if these terms are acceptable, and I will send a revised contract.</p>
<p>Best regards,<br>Amira Haddad</p>`
      }
    ],
    questions: [
      { q: 'What is the main purpose of the first e-mail?', c: ['To reject a proposal', 'To accept a proposal under certain conditions', 'To request a proposal from a lighting company', 'To complain about a completed installation'], a: 1,
        why: `« we would like to move forward. However, we have two concerns » : accord de principe + deux conditions (date, prix). Piège : la proposition existe déjà (« the proposal you sent last week »).` },
      { q: 'Why does Mr. Walsh ask to change the schedule?', c: ['The hotel will be busy with an event', 'The Riverside hotel will be under renovation', 'The lighting fixtures will arrive late', 'The budget has not been approved'], a: 0,
        why: `« That is when we host the regional tourism conference, and the hotel will be fully booked. » Aucune rénovation ni retard de livraison n'est mentionné.` },
      { q: 'If Pinecrest accepts Ms. Haddad\'s offer, how much will the lighting project cost, excluding maintenance?', c: ['$48,000', '$51,000', '$42,000', '$45,000'], a: 3,
        why: `Croisement : devis de $48,000 (e-mail 1) – frais d'installation de $3,000 supprimés (e-mail 2) = $45,000, soit exactement le budget. Piège : $51,000 = ajout au lieu de soustraction.` },
      { q: 'When will the work at the Riverside hotel be done?', c: ['In the first week of November', 'In the second week of November', 'In the first week of December', 'In the second week of December'], a: 2,
        why: `« our crew can complete the Riverside installation during the first week of December instead ». Piège : la 2e semaine de novembre est la date initiale, refusée.` },
      { q: 'In the second e-mail, the word "covers" in paragraph 2, line 4, is closest in meaning to', c: ['includes', 'hides', 'protects', 'reports on'], a: 0,
        why: `« The maintenance contract... covers quarterly inspections » = comprend, inclut. Pièges : « hides » et « protects » sont d'autres sens de « cover », hors contexte.` },
    ]
  },
  {
    id: 'p7-12', part: 7, kind: 'Double', title: 'Library workshops', lvl: 1, target: 300,
    passages: [
      {
        label: 'Programme',
        html: `<h4>Northgate Library — October Workshops</h4>
<table><tr><th>Date</th><th>Workshop</th><th>Instructor</th><th>Room</th></tr>
<tr><td>Oct. 4</td><td>Writing a Strong Résumé</td><td>Linda Park</td><td>Room A</td></tr>
<tr><td>Oct. 11</td><td>Introduction to Spreadsheets</td><td>Omar Sallis</td><td>Computer Lab</td></tr>
<tr><td>Oct. 18</td><td>Starting a Small Business</td><td>Grace Mbeki</td><td>Room B</td></tr>
<tr><td>Oct. 25</td><td>Online Job Searching</td><td>Omar Sallis</td><td>Computer Lab</td></tr></table>
<p>All workshops are held on Saturdays, begin at 10 A.M., and are free for library cardholders. Space in the Computer Lab is limited to 12 people; registration at the front desk is required.</p>`
      },
      {
        label: 'E-mail',
        html: `<p class="meta"><b>From:</b> Omar Sallis<br><b>To:</b> Henry Choi, Library Programs Coordinator<br><b>Date:</b> October 6<br><b>Subject:</b> Schedule change</p>
<p>Hi Henry,</p>
<p>I'm sorry, but I have to attend a family wedding out of town on the weekend of October 25, so I won't be able to lead my second workshop. My colleague Julia Fenn, who also teaches computer skills at the community college, has agreed to replace me. She has led the same workshop before, so participants won't miss anything. Could you update the schedule on the library's Web site?</p>
<p>Also, eight people have already signed up for my October 11 session. I'd be happy to add a second session that afternoon if more people are interested.</p>
<p>Best,<br>Omar</p>`
      }
    ],
    questions: [
      { q: 'What is indicated about the workshops?', c: ['They take place in the evening', 'They start at 10 A.M.', 'They require a fee', 'They are taught by the same instructor'], a: 1,
        why: `« begin at 10 A.M. ». Pièges : gratuits pour les détenteurs de carte ; trois animateurs différents.` },
      { q: 'Why did Mr. Sallis write the e-mail?', c: ['To request a room change', 'To sign up for a workshop', 'To cancel a workshop permanently', 'To arrange for a replacement instructor'], a: 3,
        why: `« My colleague Julia Fenn... has agreed to replace me. » L'atelier n'est pas annulé : il a lieu avec une autre animatrice.` },
      { q: 'Which workshop will Ms. Fenn most likely lead?', c: ['Writing a Strong Résumé', 'Introduction to Spreadsheets', 'Starting a Small Business', 'Online Job Searching'], a: 3,
        why: `Croisement : « my second workshop » le weekend du 25 octobre → programme : Oct. 25 = Online Job Searching (2e atelier d'Omar Sallis).` },
      { q: 'How many more people can register for the October 11 morning session?', c: ['Four', 'Eight', 'Ten', 'Twelve'], a: 0,
        why: `Croisement : Computer Lab « limited to 12 people » (programme) – « eight people have already signed up » (e-mail) = 4 places.` },
      { q: 'What does Mr. Sallis offer to do?', c: ['Update the Web site', 'Teach at the community college', 'Lead an additional session', 'Introduce Ms. Fenn to Mr. Choi'], a: 2,
        why: `« I'd be happy to add a second session that afternoon ». Piège : c'est M. Choi qui doit mettre à jour le site (« Could you update... »).` },
    ]
  },

  // ───────────── PARTIE 7 — triples passages ─────────────
  {
    id: 'p7-13', part: 7, kind: 'Triple', title: 'Office cleaning service', lvl: 2, target: 330,
    passages: [
      {
        label: 'Page web',
        html: `<h4>Greenleaf Office Cleaning — Service Packages</h4>
<table><tr><th>Package</th><th>Frequency</th><th>Includes</th><th>Monthly price</th></tr>
<tr><td>Basic</td><td>Once a week</td><td>Vacuuming, trash removal</td><td>$320</td></tr>
<tr><td>Standard</td><td>Twice a week</td><td>Basic + kitchen and restroom cleaning</td><td>$580</td></tr>
<tr><td>Premium</td><td>Five times a week</td><td>Standard + monthly window washing</td><td>$1,250</td></tr></table>
<p>New customers who sign a 12-month agreement receive their first month free.</p>`
      },
      {
        label: 'E-mail 1',
        html: `<p class="meta"><b>From:</b> Patrick Novak, Office Manager, Ridgeway Accounting<br><b>To:</b> service@greenleafclean.com<br><b>Date:</b> March 2<br><b>Subject:</b> Our service</p>
<p>Hello,</p>
<p>We signed up for your twice-weekly package in January as a new customer, under a one-year agreement. Overall, we have been satisfied, but on two occasions last month the restrooms were not cleaned at all.</p>
<p>Also, our staff has grown and we now occupy a second floor, so we need cleaning every weekday. Could someone contact me to discuss upgrading our package? I would also like to know whether the window washing could be done on a weekend so that it does not disturb our employees.</p>
<p>Patrick Novak</p>`
      },
      {
        label: 'E-mail 2',
        html: `<p class="meta"><b>From:</b> Sofia Brandt, Customer Accounts, Greenleaf Office Cleaning<br><b>To:</b> Patrick Novak<br><b>Date:</b> March 3<br><b>Subject:</b> RE: Our service</p>
<p>Dear Mr. Novak,</p>
<p>I apologize for the missed restroom cleanings. I have spoken with the crew supervisor, and to make up for it, we will deduct $100 from your March bill. I would be glad to move you to the package you need starting April 1.</p>
<p>Window washing is normally done on weekday evenings, but we can schedule it for Saturday mornings at no extra charge. I will call you tomorrow afternoon to finalize the details.</p>
<p>Sofia Brandt</p>`
      }
    ],
    questions: [
      { q: 'Which package did Ridgeway Accounting originally choose?', c: ['Basic', 'Standard', 'Premium', 'A custom package'], a: 1,
        why: `Croisement : « your twice-weekly package » (e-mail 1) → tableau : Twice a week = Standard.` },
      { q: 'What is suggested about Ridgeway Accounting?', c: ['It received one month of service at no cost', 'It recently moved to a new city', 'It plans to cancel its agreement', 'It hired Greenleaf for weekly cleaning'], a: 0,
        why: `Croisement : nouveau client + « one-year agreement » (e-mail 1) → « New customers who sign a 12-month agreement receive their first month free » (page web). Piège : ils occupent un 2e étage, pas une nouvelle ville.` },
      { q: 'How much will Ridgeway Accounting most likely pay per month starting in April?', c: ['$320', '$580', '$1,250', '$1,150'], a: 2,
        why: `Croisement : « cleaning every weekday » = 5 fois/semaine → Premium à $1,250. Piège : $1,150 applique la remise de $100, qui ne concerne que la facture de mars.` },
      { q: 'What does Ms. Brandt offer Mr. Novak?', c: ['A free upgrade', 'A new crew supervisor', 'Window washing twice a month', 'A reduction on a bill'], a: 3,
        why: `« we will deduct $100 from your March bill ». Piège : le passage au Premium n'est pas gratuit ; seul le lavage le samedi est « at no extra charge ».` },
      { q: 'What will Ms. Brandt most likely do on March 4?', c: ['Visit Ridgeway\'s office', 'Telephone Mr. Novak', 'Send a revised agreement', 'Inspect the restrooms'], a: 1,
        why: `E-mail daté du 3 mars : « I will call you tomorrow afternoon » → appel le 4 mars.` },
    ]
  },
  {
    id: 'p7-14', part: 7, kind: 'Triple', title: 'Bike-share expansion', lvl: 3, target: 360,
    passages: [
      {
        label: 'Article',
        html: `<h4>City to Expand Bike-Share Program</h4>
<p>CALDWELL (May 3) — The city's bike-share program, CityCycle, will add 25 new stations this summer, bringing its total to 85. Most of the new stations will be located in the Eastside and Mill District neighborhoods, which have had little coverage until now. The expansion will be funded in part by a grant from the regional transportation authority.</p>
<p>Program director Ellen Ruiz said that ridership rose by 30 percent last year, largely because of commuters. "Our busiest stations are near the train station and the university," she said. The city will also introduce electric bikes at 20 stations; riders will pay an extra $1 per trip to use them.</p>
<p>Annual memberships currently cost $90. Starting July 1, the price will rise to $110, but people who purchase or renew before that date will pay the current rate.</p>`
      },
      {
        label: 'E-mail 1',
        html: `<p class="meta"><b>From:</b> Kenji Watanabe<br><b>To:</b> membership@citycycle.org<br><b>Date:</b> June 20<br><b>Subject:</b> Membership renewal</p>
<p>Hello,</p>
<p>My annual membership expires on August 15. I read in the <i>Caldwell Herald</i> that prices are going up next month. If I renew now, will my new membership begin today, or will it start when my current one ends?</p>
<p>I ride from Eastside to the Mill District every day, so I am also wondering whether electric bikes will be available at the new station on Harper Street.</p>
<p>Kenji Watanabe</p>`
      },
      {
        label: 'E-mail 2',
        html: `<p class="meta"><b>From:</b> CityCycle Membership Services<br><b>To:</b> Kenji Watanabe<br><b>Date:</b> June 21<br><b>Subject:</b> RE: Membership renewal</p>
<p>Dear Mr. Watanabe,</p>
<p>Thank you for your loyalty. If you renew before the price change, your new 12-month membership will begin on the day your current one expires, so you will not lose any days.</p>
<p>Regarding your second question, the Harper Street station is scheduled to open on July 10, and it will be one of the stations offering electric bikes. Please note that electric bike trips longer than 45 minutes are charged an additional $2.</p>
<p>CityCycle Membership Services</p>`
      }
    ],
    questions: [
      { q: 'According to the article, what contributed to the increase in ridership?', c: ['People traveling to work', 'Tourists visiting the city', 'The introduction of electric bikes', 'Lower membership prices'], a: 0,
        why: `« ridership rose by 30 percent last year, largely because of commuters » (commuter = personne qui fait le trajet domicile-travail). Piège : les vélos électriques arrivent seulement cet été.` },
      { q: 'How much will Mr. Watanabe most likely pay if he renews this week?', c: ['$110', '$1 per trip', '$90', '$100'], a: 2,
        why: `Croisement : e-mail du 20 juin, donc avant le 1er juillet → « people who purchase or renew before that date will pay the current rate » = $90. Piège : $110 = nouveau tarif.` },
      { q: 'When will Mr. Watanabe\'s renewed membership begin if he renews in June?', c: ['June 20', 'July 1', 'July 10', 'August 15'], a: 3,
        why: `« will begin on the day your current one expires » + « My annual membership expires on August 15 » (croisement des deux e-mails).` },
      { q: 'What is indicated about the Harper Street station?', c: ['It opened in May', 'It will be one of 20 stations with electric bikes', 'It is near the train station', 'It will open before the new prices take effect'], a: 1,
        why: `Croisement : « one of the stations offering electric bikes » (e-mail 2) + « electric bikes at 20 stations » (article). Piège : ouverture le 10 juillet, donc APRÈS la hausse du 1er juillet.` },
      { q: 'In the article, the word "rate" in paragraph 3, line 2, is closest in meaning to', c: ['speed', 'ranking', 'frequency', 'price'], a: 3,
        why: `« will pay the current rate » = le tarif actuel ($90). « rate » peut aussi vouloir dire vitesse ou taux, mais avec « pay » c'est un prix.` },
    ]
  },

  // ───────────── PARTIE 6 ─────────────
  {
    id: 'p6-01', part: 6, kind: 'Mémo', title: 'New expense system', lvl: 1, target: 140,
    passages: [{
      label: 'Mémo',
      html: `<p class="meta"><b>To:</b> All employees<br><b>From:</b> Human Resources<br><b>Date:</b> April 21<br><b>Subject:</b> New expense reporting system</p>
<p>Starting next month, all travel expenses [1] ____ through our new online system, ExpensePro. The paper forms we currently use will no longer be accepted.</p>
<p>ExpensePro is faster and easier to use than the old process. [2] ____, reimbursements will now be processed within five business days instead of three weeks. [3] ____.</p>
<p>Training sessions will be held in Conference Room B on May 5 and May 7. Attendance is [4] ____ for anyone who travels for work at least once a quarter.</p>`
    }],
    questions: [
      { q: 'Blanc [1]', c: ['submitted', 'must be submitted', 'are submitting', 'have submitted'], a: 1,
        why: `Les dépenses ne « soumettent » pas, elles sont soumises → passif obligatoire : « must be submitted ». « submitted » seul n'a pas d'auxiliaire ; « are submitting » / « have submitted » sont actifs.` },
      { q: 'Blanc [2]', c: ['For example', 'Nevertheless', 'Otherwise', 'Unless'], a: 0,
        why: `La phrase illustre « faster and easier » → exemple : « For example ». « Nevertheless » marquerait une opposition ; « Unless » introduit une subordonnée, pas une phrase.` },
      { q: 'Blanc [3] — phrase à insérer', c: ['Please book your flights at least two weeks in advance.', 'Thank you for attending last week\'s training session.', 'Employees will also be able to upload photos of their receipts from their phones.', 'Conference Room B has recently been renovated.'], a: 2,
        why: `Le paragraphe liste les avantages d'ExpensePro ; « also » ajoute un avantage. Piège : la formation est à venir (May 5 et 7), donc « last week's training » est incohérent.` },
      { q: 'Blanc [4]', c: ['eventual', 'considerate', 'frequent', 'mandatory'], a: 3,
        why: `« Attendance is mandatory » = la présence est obligatoire pour ceux qui voyagent. « eventual » est un faux ami (= final, pas « éventuel ») ; « considerate » = attentionné.` },
    ]
  },
  {
    id: 'p6-02', part: 6, kind: 'E-mail', title: 'Pool closure', lvl: 2, target: 150,
    passages: [{
      label: 'E-mail',
      html: `<p class="meta"><b>To:</b> Yuki Tanaka<br><b>From:</b> Alder Grove Inn<br><b>Subject:</b> Your upcoming stay</p>
<p>Dear Ms. Tanaka,</p>
<p>Thank you for choosing the Alder Grove Inn for your stay next week. We regret to inform you that our swimming pool will be closed for [1] ____ during your visit. We understand that this may be disappointing, [2] ____ the pool was one of the features mentioned in our advertisement. [3] ____.</p>
<p>To make up for this inconvenience, we would like to offer you free access to the Westfield Fitness Club, located just two blocks from the inn. Simply show your room key at the club's front desk.</p>
<p>We look forward to [4] ____ you on April 12.</p>
<p>Sincerely,<br>Guest Services</p>`
    }],
    questions: [
      { q: 'Blanc [1]', c: ['maintain', 'maintained', 'maintenance', 'maintainable'], a: 2,
        why: `Après la préposition « for », il faut un nom : « closed for maintenance ». Les autres sont verbe ou adjectif.` },
      { q: 'Blanc [2]', c: ['especially since', 'in spite of', 'so that', 'unless'], a: 0,
        why: `On donne une raison à la déception → « especially since » (d'autant plus que). « in spite of » doit être suivi d'un nom, pas d'une proposition ; « so that » = but.` },
      { q: 'Blanc [3] — phrase à insérer', c: ['Our restaurant serves breakfast from 7:00 to 10:00 A.M.', 'Unfortunately, the work is required by safety regulations and cannot be postponed.', 'We have received your payment for the conference room.', 'Please return your key when you check out.'], a: 1,
        why: `La phrase justifie la fermeture juste après les excuses : « the work » renvoie à la maintenance. Les autres options n'ont aucun lien avec la piscine.` },
      { q: 'Blanc [4]', c: ['welcome', 'be welcomed', 'welcomed', 'welcoming'], a: 3,
        why: `« look forward to » : « to » est ici une préposition → verbe en -ing : « look forward to welcoming you ». Piège classique du TOEIC.` },
    ]
  },
  {
    id: 'p6-03', part: 6, kind: 'Avis', title: 'Library renovation', lvl: 2, target: 150,
    passages: [{
      label: 'Avis',
      html: `<h4>Notice to Library Users</h4>
<p>The Fairview Public Library's main reading room will close on June 2 for renovation. The project, which [1] ____ new lighting, furniture, and additional power outlets, is expected to take about six weeks.</p>
<p>During this period, books can still be borrowed from the temporary service desk on the second floor. [2] ____, the computer lab will remain open during its regular hours. [3] ____.</p>
<p>We appreciate your [4] ____ while we work to improve our facilities.</p>`
    }],
    questions: [
      { q: 'Blanc [1]', c: ['include', 'includes', 'including', 'to include'], a: 1,
        why: `Sujet de la relative : « which » = « The project » (singulier) → « includes ». « including » / « to include » ne sont pas des verbes conjugués.` },
      { q: 'Blanc [2]', c: ['Instead', 'Otherwise', 'Likewise', 'Therefore'], a: 2,
        why: `Deux services qui restent disponibles → même idée : « Likewise » (de même). « Instead » = à la place ; « Therefore » = conséquence, illogique ici.` },
      { q: 'Blanc [3] — phrase à insérer', c: ['The library was originally built in 1972.', 'Our new opening hours were very popular last year.', 'Thank you for completing our reader survey.', 'Please note, however, that study rooms will not be available until the work is finished.'], a: 3,
        why: `Après deux services maintenus, « however » introduit une restriction logique : les salles d'étude seront indisponibles. Les autres phrases sont hors sujet.` },
      { q: 'Blanc [4]', c: ['patience', 'attention', 'permission', 'interest'], a: 0,
        why: `Formule figée : « We appreciate your patience » (merci de votre patience) pendant des travaux. Les autres noms ne conviennent pas au contexte.` },
    ]
  },
  {
    id: 'p6-04', part: 6, kind: 'Article', title: 'Food research center', lvl: 3, target: 160,
    passages: [{
      label: 'Article',
      html: `<h4>Tarlow Foods Opens Research Center</h4>
<p>BROOKFIELD (March 9) — Tarlow Foods, a maker of frozen meals, opened a research center in Brookfield last Tuesday. When fully staffed next year, the 2,500-square-meter facility [1] ____ more than 60 food scientists and nutrition specialists.</p>
<p>The center's main goal is to develop healthier recipes that contain less salt and sugar [2] ____ sacrificing flavor. "Customers increasingly read the nutrition labels before they buy," said CEO Martin Albright. "[3] ____."</p>
<p>The company chose Brookfield because of its [4] ____ to the state university, whose agricultural science program is among the best in the country.</p>`
    }],
    questions: [
      { q: 'Blanc [1]', c: ['employed', 'has employed', 'will employ', 'was employing'], a: 2,
        why: `Indice temporel : « When fully staffed next year » → futur : « will employ ». Les autres formes renvoient au passé.` },
      { q: 'Blanc [2]', c: ['without', 'unless', 'despite', 'instead'], a: 0,
        why: `« without + -ing » = sans sacrifier le goût. « unless » introduit une proposition ; « despite sacrificing » donne un sens absurde ; « instead » seul ne se place pas devant un -ing (il faudrait « instead of »).` },
      { q: 'Blanc [3] — phrase à insérer', c: ['Our frozen pizzas are sold in over twenty countries.', 'We want them to like what they see there.', 'The building was designed by a local firm.', 'Our stock price rose sharply last year.'], a: 1,
        why: `« them » = customers et « there » = sur les étiquettes (« labels ») : la phrase prolonge directement la citation. Les autres sont des informations isolées.` },
      { q: 'Blanc [4]', c: ['approach', 'neighbor', 'surrounding', 'proximity'], a: 3,
        why: `« proximity to » = proximité de, collocation fixe. « approach » ne signifie pas « proximité » ; « neighbor » est une personne ; « surrounding » est un adjectif.` },
    ]
  },
  {
    id: 'p6-05', part: 6, kind: 'E-mail', title: 'Tote bag order', lvl: 1, target: 140,
    passages: [{
      label: 'E-mail',
      html: `<p class="meta"><b>To:</b> Ben Abrams<br><b>From:</b> Carla Ruiz, PrintMark Promotions<br><b>Subject:</b> Order #7720</p>
<p>Dear Mr. Abrams,</p>
<p>Thank you for your order of 500 printed tote bags. Your order is now being [1] ____. Our design team will send you a digital sample within two business days. Please review it carefully and let us know if any [2] ____ are needed.</p>
<p>Production will begin only after you approve the sample. [3] ____. [4] ____, we recommend replying as soon as possible if your event date is approaching.</p>
<p>Best regards,<br>Carla Ruiz</p>`
    }],
    questions: [
      { q: 'Blanc [1]', c: ['process', 'processed', 'processing', 'processor'], a: 1,
        why: `« is being + participe passé » = passif progressif : la commande est en cours de traitement → « processed ».` },
      { q: 'Blanc [2]', c: ['reviews', 'revenues', 'rewards', 'revisions'], a: 3,
        why: `On parle de modifier l'échantillon : « if any revisions are needed » (modifications). Piège : « reviews » ressemble à « review it », mais signifie avis/critiques.` },
      { q: 'Blanc [3] — phrase à insérer', c: ['Once production starts, your bags will be ready to ship within ten business days.', 'Thank you for applying for the position of designer.', 'We regret that we cannot accept your order.', 'Your sample was approved last week.'], a: 0,
        why: `La phrase suit logiquement « Production will begin... » (« Once production starts »). Les autres contredisent le contexte : commande acceptée, échantillon pas encore envoyé.` },
      { q: 'Blanc [4]', c: ['Nevertheless', 'Therefore', 'In contrast', 'Meanwhile'], a: 1,
        why: `La production dépend de ton accord → conséquence : « Therefore, we recommend replying as soon as possible ». « Nevertheless » et « In contrast » marquent une opposition.` },
    ]
  },
  {
    id: 'p6-06', part: 6, kind: 'Mémo', title: 'Office relocation', lvl: 3, target: 160,
    passages: [{
      label: 'Mémo',
      html: `<p class="meta"><b>To:</b> All staff<br><b>From:</b> Diane Corbett, Director of Operations<br><b>Date:</b> August 28<br><b>Subject:</b> Office move</p>
<p>As many of you know, our lease at 300 Grant Street expires at the end of September. After considering several options, management has decided to relocate to the Rowan Building on Fifth Avenue. The new space is larger and more [1] ____ located, just a short walk from the subway.</p>
<p>[2] ____ the move, each department will receive packing boxes and labels by September 8. Employees are asked to pack their personal items and files by the afternoon of September 25. [3] ____.</p>
<p>The IT team will disconnect and transport all computers over the same weekend, so that everyone can resume work on Monday, September 29, with [4] ____ disruption.</p>`
    }],
    questions: [
      { q: 'Blanc [1]', c: ['convenience', 'convenient', 'conveniently', 'more convenient'], a: 2,
        why: `Le mot modifie le participe « located » → adverbe : « more conveniently located ». « more » est déjà dans la phrase, donc « more convenient » ferait doublon.` },
      { q: 'Blanc [2]', c: ['In preparation for', 'Because', 'Even though', 'As long as'], a: 0,
        why: `Devant un groupe nominal (« the move »), il faut une préposition : « In preparation for the move ». « Because », « Even though », « As long as » introduisent une proposition avec verbe.` },
      { q: 'Blanc [3] — phrase à insérer', c: ['Our current lease was signed ten years ago.', 'Movers will then transport the boxes to the new building on September 26 and 27.', 'The subway fare will increase next month.', 'Please submit your vacation requests by Friday.'], a: 1,
        why: `Chronologie : emballage le 25 → « then » transport les 26-27 (le week-end) → reprise le lundi 29. « the same weekend » au paragraphe suivant confirme ce lien.` },
      { q: 'Blanc [4]', c: ['exceptional', 'considerable', 'frequent', 'minimal'], a: 3,
        why: `Le but du déménagement le week-end est de gêner le moins possible : « with minimal disruption ». « considerable » est grammatical mais contraire au sens.` },
    ]
  },
];
