// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "nuxt-typed-router",
    "@nuxt/image",
    "nuxt-file-storage",
    "dayjs-nuxt",
    "@pinia/nuxt",
  ],
  fonts: {
    families: [{ name: "montserrat", provider: "google" }],
  },
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @use "@/assets/scss/_vars.scss" as *;
              @use "@/assets/scss/_mixin.scss" as *;
          `,
        },
      },
    },
  },
});
