// @ts-check
import { defineConfig } from 'astro/config';

// User site. The repository is named Slxed.github.io, so GitHub Pages serves
// https://slxed.github.io at the domain root. Do not set `base`.
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: 'https://slxed.github.io',
});
