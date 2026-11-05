# RideShare — Java 5 · Hyrja dhe lejet

## Çfarë ndërtova
Në këtë javë ndërtova sistemin e autentikimit dhe autorizimit me NextAuth dhe GitHub OAuth. Identiteti i përdoruesit verifikohet nga GitHub dhe ruhet në sesion (JWT); roli (udhetar ose shofer) lexohet nga tabela `profilet` në Neon; ndërsa pronësia kontrollohet në nivel serveri përmes kolonës `shofer_id` në tabelën `udhetimet`, duke siguruar që vetëm pronari shofer mund të ndryshojë udhëtimin e vet.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
Hapa /panel pa qenë i kyçur dhe u shfaq butoni "Hyr me GitHub" bashkë me njoftimin për hyrje. Pas autorizimit me GitHub, paneli shfaqi emrin tim, rolin fillestar "udhetar" dhe ID-në e GitHub-it. Pas rifreskimit të faqes sesioni mbeti aktiv dhe të dhënat u ruajtën, kurse pas klikimit të butonit "Dil", sesioni u mbyll dhe faqja kërkoi sërish hyrjen me GitHub.

### Prova 2: Shoferi ndryshon udhëtimin e vet
Pasi e caktova rolin tim si shofer dhe pronar të udhëtimit ID 2 në Neon, hapa panelin dhe vendosa orën e re 08:25. Pas shtypjes së butonit "Ruaj orën", u shfaq mesazhi i suksesit "Ora u ruajt me sukses", dhe ndryshimi u reflektua menjëherë te lista kryesore, te detajet (/udhetimi/2) dhe në Neon SQL Editor. Më pas e ktheva orën sërish në 08:15 siç kërkohet.

### Prova 3: Veprimi pa leje refuzohet
Nga formulari i hapur në panel përdora DevTools për të ndryshuar me qëllim vlerën e fushës së fshehtë nga id="2" në id="1" (udhëtim që i përket shoferit tjetër demo) dhe klikova "Ruaj orën". Serveri e refuzoi veprimin dhe shfaqi mesazhin "Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi." Në Neon SQL Editor verifikova që ora e udhëtimit ID 1 mbeti e pandryshuar në 08:00.

## Ku gjendet puna
Kodi dhe raporti gjenden në repository-n kryesor në GitHub: https://github.com/gresamaloku2/rideshare-mobile. Skedarët e rinj përfshijnë schema-java05.sql, src/lib/auth.ts, src/lib/lejet.ts, src/components/Hyrja.tsx, src/app/panel/page.tsx, src/app/panel/actions.ts dhe rrugën e autentikimit.

## Çfarë mbetet për përmirësim
Kërkesa për vend mbetet ende një simulim në frontend. Në javët në vazhdim do të implementohet ruajtja reale e kërkesave të udhëtarëve dhe miratimi i tyre nga shoferi.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për konfigurimin e NextAuth v4 me GitHub Provider, zbatimin e funksioneve të kontrollit të lejeve në server (Server Actions me use server) dhe përgatitjen e skemës SQL për profilet dhe pronësinë; të gjitha testimet e hyrjes, rifreskimit dhe refuzimit të lejeve i verifikova vetë.
