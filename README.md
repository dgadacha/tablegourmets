# La Table des Gourmets — site vitrine (démo)

Site vitrine one-page pour **La Table des Gourmets** (Nouméa), construit avec
[Astro](https://astro.build) — statique, ultra-rapide, SEO-friendly, déploiement
1 clic sur Vercel.

> ⚠️ **Démo commerciale.** Contenu et photos sont des placeholders destinés au
> pitch. À remplacer par les éléments fournis/validés par le restaurant avant
> mise en production (voir _Checklist avant prod_).

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:4321
```

Autres commandes : `npm run build` (génère `dist/`) puis `npm run preview`.

## Déployer sur Vercel

**Option A — CLI (le plus rapide)**

```bash
npm i -g vercel
vercel            # première fois : crée le projet
vercel --prod     # déploiement en production
```

Vercel détecte Astro automatiquement (build `astro build`, output `dist/`),
aucune config requise.

**Option B — Git**

1. Pousser le repo sur GitHub/GitLab.
2. Sur vercel.com → _Add New Project_ → importer le repo → _Deploy_.

**Brancher le vrai domaine** (argument de vente clé) : le domaine
`latabledesgourmets.com` est **déjà enregistré** et utilise les emails Google
Workspace (MX `aspmx.l.google.com`) — mais **aucun site n'est servi dessus**
(pas d'enregistrement A). Il suffit donc d'ajouter le domaine dans Vercel
(_Project → Settings → Domains_) et de pointer le DNS, sans toucher aux emails.

## Structure

```
src/
├── layouts/Layout.astro     # <head>, SEO/OpenGraph, JSON-LD Restaurant, scripts
├── components/
│   ├── Nav.astro            # nav fixe + menu mobile
│   ├── Hero.astro           # plein écran + badge "N°1 TripAdvisor"
│   ├── About.astro          # "La Maison" + stats
│   ├── Menu.astro           # signatures de la carte
│   ├── Reviews.astro        # avis TripAdvisor (section sombre)
│   ├── Gallery.astro        # mosaïque photos
│   ├── Contact.astro        # infos, horaires, carte Google, CTA réserver
│   └── Footer.astro
└── pages/index.astro        # assemble la page
```

## Infos restaurant (sourcées TripAdvisor / annuaires NC)

- **Classement** : n°1 sur 217 restaurants à Nouméa, 4,6/5 (570 avis)
- **Cuisine** : française / brasserie gastronomique, chef alsacien, depuis 2009
- **Adresse** : 91 rue Maurice Herzog, face au stade de Magenta, 98800 Nouméa
- **Tél** : +687 24 95 25 · **Email** : direction@latabledesgourmets.com
- **Horaires** : Mar–Sam 11h00–13h30 & 19h00–21h30 · Dim & Lun fermé
- **Réseaux** : [Facebook](https://www.facebook.com/tablegourmets/) ·
  [Instagram](https://www.instagram.com/tabledesgourmets/) ·
  [TripAdvisor](https://www.tripadvisor.fr/Restaurant_Review-g294130-d1510079-Reviews-La_Table_des_Gourmets-Noumea_Grand_Terre.html)

## Checklist avant prod

- [ ] Remplacer les photos Unsplash par les vraies photos (Insta `@tabledesgourmets`) — `Hero.astro`, `About.astro`, `Gallery.astro`
- [ ] Valider la carte / les plats signatures avec le restaurant (`Menu.astro`)
- [ ] Confirmer horaires & services exacts (`Contact.astro`)
- [ ] Vérifier les coordonnées GPS du marqueur carte + JSON-LD (`Layout.astro`)
- [ ] Générer une vraie image Open Graph (`og:image`) aux couleurs de la maison
- [ ] Brancher le domaine `latabledesgourmets.com` sur Vercel
- [ ] (Option) Ajouter un module de réservation en ligne et un analytics

## Crédits placeholders

Photos de démonstration : [Unsplash](https://unsplash.com) (libres de droits).
À retirer au profit des visuels du restaurant.
