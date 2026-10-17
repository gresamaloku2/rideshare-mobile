# SHABLLON PRD (Product Requirements Document) - 1 Faqe

**Shkurtesat:** PWA (Progressive Web App - aplikacion web progresiv); PRD (Product Requirements Document - dokumenti i kërkesave të produktit); MVP (Minimum Viable Product - produkti minimal i përdorshëm).  
**Kursi:** Programimi për Pajisje Mobile (2026/2027) **Kolegji AAB**  
**Emri i Projektit:** AAB RideShare  
**Themeluesi / Ekipi:** Gresa Maloku  
**Data & Versioni:** Java 01 · Versioni 1.0 (Draft për MVP)

---

## 1. Përdoruesi dhe Problemi Real
- **Kush e përjeton dhimbjen?** Studentët e Kolegjit AAB që udhëtojnë çdo ditë nga qytetet e tjera drejt kampusit në Prishtinë.
- **Kur ndodh?** Në mëngjes para fillimit të ligjëratave dhe pasdite në kthim.
- **Si e zgjidhin sot?** Autobusë me vonesa ose taksi të shtrenjta, ndërkohë që kolegët me vetura udhëtojnë me ulëse bosh.

## 2. Evidenca e Vëzhgimit (3 Bisedat me Përdoruesit)
- **Biseda 1 (Shofer):** "Shpenzoj shumë naftë çdo muaj. Do të merrja me dëshirë kolegë në veturë po të koordinonim oraret."
- **Biseda 2 (Udhëtar):** "Humba ligjëratën e parë sepse autobusi u vonua. Preferoj t'i ndaj shpenzimet me një koleg."
- **Biseda 3 (Shofer):** "Grupet në WhatsApp janë kaotike dhe mesazhet humbasin lehtë."

## 3. Hipoteza e Vlerës
> **Nëse** u ofrojmë studentëve një PWA mobile për studentët e AAB-së ku shoferët postojnë orën dhe vendet e lira,  
> **atëherë** studentët do të kursejnë kohë dhe para, kurse vonesat në ligjërata do të ulen ndjeshëm.

## 4. Rrjedha Kryesore e Përdoruesit (Core Flow - Max 5 Hapa)
1. **Kyçja:** Studenti shikon udhëtimet e disponueshme.
2. **Kërkimi / Postimi:** Shoferi shënon nisjen/orën/vendet; udhëtari shikon listën.
3. **Kërkesa:** Udhëtari zgjedh veturën dhe shtyp butonin `[Kërko vend]`.
4. **Konfirmimi:** Shoferi pranon kërkesën e udhëtarit.
5. **Përfundimi:** Udhëtimi kryhet me sukses.

## 5. Kufijtë e MVP-së (Scope Contract)
- **BRENDA MVP-së (Maksimumi 3 funksione):**
  1. Shfaqja e listës së udhëtimeve me orare dhe vende të lira.
  2. Faqja e detajeve të udhëtimit me vendtakimin.
  3. Kërkesa e simuluar për vend të lirë.
- **JASHTË MVP-së (Të përjashtuara qëllimisht për këtë semestër):**
  - Zero pagesa me kartela bankare brenda aplikacionit.
  - Zero navigim GPS apo harta në kohë reale.
  - Zero sistem chat-i të brendshëm në kohë reale.

## 6. Kriteret e Pranimit (Acceptance Criteria - Çfarë testohet)
- [x] **AC-1:** Kur një shofer poston vende të lira, ato shfaqen në listë.
- [x] **AC-2:** Kur vendet janë 0, butoni çaktivizohet automatikisht.
- [x] **AC-3:** Sistemi njofton përdoruesin nëse adresa nuk përputhet me një udhëtim ekzistues (404).

## 7. Modeli Minimal i të Dhënave
```sql
udhetimet (id, nisja, destinacioni, ora, vendtakimi, vende)
```

## 8. Rreziku Kryesor që Duhet Testuar
- **Rreziku:** A do të kenë besim studentët të udhëtojnë me kolegë që nuk i njohin personalisht?
- **Zgjidhja:** Përdorimi i komunitetit të brendshëm të studentëve të AAB-së.
