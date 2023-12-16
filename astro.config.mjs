import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://ctseng07.github.io/ConserveEnergy/',
  base: '/ConserveEnergy',
  integrations: [tailwind(), react()]
});