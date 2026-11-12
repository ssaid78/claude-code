# Galeries mesurées et liste Designeer

## Provenance et limites

Deux passes, toutes deux le 12 novembre 2026, en Chromium, sans compte.

**Première passe (série A, 7 galeries).** Pages d'accueil de 60fps, Cosmos, Curated, Minimal Gallery, Layers, SEESAW et Recent, à 1440 × 900 puis 390 × 844. Valeurs lues dans les styles calculés, vérifiées sur six captures. Curated : les vignettes ne se sont pas chargées, la mise en page est mesurée mais pas les images. Cosmos : sans compte, l'accueil est une page de présentation, ses valeurs de grille ne sont pas reprises.

**Seconde passe (parcours du site et série B, 12 galeries).**
- Designeer lui-même renvoie une vérification anti-robot Cloudflare sur ses pages HTML et leurs versions `.md`. Elle n'a pas été contournée. Ont été lus : `sitemap.xml` (874 adresses), `llms.txt`, `llms-full.txt` (128 Ko : pages de collection, fiches détaillées des dix premiers éléments de chaque collection, à-propos, soumission, sponsor), `ai.txt`, `robots.txt`.
- Les captures que Designeer publie pour chaque fiche (`cdn.designeer.xyz/items/<id>/poster/1200.webp`, référencées dans le sitemap) ont été téléchargées pour les 136 fiches Inspiration qui en ont une, puis regardées en planches de seize. Les fiches 1 à 88 sont presque toutes des galeries ; à partir de 89 environ, ce sont surtout des fiches « Reading » (livres, cours, blogs), écartées des règles.
- Série B, mesurée avec le même script : One Page Love, posts.design, Sections.wtf, Landingfolio, Land-book, OGFolio, Hover States, SaaSFrame, Navbar Design, CTA Gallery, Collect UI, Mobbin (héros seulement). Les CDN d'images de ces sites n'étaient pas autorisés par le réseau : la mise en page et les styles sont mesurés, les images sont souvent vides. Les valeurs de colonnes de Mobbin, Navbar Design et SaaSFrame sont faussées par des carrousels et ne sont pas reprises.
- Non mesurées : Awwwards (502), Saaspo, Lapa Ninja et Landing Love (vérification Cloudflare), Dribbble (page vide), Godly et Supahero (redirection vers un hôte non autorisé), SiteInspire (429 lors de la première passe). Leurs captures Designeer ont été regardées.
- « Meilleures galeries » = les premières dans l'ordre éditorial de Designeer (ordre du sitemap, de `llms.txt` et des pages de collection). Aucun compteur de vues n'a été lu.

## Série A : tableau comparatif (1440 px)

| | 60fps | Curated | Minimal Gallery | Layers | SEESAW | Recent | Cosmos |
|---|---|---|---|---|---|---|---|
| Fond | `rgb(245,245,245)` | blanc | noir | blanc | blanc | blanc | blanc |
| Texte | `rgb(92,92,92)` | `rgb(23,24,26)` | `rgb(179,179,179)`, titres blancs | blanc sur image, `rgb(55,65,81)` | `rgb(28,28,28)` | `oklch(0.15 0 0)` | quasi noir |
| Gris secondaire | `rgb(173,173,173)` | `rgb(106,105,100)` | `rgb(147,147,147)` | `rgb(107,114,128)` | `rgb(163,163,163)` | noir à 49 % | gris moyen |
| Police | Inter | Inter (+ Google Sans au titre) | Inter | Inter | Inter | Inter | cosmosOracle |
| Corps dominant | 14 px | 14 px / 13 px | 17 px | 13 px | 14 px | 13 px | 16–20 px |
| Graisses | 500 | 400, 500 | 400, 510 | 500 | 400 | 400, 500 | 400, 500, 700 |
| Titre h1 | 20 px / 500 | 46 px / 500, −0,92 px | 36 px / 510, −1,15 px | 16 px (masqué) | 36 px / 600, −1,44 px | 16 px / 500 | 72 px / 700, −2,88 px |
| Colonnes | 3 | 3 | 3 | 3, maçonnerie | 3 | 4, maçonnerie | — |
| Largeur vignette | 340 | 462 | 425 | 365 | 352 | 276 | — |
| Ratio | 1:1 | 1,78 | 1,80 | natif (1,33 ; 1,78 ; 1,6 ; 1) | 1,79 | natif (1,33 ; 1 ; 0,56 ; 0,8) | 1:1 |
| Gouttière | 4 (cartes de 360 à fond propre) | 12 | 40 × 44 | 12 | 16 × 24 entre cartes, 42 entre images | 12 | 24 |
| Marge latérale | 186 (contenu centré, 1088 de large) | 18 | 40 | 300 (barre latérale) | 275 (barre latérale) | 268 (barre latérale) | 32 |
| Rayon | 20 px | 28 px | 7 px | 6 px | 6 px image, 8 px carte | 8 px | 12 px |
| Bordure | aucune | aucune | 1 px `rgb(24,24,24)` | aucune | 1 px `rgb(245,245,245)` | aucune | aucune |
| Ombre | aucune | aucune | aucune | aucune | aucune | aucune | aucune |
| Fond de vignette | blanc sur carte `rgb(250,250,250)` | `rgb(241,241,240)` | `rgb(24,24,24)` | — | — | `oklch(0.97 0 0)` | gris très clair |
| Légende | n° · app · titre, 14/500 | nom, 13/400 | titre blanc 17 + date grise 14 | aucune (avatar et compteur sur l'image) | nom 14 + description grise 14 | aucune (avatar et flèche sur l'image) | — |
| Vidéos dans la grille | 33 | 16 | 0 | 0 | 6 | 17 | 5 |
| Attributs vidéo | preload none | muted loop, preload none | — | — | autoplay muted loop, preload metadata | muted loop, preload metadata | muted loop, preload none |
| Transition image | — | opacity 0,35 s ease | opacity 0,2 s ease | opacity 0,3 s `cubic-bezier(.4,0,.2,1)` | all 0,15 s `cubic-bezier(.4,0,.2,1)` | transform 0,12 s `cubic-bezier(.2,0,0,1)` | — |
| Navigation | barre haute, compteurs en exposant | barre haute fixe | barre haute fixe 72 px, fond noir à 92 % | barre latérale | barre haute fixe 67 px + catégories à gauche | barre latérale | barre haute collante 92 px |
| Axe de classement | motif d'interaction, app | secteur, style | type de site | étiquettes | catégorie, section de page | médium | — |
| Tri | — | — | « All types » | « Trending » | — | « Recent » | — |
| Bouton | 40 px, rayon 10 | 40 px, pastille | 34 px | 32 px, rayon 6 | 32 px, rayon 10 / pastille | 28 px, pastille | 40 px, pastille |
| Pagination | « Load More » | — | — | — | tout chargé (page de 94 953 px) | — | — |

## Série A : à 390 px

| | Colonnes | Marge latérale | Largeur vignette | Titre h1 | En-tête |
|---|---|---|---|---|---|
| 60fps | 1 | 25 | 340 | 18 px | — |
| Curated | 1 | 19 | 353 | 34 px | 56 px fixe |
| Minimal Gallery | 1 | 21 | 348 | 27 px, corps 16 px | 54 px fixe |
| Layers | 1 | 12 | 366 | — | barre latérale masquée |
| SEESAW | 1 | 25 | 340 | 36 px (inchangé) | 67 px fixe |
| Recent | 1 | 16 | 358 | 16 px | barre latérale masquée |

## Série B : tableau comparatif (1440 px)

| | One Page Love | posts.design | Sections.wtf | Landingfolio | Land-book | OGFolio | Hover States | SaaSFrame | CTA Gallery | Navbar Design | Collect UI |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Fond | `rgb(247,244,243)` | `rgb(245,245,245)` | blanc | blanc | `rgb(247,246,245)` | `rgb(10,10,10)` | `rgb(241,241,241)` | `rgb(251,251,252)` | `rgb(14,15,17)` | `rgb(254,254,254)` | blanc (`oklch(1 0 0)`) |
| Texte | `rgb(45,37,31)` | `rgb(23,23,23)` | noir | `rgb(28,25,23)` | `rgb(43,42,42)` | `rgb(237,237,237)` | noir | `rgb(17,19,24)` | blanc | `rgb(24,24,24)` | `oklch(0.145 0 0)` |
| Police | Geist + Geist Mono | Inter | Outfit + JetBrains Mono | Plus Jakarta Sans + Geist Mono | Inter | Inter | Fakt | Onest + IBM Plex Mono | Inter Display, Overused Grotesk | Geist + Fragment Mono | Geist |
| Corps dominant | 12,75 / 17 px | 16 px | 12 px | 14 px | 14 px | 16 px | 14 px | 15 px | 12 px | 16 px | 14 px |
| Titre h1 | 44 px / 500, −1,4 px | 54 px / 600, −2,97 px | aucun (logo géant) | 52 px / 600, −1,56 px | 24,5 px / 600 | 48 px / 700, −1,2 px | aucun | 68 px / 600, −3,06 px | 46 px / 600 | 120 px / 400, −4,8 px | 30 px / 600, −1,32 px |
| Colonnes | 3 | 4 | 3 | 4 | maçonnerie, ~4 (lu à l’écran) | 3 | 3 | — | 3 (lu à l’écran) | — | — |
| Largeur vignette | 404 | 468 | 448 | 240 | non mesurée | 436 | 384 | 232 | 364 | — | — |
| Ratio | 1,59 | 1,78 | 1,78 | 0,75 | 0,67 (portrait) | 1,9 | 2,56 | 1,6 | 2,17 | 2,2 | — |
| Gouttière | 36 | 8 | 24 | 39 | non mesurée | 27 | 43 | — | non mesurée | — | — |
| Haut de la 1re vignette | 595 | 600 | 521 | 550 | 538 | 404 | 986 | 1451 | 560 | — | 499 |
| Rayon | 8 px | 20 px | 5 px | 6 px | 9 px | 16,8 px | 5 px | 10 px | 10 px | — | 14 px |
| Bordure | 1 px `rgb(222,213,207)` | aucune | aucune | aucune | aucune | aucune | aucune | 1 px `rgb(228,229,233)` | aucune | — | — |
| Ombre | aucune | aucune | aucune | aucune | diffuse, gris à 25–27 % | aucune | aucune | `0 2px 4px` à 4 % + `0 16px 40px` à 12 % | aucune | — | — |
| Légende | nom + étiquettes, flèche ↗ | aucune | site · section, mono | nom | nom — auteur | nom | date, URL, phrase, centrées | — | nom du site | — | — |
| Vidéos | 8, muted loop, preload none | 10, muted loop, preload metadata | 192, muted loop, preload none | 2 | 0 | 0 | 25, autoplay loop, preload metadata | 0 | 0 | 0 | 0 |
| Images lazy | 29/48 | 179/182 | — | 94/101 | 33/39 | 133/140 | 0/25 | 116/124 | — | 64/70 | 0/17 |
| En-tête | collant 86 px | collant 80 px | — | barre latérale + haut | collant 61 px | collant 64 px | collant 56 px | collant 64 px | barre latérale | collant 73 px | collant 64 px |
| Axe de classement | type (Websites, Sections, Typefaces, Templates) | type de publication | section de page | type de page, secteur (avec compteurs) | type de page | — | — | type d'écran | sous-type de CTA | style, type | — |
| Preuve de curation | « Hand-picked since 2008 », « The Love Letter, every 2 weeks » | « 1,120+ brands », « updated daily », « 50 joined today » | — | « 961 sites · 3 added this week » | « updated daily » | — | — | « Updated weekly », « 256 screens » | « Freshly added » | « 29 navbars · 9 styles · 7 types » | « Daily », « delivered weekly » |

### Série B : à 390 px

| | Colonnes | Marge latérale | Largeur vignette | Titre h1 |
|---|---|---|---|---|
| One Page Love | 1 | 20 | 352 | 32 px |
| posts.design | 1 | 5 | 380 | 35,9 px |
| Sections.wtf | 1 | 17 | 356 | — |
| Landingfolio | 2 | 22 | 160 (gouttière 25) | 34 px |
| Land-book | 1 | 16 | 360 | 24,5 px |
| OGFolio | 1 | 24 | 344 | 36 px |
| Hover States | 1 | 11 | 368 | — |
| CTA Gallery | 1 | 20 | 352 | 30 px |

### Héros relevés (Mobbin)

Mobbin ouvre sur un titre de 80 px en Saans 652, interlettrage −0,6 px, une phrase de preuve (« Over 600,000 shipped screens, new every week. ») et deux boutons, « Join for free » noir et « See plans → » en texte. La grille n'apparaît qu'après défilement : c'est un produit payant qui vend d'abord.

## Parcours des 136 captures Inspiration

Mesures sur la bande supérieure de chaque capture (fiches 1 à 88, les galeries) :
- 67 en-têtes clairs, 19 sombres, le reste intermédiaire ou illisible (pages d'erreur capturées) ;
- fonds blanc cassé chaud relevés : Cosmos, One Page Love, Detail Design, Best SaaS Web Designs, Crafio, Pinterest.

Motifs vus sur les planches :
- **Champ e-mail dans le héros** : Minimal Gallery, Saaspo, Collect UI, One Page Love, Navbar Design, Curations, loadmo.re, Landingfolio, Details, A1, Interface Craft, Design Engineer Tools.
- **Barre latérale d'axe** : Layers, SEESAW, Recent, CTA Gallery, navbar.gallery, Landingfolio, Design Bookmark, Designeng Tools, Before Click, posts.design.
- **Thème sombre** : Minimal Gallery, Saaspo, OGFolio, Imageory, Dark Mode Design, CTA Gallery, navbar.gallery, Design Bookmark, isthereanytool, A1, desengs.com.
- **Logo ou titre géant comme seul parti pris** : 60fps, Rebrand Gallery, Sections.wtf, wwwtf.site, Navbar Design, Web Designer Depot.
- **Galeries d'un seul composant** : navbar.design, navbar.gallery, footer.design, cta.gallery, Supahero, HeroGrids, OGFolio, Sections.wtf, loader-buttons. Leur vignette prend la forme du composant et leur axe en liste les sous-types.
- **Généralistes à fort branding** (contre-exemples) : Dribbble, Behance, Pinterest, Awwwards, 99designs.

## Structure de Designeer lui-même

Tirée de `llms.txt` et `llms-full.txt` :
- quatre collections avec un compteur chacune (Inspiration 137, Resources 205, Tools 158, Portfolios 170) et des « Finds » (157), des travaux repérés sur X et le web, « gardés avec qui les a faits et d'où ils viennent » ;
- catégories avec compteur : Inspiration = Galleries 103, Reading 33 ; Portfolios = Design 43, Development 30, Design Engineering 57, Creative Development 13, Founders & Makers 17, Studios 4 ;
- 48 éléments par page, « dans l'ordre éditorial du catalogue », puis « Next page » ;
- fiche : titre, accroche du site d'origine, description d'une ligne (4 à 9 mots, médiane 6 sur 192 fiches), tableau Collection / Category / Website / Colours / Added, environ dix fiches liées ;
- palette de cinq couleurs extraite de la capture, par exemple 60fps `#F6F6F6, #161617, #D9D8D8, #373639, #BBBBBC`, Minimal Gallery `#020202, #FBFBFB, #01FD53, #272727, #484848` (le vert fluo est son seul accent) ;
- les enregistrements de prévisualisation sont « capturés sur le site d'origine et montrent sa mise en page, son rythme et son mouvement » ;
- aucun compte pour consulter ; la connexion sert seulement aux favoris, aux dossiers et au suivi des soumissions ;
- soumission gratuite, mise en avant payante (49 $ par semaine) qui passe par la même revue ; « la sponsorisation achète de la visibilité, pas l'approbation éditoriale » ;
- chaque page a une version Markdown (`.md` ou `Accept: text/markdown`) : le catalogue s'adresse aussi aux agents.

## Série A : éléments relevés à l'écran

- 60fps : nom du site en lettres géantes gris clair derrière l'en-tête ; rangée de filtres illustrés (une mini-vignette par motif : Watch, 3D, AI, Blur, Bottom Sheet) ; numéro de pièce en gris en haut à gauche de chaque carte, icône et nom de l'app à droite.
- Curated : pastille « 2,931 hand-picked websites » au-dessus du titre ; champ de recherche avec ⌘K ; bascule deux ou trois colonnes ; filtres avancés réservés aux abonnés ; étiquette « Sponsored » sur la carte.
- Minimal Gallery : thème sombre par défaut, bascule clair au clavier ; inscription à la lettre hebdomadaire sous le titre ; pastilles de type défilantes avec fondu à droite ; carte « Sponsored » dans la grille.
- Layers : pas de titre visible ; étiquettes en rectangles à coins de 6 px ; tri « Trending » à droite ; avatar de l'auteur en bas à gauche de chaque vignette, compteur d'images en haut à droite.
- SEESAW : catégories avec icône dans la barre latérale, « All » surligné en gris ; favicon du site devant le nom dans la légende ; « 57 joined today » à côté du bouton d'abonnement.
- Recent : sommaire latéral en deux groupes (Browse, Resources) ; pastilles de médium ; carte « Sponsor » dans la grille ; encart d'offres d'emploi occupant une colonne ; « Join 31,020 members ».

## Section Inspiration de Designeer (139 fiches, ordre éditorial)

Descriptions citées de `llms.txt` de Designeer pour les fiches qu'il détaille :

- 60fps — Recordings of interfaces that move well.
- Awwwards — Awards celebrating exceptional digital web craft.
- Cosmos — Visual moodboarding and creative inspiration engine.
- Curated Design — Web design sorted by aesthetic style.
- Layers — Platform for sharing design work publicly.
- Minimal Gallery — Showcase of minimal and restrained websites.
- Mobbin — Real mobile and web product flows.
- Saaspo — Curated SaaS landing page designs.
- SEESAW — Design inspiration organized by page section.
- OGFolio — Inspect and preview Open Graph social cards.
- Supahero — Curated collection of website hero sections.
- Imageory — Visual gallery pairing images with prompts.
- Backgrounds Supply — Handcrafted website backgrounds ready to use.

Suite de la section, par identifiant de fiche (`https://designeer.xyz/inspiration/<identifiant>`) :

venust-backgrounds, details, sombra, dribbble, behance, recent-design, navbar-design, footer-design, 
land-book, collect-ui, siteinspire, lapa-ninja, ux-archive, screenlane, flowbase, hover-states, saasframe, 
landingfolio, pttrns, one-page-love, designspiration, best-website-gallery, inspiration-grid, scrnshts, 
are-na, appinspo, dark-mode-design, pinterest, navbar-gallery, posts-design, loadmo-re, inspora-design, 
cta-gallery, desengs-com, isthereanytool, designeng-tools, bestdesignsonx-com, design-bookmark, 
rebrand-gallery, curations, landing-love, motionimo, before-click, swiped, landdding, designengineer-tools, 
insposite, loader-buttons, what-ships, greatstuff, great-apps, curated-domains, sections-wtf, browse-cool, 
folios-gallery, wwwtf-site, early, openalternative, everywhere-tools, jessy-in-s-gallery, wall-of-portfolios, 
detail-design, betwn-studios, saas-landing-page, best-saas-web-designs, a1, uibook, dev-chauhan, godly, 
herogrids, maxibestof, nicelydone, crafio, interface-craft, ui-labs, uiwtf, lab01, ui-playbook, 
refactoring-ui, practical-typography, web-dev, inclusive-components, josh-comeau, design-books, 
learn-kernels, design-system-checklist, learn-ui, design-spells, good-ui, abduzeedo, ux-collective, 
smashing-magazine, codrops, muzli, boxes-and-arrows, web-designer-depot, designmodo, 99designs-discover, 
interfaces, making-software, visual-rambling, degreeless-design, svg-guide, animations-dev, ui-skills, 
ai-for-ui, ui-land, laws-of-ux, user-interface-wiki, the-shape-of-ai, 
mkdir-curated-design-inspiration-directories, deck-gallery, umanmade, vibrant-design, macfolio, 
onepromptdesign, watercolor-art-gallery, dotstore, perfolios, coolest, ui-sections, design-details, gaki, 
fahmi-auliya, bookcrumbs

## Le reste du catalogue

D'après son index, Designeer compte 670 fiches en quatre collections (Inspiration 137, Resources 205, Tools 158, Portfolios 170) et 157 « Finds », des travaux repérés sur X et le web et crédités à leur auteur. Le sitemap du 12 novembre 2026 liste 874 adresses : 208 resources, 175 portfolios, 173 finds, 170 tools, 139 inspiration et 9 pages annexes.
