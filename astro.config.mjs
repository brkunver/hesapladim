import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://kolaycahesapla.com.tr",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== "https://stargazers.club/404",
    }),
  ],
})
