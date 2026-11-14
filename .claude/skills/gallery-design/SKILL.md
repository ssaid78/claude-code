---
name: gallery-design
description: Principes de design pour construire une galerie, un catalogue visuel, un portfolio, une page d'inspiration, un showcase, un annuaire ou toute grille de vignettes (gallery, grid of cards, showcase, moodboard, directory). Tirés d'un parcours complet de designeer.xyz (les 139 fiches Inspiration et leurs captures, plus 15 galeries mesurées dans un navigateur, dont 60fps, Curated, Minimal Gallery, Layers, SEESAW, Recent, One Page Love, posts.design, Sections.wtf, Landingfolio, Land-book, OGFolio, Hover States). À utiliser dès qu'on demande de concevoir, coder ou critiquer une page dont le contenu principal est une grille d'images ou de vidéos, ou la fiche détaillée d'un élément de catalogue, même si le mot « galerie » n'est pas prononcé.
---

# Gallery design

Ce skill sert à concevoir une galerie : une page dont le produit est une grille de travaux visuels, et la fiche de chaque travail. Les règles viennent de designeer.xyz, parcouru en entier le 12 novembre 2026 :

- les 136 captures que Designeer publie pour ses fiches Inspiration, regardées une à une ;
- 15 galeries mesurées dans Chromium à 1440 px et 390 px (styles calculés) ;
- les fichiers `llms.txt`, `llms-full.txt` et `sitemap.xml` de Designeer, pour sa propre structure.

Chiffres bruts, méthode et limites : `references/galeries.md`. Lis-le quand tu as besoin d'une valeur précise ou d'un exemple à citer.

Designeer est un catalogue tenu à la main par Dhruv Jaradi. Les principes ci-dessous sont une synthèse des sites qu'il classe en tête, pas un texte de Designeer.

## L'idée centrale

Dans une bonne galerie, l'interface n'a ni couleur ni personnalité typographique : toute la couleur vient des vignettes. Les autres règles en découlent. Si un choix rend l'interface plus visible que le contenu, c'est le mauvais choix.

Les contre-exemples sont dans le même classement : les plateformes généralistes (Dribbble, Behance, Pinterest) affichent couleur de marque, bandeaux promotionnels et héros marketing. Elles sont listées pour leur volume, pas pour leur mise en page.

## Les douze principes

### 1. Chrome neutre, un accent au plus
Environ trois galeries sur quatre ont un fond clair, une sur cinq un fond sombre. Trois fonds suffisent :
- blanc pur ou gris très clair `#f5f5f5` ;
- blanc cassé chaud `#f7f4f3` à `#f8f7f6` (One Page Love, Land-book, Cosmos, Saaspo) ;
- noir un peu levé, `#0a0a0a` à `#0e0f11` (OGFolio, CTA Gallery, Saaspo), ou noir pur (Minimal Gallery).

Le bouton principal est presque noir avec un texte blanc, ou l'inverse en thème sombre. Une seule couleur saturée est tolérée, et seulement sur un point d'action : le vert de Minimal Gallery et de Saaspo, le rouge du bouton d'abonnement chez One Page Love. Jamais sur les filtres, jamais en dégradé.

### 2. Une sans-serif, une mono pour les métadonnées
Inter domine, puis Geist. Corps courant de 13 à 14 px. Graisses 400 et 500, 600 pour les titres. Le texte secondaire garde le même corps, en gris.

Une seconde famille est admise si elle est monospace et réservée aux métadonnées : compteurs, dates, URL, étiquettes de section. On la voit chez One Page Love (Geist Mono), Navbar Design (Fragment Mono), Sections.wtf (JetBrains Mono), SaaSFrame (IBM Plex Mono) et Landingfolio (Geist Mono). Une serif ou une manuscrite décorative dans l'interface est un écart de marque (voir la fin du skill).

### 3. Deux façons d'ouvrir la page
- **La grille d'abord** : pas de héros, ou un titre de 16 à 24 px. La grille commence sous une ligne de filtres. Exemples : Layers, Recent, SEESAW, Sections.wtf, Land-book (titre de 24,5 px).
- **La promesse d'abord** : un titre de 36 à 54 px, une phrase, un champ e-mail, puis la grille. Exemples : One Page Love (44 px), Curated (46 px), Landingfolio (52 px), posts.design (54 px). Au-delà de 30 px, interlettrage de −3 % à −5,5 % et interligne de 1 à 1,15.

Dans les deux cas, la première vignette commence avant 600 px de haut à 1440 × 900 : 538 px chez Land-book, 550 px chez Landingfolio, 595 px chez One Page Love, 600 px chez posts.design. Le haut de la première rangée doit être visible sans défiler. Hover States (986 px) et SaaSFrame (1 451 px) font exception, et leur grille paraît secondaire.

### 4. La grille est le produit
À 1440 px : trois colonnes pour les captures de sites (Curated, Minimal Gallery, SEESAW, One Page Love, Sections.wtf, OGFolio, Hover States), quatre pour les travaux mixtes, les pages entières ou les publications (Recent, Landingfolio, Land-book, posts.design). À 390 px : une colonne, marge latérale de 12 à 25 px. Seul Landingfolio garde deux colonnes, pour des pages entières en portrait.

La gouttière dépend de la légende :
- légende sous l'image : gouttière de 24 à 44 px (Sections.wtf 24, OGFolio 27, One Page Love 36, Landingfolio 39, Minimal Gallery 40, Hover States 43) ;
- pas de légende, ou légende posée sur l'image : gouttière de 8 à 12 px (posts.design 8, Curated, Layers et Recent 12).

Ne mélange pas les deux : une gouttière serrée avec des légendes dessous rend la grille illisible.

### 5. Le ratio suit le contenu
- Captures de sites : ratio fixe de 16:9 à 1,6:1 (1,78 à 1,80 chez Curated, Minimal Gallery, SEESAW et Sections.wtf ; 1,59 chez One Page Love).
- Pages entières : portrait de 0,67 à 0,75 (Land-book, Landingfolio).
- Écrans d'app et animations : carré 1:1 (60fps).
- Images Open Graph : 1,91:1 (OGFolio, 1,9).
- Travaux mixtes (branding, affiches, publications) : ratio natif en maçonnerie (Layers, Recent).
- Composant isolé : la forme du composant (bandeau de 2,2:1 pour les barres de navigation chez Navbar Design, 2,17:1 pour les appels à l'action chez CTA Gallery).

Un ratio fixe donne une grille calme et comparable ; la maçonnerie respecte l'œuvre. Choisis selon le contenu, pas selon le goût.

### 6. Cartes sans décor
Pas d'ombre sur 13 galeries sur 15. Les deux exceptions (SaaSFrame, Land-book) utilisent une ombre très diffuse, à 4 à 27 % d'opacité. Bordure absente, ou 1 px d'une teinte proche du fond (`#f5f5f5` sur blanc, `#181818` sur noir, `#ded5cf` sur blanc cassé chaud) : elle sert seulement à délimiter les captures claires. Avant chargement, la vignette a un fond gris neutre (`#f1f1f0`).

Rayon de 5 à 10 px dans onze galeries. 16 à 28 px chez OGFolio, 60fps, posts.design et Curated : un grand rayon est un parti pris de marque, à tenir partout. Prends 8 px par défaut.

Hover States et Navbar Design posent la capture dans un faux cadre de navigateur (trois points, barre d'adresse). C'est utile quand le visiteur doit lire la vignette comme un site.

### 7. Une légende d'une ligne, ou rien
Sous l'image : un nom en couleur de texte, puis une seule métadonnée en gris, dans le même corps. Exemples relevés : « Nothin' · Today », « Haptic · Pricing » (site · section, chez Sections.wtf), « Justin Schüler — Personal · Portfolio ». La flèche ↗ vers le site d'origine se place en bout de ligne, à droite.

Sinon rien sous l'image : avatar de l'auteur en bas à gauche, compteur ou flèche en coin, posés sur la vignette (Layers, Recent). Mets l'étiquette de sponsor au même endroit.

### 8. Le mouvement est dans la vignette
La plupart des galeries mettent des vidéos dans la grille : 192 chez Sections.wtf, 33 chez 60fps, 25 chez Hover States, 17 chez Recent, 16 chez Curated. Elles sont muettes, en boucle et sans contrôles. Attribut `preload="none"` ou `"metadata"`. La lecture démarre au survol ou à l'entrée dans l'écran, jamais au chargement de toute la page. Designeer explique ses propres enregistrements ainsi : ils « montrent la mise en page, le rythme et le mouvement » du site.

L'interface, elle, bouge à peine :
- les images apparaissent en fondu d'opacité, en 0,2 à 0,35 s ;
- au survol, transform ou couleur en 0,12 à 0,15 s, avec la courbe `cubic-bezier(0.2, 0, 0, 1)` ;
- les images sont en `loading="lazy"` (90 à 98 % des images chez Landingfolio, OGFolio et posts.design), sauf la première rangée.

### 9. Un seul axe de classement, visible
Chaque galerie se définit par un axe : le motif d'interaction (60fps), le style (Curated), la section de page (SEESAW, Sections.wtf), le type de page (Landingfolio, Land-book), le type de publication (posts.design), le sous-type de composant (CTA Gallery : Button, Download, Form, Newsletter…), le médium (Recent).

- Jusqu'à quinze valeurs : une rangée de pastilles au-dessus de la grille, « All » en premier, la pastille active inversée (fond noir, texte blanc). La rangée défile horizontalement avec un fondu au bord plutôt que de passer à la ligne.
- Au-delà : une barre latérale, avec le nombre d'éléments à côté de chaque valeur (Landingfolio : « SaaS 341 », « Product 209 »).

Pastilles de 28 à 32 px de haut, entièrement arrondies, au corps du texte courant. À droite, un seul contrôle de tri (« Most Recent », « Trending », « Latest first »).

### 10. La curation se dit, se compte et se date
Le visiteur doit savoir qu'une personne a choisi. Trois formules reviennent partout :
- un compteur exact : « 2,931 hand-picked websites », « See what 1,120+ brands actually ship », « 961 sites · 3 added this week », « 29 navbars · 9 styles · 7 types » ;
- une ancienneté : « Hand-picked since 2008 », « Since 2013 » ;
- une fréquence : « updated daily », « new every week », « The Love Letter, every 2 weeks ».

Le formulaire d'abonnement est le seul appel à l'action du héros dans une galerie sur deux environ (Minimal Gallery, Collect UI, One Page Love, Saaspo, Landingfolio, Curations, loadmo.re). Il tient en un champ e-mail et un bouton, avec la fréquence écrite à côté. La preuve sociale reste une ligne grise : « 50 joined today », « Join 31,020 members ».

Le sponsor occupe une case normale de la grille, avec l'étiquette « Sponsor » ou « Sponsored » sur la carte. Jamais de bannière hors grille, jamais de placement non étiqueté. Designeer l'écrit dans son index : l'inclusion est éditoriale, ne s'achète pas, et les placements payés sont étiquetés.

### 11. La fiche d'un élément
Designeer donne le modèle de la page de détail :
- une description d'une ligne, de 4 à 9 mots (6 en médiane sur 192 fiches), qui dit ce que fait la chose, sans adjectif promotionnel. Exemples : « Recordings of interfaces that move well. », « Design inspiration organized by page section. » ;
- un petit tableau de faits : collection, catégorie, site, date d'ajout ;
- la palette de l'élément, extraite de sa capture : cinq couleurs en hexadécimal (« #F6F6F6, #161617, #D9D8D8, #373639, #BBBBBC ») ;
- l'auteur et la source, toujours crédités (« kept with who made them and where they came from ») ;
- environ dix éléments liés, même catégorie d'abord ;
- un enregistrement vidéo du site avant le lien de sortie.

Pas de compte pour consulter. La connexion ne sert qu'à enregistrer des favoris et des dossiers.

### 12. Navigation sobre
Deux schémas seulement :
- une barre haute fixe de 54 à 86 px, sept liens au plus, avec le logo à gauche ou au centre (Minimal Gallery, Curated, One Page Love, posts.design) ;
- une barre latérale gauche d'environ 250 px, qui porte l'axe de classement et laisse la grille monter jusqu'en haut (Layers, Recent, SEESAW, Landingfolio, CTA Gallery). Elle disparaît sur mobile.

Recherche avec raccourci ⌘K affiché (Curated, SEESAW, Landingfolio, SaaSFrame). Boutons de 28 à 40 px de haut. Pied de page d'une ligne (« © 2026 · Sponsor · Info »). Pagination par « Load More » ou par défilement continu, jamais de numéros de page. Une entrée « MCP » ou « for your AI agent » apparaît dans la navigation de plusieurs galeries en 2026 (Mobbin, One Page Love, Landingfolio, posts.design). Si ta galerie a une API, mets-la là, en lien discret.

## Méthode

1. Nomme le contenu : captures de sites, pages entières, écrans d'app, composant isolé, travaux mixtes. Cela fixe le ratio (principe 5).
2. Nomme l'axe de classement en un mot. S'il en faut deux, la galerie n'a pas encore de point de vue.
3. Choisis l'ouverture : la grille d'abord ou la promesse d'abord (principe 3).
4. Choisis la légende, dessous ou posée sur l'image. Cela fixe la gouttière (principe 4).
5. Choisis une barre haute ou une barre latérale selon le nombre de catégories.
6. Pose les jetons ci-dessous, puis construis la grille avant tout le reste.
7. Écris le compteur, la fréquence et la description d'une ligne de chaque fiche.
8. Vérifie à 390 px : une colonne, filtres défilants, navigation repliée.
9. Relis avec la liste de contrôle.

## Jetons de départ

```css
:root {
  --bg: #ffffff;            /* chaud : #f7f4f3 */
  --fg: #1c1c1c;
  --fg-muted: #a3a3a3;
  --thumb-bg: #f1f1f0;
  --hairline: #f5f5f5;      /* chaud : #ded5cf */
  --pill-bg: #f1f1f0;
  --accent: var(--fg);      /* une seule couleur vive au plus, sur l'action principale */
  --font: Inter, Geist, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;   /* compteurs, dates, URL */
  --text: 14px;
  --radius: 8px;
  --gutter: 12px;           /* 24–40px si légende sous l'image */
  --page-pad: 20px;
  --control-h: 32px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #0a0a0a; --fg: #ededed; --fg-muted: #8f8f8f; --thumb-bg: #181818;
          --hairline: #1c1c1c; --pill-bg: #262626; }
}
body { background: var(--bg); color: var(--fg); font: 400 var(--text)/1.4 var(--font); }
h1 { font-weight: 600; letter-spacing: -0.04em; line-height: 1.05; }
.meta, .count { font-family: var(--font-mono); font-size: 12px; color: var(--fg-muted); }
.grid { display: grid; gap: var(--gutter); padding: 0 var(--page-pad);
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr)); }
.thumb { aspect-ratio: 16 / 9; border-radius: var(--radius); background: var(--thumb-bg);
         overflow: hidden; outline: 1px solid var(--hairline); outline-offset: -1px; }
.thumb img, .thumb video { width: 100%; height: 100%; object-fit: cover; display: block;
         opacity: 0; transition: opacity .3s ease; }
.thumb .loaded { opacity: 1; }
.caption { display: flex; gap: 8px; margin-top: 10px; }
.caption .meta { margin-left: auto; }
.pills { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none;
         mask-image: linear-gradient(to right, #000 92%, transparent); }
.pill { height: var(--control-h); padding: 0 12px; border-radius: 999px; background: var(--pill-bg);
        white-space: nowrap; transition: background .12s var(--ease); }
.pill[aria-pressed="true"] { background: var(--fg); color: var(--bg); }
```

Pour la maçonnerie, remplace la grille par `columns: 4 276px; column-gap: 12px`, mets `break-inside: avoid` sur chaque carte et retire `aspect-ratio`.

Vidéo de vignette : `<video muted loop playsinline preload="none" poster="…">`. Lance la lecture avec un `IntersectionObserver` ou au survol, et mets-la en pause quand elle sort de l'écran.

## Liste de contrôle

- Une capture en niveaux de gris de l'interface vide (sans vignettes) ne montre que du noir, du blanc et des gris, avec au plus un bouton en couleur.
- Une famille sans-serif, plus éventuellement une mono pour les métadonnées ; pas plus de trois corps sur la page.
- Le haut de la première rangée de vignettes est visible sans défiler à 1440 × 900.
- Pas d'ombre portée sur les cartes, ou une ombre à peine perceptible.
- La légende tient en une ligne et ne compte pas plus de deux informations.
- Les vidéos sont muettes, en boucle, sans contrôles, et ne se chargent pas toutes d'un coup.
- La pastille active se distingue par inversion, pas par une couleur.
- La page dit combien d'éléments, depuis quand ou à quelle fréquence.
- Tout placement payé est étiqueté sur la carte.
- Chaque fiche a une description d'une ligne et crédite l'auteur et la source.
- À 390 px : une colonne, aucune barre de défilement horizontale sur la page.

## Quand s'écarter des règles

Ces règles décrivent le consensus, pas une obligation. Chaque galerie qui marque les esprits s'autorise un seul écart fort et garde tout le reste neutre :
- Navbar Design : un titre de 120 px en Geist ;
- 60fps : son nom en lettres géantes grises derrière l'en-tête ;
- Cosmos : une police sur mesure et un titre de 72 px ;
- Curated : un rayon de 28 px ;
- Minimal Gallery : le noir pur et un vert fluo ;
- Hover States : une mise en page de magazine, centrée, avec date et URL.

Fais de même : un parti pris, pas trois.
