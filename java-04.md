# RideShare — Java 4 · Neon dhe PostgreSQL

Ruaje këtë skedar si java-04.md pranë README, jashtë aplikacioni/.
Plotëso të gjitha përgjigjet; hiqi shenjat [PLOTËSO].
Mos vendos DATABASE_URL, pamje të kredencialeve ose të dhëna reale.

## Çfarë ndërtova
Lidha aplikacionin RideShare me databazën PostgreSQL në Neon duke përdorur paketën @neondatabase/serverless. Të gjitha faqet (lista kryesore, detajet dhe kërkesa e simuluar) tani i lexojnë të dhënat drejtpërdrejt nga tabela `udhetimet` përmes funksioneve asinkrone dhe `force-dynamic`.

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
Ndryshova orën e ID 2 nga 08:15 në 08:25 në SQL Editor.
Pas rifreskimit, lista kryesore tregoi orën e re 08:25 për kartën e Fushë Kosovës, dhe faqja e detajeve (/udhetimi/2) gjithashtu shfaqi orën 08:25 pa ndryshuar asnjë rresht kodi në aplikacion.
Më pas e ktheva orën sërish në 08:15 në databazë dhe pas rifreskimit u shfaq sërish ora fillestare 08:15.

### Prova 2: Lista bosh dhe rikthimi
Shtova WHERE false vetëm te pyetja e lexoUdhetimet.
U shfaq mesazhi i saktë "Nuk ka udhëtime për momentin." pa shkaktuar gabim lidhjeje. Pasi hoqa WHERE false dhe e rifreskova faqen, të tri kartat e udhëtimeve u kthyen menjëherë në ekran.

### Prova 3: Lidhja mungon, rikthimi dhe siguria
Ndryshova përkohësisht emrin DATABASE_URL në .env.local, rinisa serverin dhe pashë mesazhin e kapur nga try/catch: "Nuk u lidhëm me databazën. Provo përsëri." me butonin përkatës. Riktheva emrin DATABASE_URL dhe pas rinisjes gjithçka punoi sërish. Skedari .env.local mungon në listën e ndryshimeve në GitHub Desktop pasi është i injoruar saktësisht te .gitignore.

## Ku gjendet puna
Skedari schema.sql gjendet brenda dosjes aplikacioni/, kodi i përditësuar është në src/lib/ dhe src/app/, kurse repository kryesor është: https://github.com/gresamaloku2/rideshare-mobile

## Çfarë mbetet për përmirësim
Kërkesa "Në pritje" mbetet ende një simulim në frontend; hapi i ardhshëm është shtimi i një forme me veprime shkrimi (INSERT/UPDATE) për të zbritur numrin e vendeve të lira dhe për të ruajtur kërkesat reale në databazë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për konfigurimin e skedarëve të lidhjes me Neon (@neondatabase/serverless), strukturimin e schema.sql dhe trajtimin e gabimeve me try/catch; verifikova dhe testova vetë të gjitha provat dhe query-t SQL në Neon Console.
