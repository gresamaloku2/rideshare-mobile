# RideShare — Java 7

## Rasti im
GitHub: gresamaloku2
Kodi: P7-609
Skenari i zgjedhur (numri dhe titulli, nga Rastet 1-5): Rasti 2 · Pa vende
ID i udhëtimit në projektin tim: 3
Të dhënat fiktive të rastit: Lipjan → AAB, 07:45, Qendra e qytetit, 0 vende

## Parashikimi
Para fillimit të kodimit parashikova që kur udhëtimi ka 0 vende të lira, butoni i veprimit duhet të jetë plotësisht i çaktivizuar dhe përdoruesi nuk duhet të mund të hyjë në një gjendje ku premtohet rezervim. Nëse përdoruesi hap faqen e kërkesës drejtpërdrejt, duhet të shfaqet një njoftim i qartë që udhëtimi është plotësuar dhe një mundësi për t'u kthyer te lista.

## Dy probleme
1. Kur udhëtimi kishte 0 vende të lira, te faqja e kërkesës shfaqej vetëm një titull i shkurtër pa shpjegim dhe pa një buton apo lidhje për t'u kthyer përsëri te lista e udhëtimeve.
2. Butoni i veprimit te lista kryesore nuk e tregonte menjëherë statusin "Nuk ka vende të lira", duke e detyruar përdoruesin të klikonte te detajet për ta kuptuar që vendet ishin të zëna.

## Korrigjimi
Skedari: aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx
Ky skedar paraqet faqen e kërkesës së simuluar për një udhëtim. E modifikova bllokun kur udhëtimi ka 0 vende të lira duke shtuar mesazhin e plotë sqarues se ky udhëtim është plotësuar dhe nuk mund të bëhet kërkesë rezervimi, si dhe shtova butonin me lidhje direkte "Kthehu te lista e udhëtimeve" për të përmirësuar navigimin e përdoruesit.

## Versionet
Para: https://github.com/gresamaloku2/rideshare-mobile/commit/1991d776326d54ca2770aad76ca56dec44076d68
Pas: https://github.com/gresamaloku2/rideshare-mobile/commit/d61164ea369ae2716cf7a5d1a081481455462fb2

## Provat që bëra
### Prova 1
Hapat: Hapa faqen kryesore http://localhost:3000, navigova te udhëtimi ID 3 (Lipjan) me 0 vende dhe kontrollova butonin e veprimit.
Pritshmëria: Butoni duhet të shfaqë tekstin "Nuk ka vende të lira" dhe të jetë i çaktivizuar (disabled).
Vëzhgimi: Butoni ishte i çaktivizuar me stilin gri dhe nuk lejonte klikim për të kërkuar vend.

### Prova 2
Hapat: Hapa drejtpërdrejt adresën http://localhost:3000/udhetimi/3/kerkesa në shfletues për të testuar sjelljen pas korrigjimit të kodit.
Pritshmëria: Faqja duhet të shfaqë mesazhin e qartë që nuk ka vende dhe butonin për kthim te lista.
Vëzhgimi: U shfaq titulli "Nuk ka vende të lira", paragrafi sqarues dhe butoni "Kthehu te lista e udhëtimeve" i cili me klikim më ktheu te faqja kryesore.

### Prova 3
Hapat: Testova një udhëtim tjetër me vende të lira (ID 1 me 2 vende) dhe klikova butonin "Kërko vend".
Pritshmëria: Kur ka vende të lira (>0), duhet të shfaqet ekrani normal i simulimit "Simulim: Në pritje" me lidhjen te detajet.
Vëzhgimi: Ekrani shfaqi saktë "Simulim: Në pritje" dhe shpjegimin se kërkesa është vetëm demonstrim, duke vërtetuar se korrigjimi nuk ndikoi negativisht te udhëtimet me vende.

## Ndryshimi i ri
Kolegu ndryshoi vlerën e vendeve të lira nga 0 në 1 në Neon për udhëtimin ID 3. Parashikova që pas rifreskimit butoni "Nuk ka vende të lira" do të bëhej aktiv me tekstin "Kërko vend", dhe vërtet pas rifreskimit udhëtimi u bë i disponueshëm për kërkesë.

## Ndihma nga AI
Përdora AI për të analizuar gabimin në navigimin e gjendjes me 0 vende dhe formatimin e raportit sipas strukturës së kërkuar; të gjitha testet, modifikimin e kodit dhe demonstrimin e provave i verifikova vetë në shfletues dhe terminal.
