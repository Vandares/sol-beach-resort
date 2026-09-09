// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Canonical origin. Getting this wrong points search engines at the wrong site,
 * so it is derived rather than hardcoded:
 *
 *   1. SITE_URL            an explicit override, set it in Vercel to force a value
 *   2. Vercel's production domain, which becomes the custom domain automatically
 *      once one is attached to the project
 *   3. localhost           for local builds
 */
/** An env var set to an empty string counts as unset, not as a value. */
const env = (name) => {
  const v = process.env[name];
  return typeof v === 'string' && v.trim() ? v.trim() : undefined;
};

const vercelDomain = env('VERCEL_PROJECT_PRODUCTION_URL');
const site =
  env('SITE_URL') ??
  (vercelDomain ? `https://${vercelDomain}` : 'http://localhost:4321');

export default defineConfig({
  site,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
