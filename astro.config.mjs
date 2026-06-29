// @ts-check
import { defineConfig } from 'astro/config';

// Site statique — Vercel détecte Astro automatiquement, aucun adaptateur requis.
export default defineConfig({
  site: 'https://latabledesgourmets.com',
  devToolbar: { enabled: false },
});
