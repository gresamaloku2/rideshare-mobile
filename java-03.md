# RideShare — Java 3

## Çfarë ndërtova
Ndërtova tri ekranet e RideShare me Next.js: listën kryesore me tri karta, faqen e detajeve për çdo udhëtim dhe faqen e simuluar të kërkesës.

## Provat që bëra
### Prova 1: Lista në telefon
Hapa faqen kryesore në pamjen e telefonit; prisja tri karta pa lëvizje anash; pashë tri kartat të rreshtuara qartë pa lëvizje anësore horizontale.

### Prova 2: Detajet e udhëtimit të dytë
Klikova kartën 2; prisja adresën /udhetimi/2 dhe vendtakimin e saj; pashë të dhënat e plota të Fushë Kosovës dhe vendtakimin te stacioni kryesor.
Shënova edhe çfarë ndodhi te karta 3 (zero vende) dhe te /udhetimi/99: te karta 3 butoni ishte i çaktivizuar sepse kishte 0 vende, kurse te /udhetimi/99 u shfaq faqja me mesazhin "Udhëtimi nuk u gjet" dhe butoni për kthim te lista.

### Prova 3: Kërkesa në pritje
Klikova Kërko vend; prisja “Simulim: Në pritje”, pa rezervim real; pashë mesazhin e simuluar në pritje. Pastaj u ktheva te detajet dhe lista: lidhjet për kthim mbrapa funksionuan siç duhet.

## Çfarë do të përmirësoj
Do të shtoj mundësinë e ruajtjes reale të kërkesës dhe lidhjen me një bazë të dhënash për përditësimin dinamik të vendeve.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për strukturimin e faqeve me Next.js App Router dhe konfigurimin e skedarëve, ndërsa të gjitha testet dhe rrugët dinamike i verifikova vetë në shfletues.
