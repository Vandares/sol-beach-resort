// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Canonical origin. Getting this wrong points search engines at the wrong site,
 * so it is derived rather than hardcoded:
 *
 *   1. SITE_URL        explicit value. Required on Cloudflare, which does not
 *                      expose the production domain to the build.
 *   2. Vercel          its production domain, which follows a custom domain
 *   3. Cloudflare      the per-deployment URL, as a last resort (see warning)
 *   4. localhost       local builds
 */
/** An env var set to an empty string counts as unset, not as a value. */
const env = (name) => {
  const v = process.env[name];
  return typeof v === 'string' && v.trim() ? v.trim().replace(/\/$/, '') : undefined;
};

const onCloudflare = Boolean(env('CF_PAGES') || env('WORKERS_CI'));
const vercelDomain = env('VERCEL_PROJECT_PRODUCTION_URL');

const site =
  env('SITE_URL') ??
  (vercelDomain ? `https://${vercelDomain}` : undefined) ??
  env('CF_PAGES_URL') ??
  'http://localhost:4321';

if (onCloudflare && !env('SITE_URL')) {
  console.warn(
    `\n[sol] SITE_URL is not set, so canonical and hreflang tags will use ${site}.\n` +
      `      Set SITE_URL in the Cloudflare project's build variables to the live address.\n`,
  );
}

export default defineConfig({
  site,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
