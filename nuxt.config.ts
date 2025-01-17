// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Nuxt Azer",
      meta: [
        { name: "description", content: "Nuxt Azer" },
      ],
      link: [
        { rel: "stylesheet", href: "https:fonts.googleapis.com/icon?family=Material+Icons" },
      ]
    }
  },
})