# RideShare — Java 8

## Çfarë ndërtova
Në këtë javë ndërtova komponentin e zgjedhjes së vendtakimit për udhëtimin e Artës (Vendtakimi.tsx). Përdoruesi mund të shkruajë vendtakimin manualisht ose të kërkojë vendndodhjen nëpërmjet Geolocation API në shfletues vetëm me klikim të qëllimshëm (pa e kërkuar lejen automatikisht sapo hapet faqja). Gjithashtu trajtova të gjitha rastet: pranimin e lejes me shfaqjen e saktësisë në metra, refuzimin e lejes (kodi 1), skadimin e kohës (timeout, kodi 3), si dhe mungesën e mbështetjes së gjeolokalizimit, duke mundësuar gjithmonë vazhdimin përmes vendtakimit manual. Krijova po ashtu faqen e pavarur testuese `/java-08-test` me të dhëna fiktive për testimin automatik me tetë sjellje.

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
- Hapat: Hapa faqen testuese `/java-08-test` në shfletues dhe vëzhgova nëse shfaqet ndonjë kërkesë lejeje. Më pas klikova butonin "Përdor vendndodhjen time" dhe pranova lejen kur shfletuesi e kërkoi.
- Pritshmëria: Faqja të hapet e qetë pa dialog për vendndodhjen. Vetëm pas klikimit mbi butonin e vendndodhjes të thirret Geolocation API, të merret pozicioni me sukses, gjendja të bëhet success dhe të shfaqet saktësia rreth 37 m pa e bllokuar butonin.
- Vëzhgimi: Gjatë hapjes së faqes nuk u kërkua asnjë leje. Pas klikimit të butonit, shfletuesi kërkoi leje, unë e pranova, gjendja kaloi në success me saktësinë e raportuar dhe butoni mbeti i klikueshëm.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
- Hapat: Rifreskova faqen, bllokova lejen e vendndodhjes në parametrat e shfletuesit dhe klikova sërish butonin "Përdor vendndodhjen time". Pas refuzimit, shkrova vendtakimin "Biblioteka" në fushën e tekstit dhe klikova "Konfirmo në telefon". Gjithashtu provova edhe simulimin e skadimit të kohës (timeout).
- Pritshmëria: Refuzimi i lejes (kodi 1) ose skadimi i kohës (kodi 3) duhet të përfundojë gjendjen e pritjes (loading), të kalojë gjendjen në denied ose timeout, të shfaqë mesazh udhëzues dhe të lejojë përdoruesin të konfirmojë vendtakimin me shkrim manual.
- Vëzhgimi: Shfletuesi ktheu gabimin me kod 1 (PERMISSION_DENIED), gjendja kaloi në denied me mesazhin "Leja u refuzua. Shkruaj vendtakimin vetë.", dhe Arta arriti të konfirmojë vendtakimin "Biblioteka" manualisht pa asnjë pengesë.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
- Hapat: Para kryerjes së commit-it dhe push-it, shqyrtova skedarët burimorë, raportin java-08.md dhe konfigurimin për të verifikuar nëse ka ndonjë koordinatë GPS personale ose të dhënë sekrete.
- Pritshmëria: Asnjë koordinatë gjeografike reale e shtëpisë apo vendndodhjes time private, dhe asnjë sekret i databazës apo çelës nuk duhet të ekspozohet në repository publik.
- Vëzhgimi: Të gjitha të dhënat janë plotësisht fiktive dhe testuese (si "Biblioteka", "Parkingu", ose koordinata të simuluara të testit). Asnjë e dhënë reale private nuk u ruajt në skedarët e projektit.

## Ku gjendet puna
- Komponenti i vendtakimit: `aplikacioni/src/components/Vendtakimi.tsx`
- Faqja e pavarur testuese: `aplikacioni/src/app/java-08-test/page.tsx`
- Integrimi te faqja e detajeve të udhëtimit: `aplikacioni/src/app/udhetimi/[id]/page.tsx`
- Konfigurimi i testimit të automatizuar: `mobile-week08.json`
- Lidhja në internet: https://rideshare-mobile-rho.vercel.app/java-08-test

## Çfarë mbetet për përmirësim
Vendtakimi i zgjedhur ruhet përkohësisht në gjendjen lokale të shfletuesit (React state) të Artës. Nëse faqja rifreskohet, vlera e konfirmuar humbet dhe nuk i dërgohet ende shoferit (Dritonit) në bazën e të dhënave. Hapi i ardhshëm do të jetë ruajtja e këtij vendtakimi në backend/Neon dhe sinkronizimi me shoferin.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të kuptuar trajtimin e saktë të kodeve të gabimit në `navigator.geolocation.getCurrentPosition` (kodi 1 për refuzim lejeje dhe kodi 3 për timeout), si dhe organizimin e pastër të gjendjeve me `useState` për të mbajtur tekstin në shkrim të ndarë nga vendtakimi i konfirmuar. Gjithashtu verifikova vetë që elementet `data-testid` të jenë të pranishme në DOM gjatë të gjitha gjendjeve.

## Prova me një hyrje të re
- Hyrja që provova: Tekst vetëm me hapësira të zbrazëta ("   ") në fushën e vendtakimit dhe klikim mbi butonin "Konfirmo në telefon".
- Parashikimi im para klikimit: Parashikova që aplikacioni të mos e pranojë hyrjen bosh, të shfaqë mesazh gabimi dhe të mos e zëvendësojë apo fshijë vendtakimin e mëparshëm të konfirmuar ("Biblioteka").
- Çfarë pashë realisht: U shfaq mesazhi i gabimit "Ju lutem shkruani një vendtakim të vlefshëm." tek elementi meeting-error dhe vlera e konfirmuar te confirmed-meeting mbeti e pandryshuar ("Biblioteka").
- Skedari dhe funksioni që e shpjegojnë: aplikacioni/src/components/Vendtakimi.tsx në funksionin konfirmo() ku kontrollohet teksti.trim().
- Çfarë kuptova ose korrigjova: Kuptova që validimi me trim() parandalon të dhëna boshe dhe ruan integritetin e zgjedhjes paraprake të përdoruesit në gjendjen e aplikacionit.

Këtë pjesë e shpjegoj në klasë. Kontrolli automatik nuk verifikon vërtetësinë e provës.
