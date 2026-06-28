import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://gauravagarwalgarg.github.io",
  base: "/tech-interview-os",
  integrations: [
    mdx(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    },
  },
});
