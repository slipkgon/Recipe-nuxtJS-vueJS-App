// https://nuxt.com/docs/api/configuration/nuxt-config

require("dotenv").config();

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    // Private keys are only available on the server
    firebase: process.env.firebase,
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  app: {
    head: {
      title: "Recipe nuxtJS App",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#FFFFFF" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Firebase/Firestore as DB and NuxtJS as frontend",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          hid: "icon",
          rel: "icon",
          type: "image/png",
          href: "/icons/icon_384x384.c0b53c.png",
        },
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          href: "/icons/icon_384x384.c0b53ccpng",
        },
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  experimental: {
    reactivityTransform: false,
  },
  components: true,
  plugins: [],

  build: {
    transpile: ["@headlessui/vue"],
  },
  modules: ["@vueuse/nuxt", "@nuxt/image-edge"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  vite: {},
  nitro: {
    compressPublicAssets: true,
  },
  image: {
    provider: "imgix",
    imgix: {
      baseURL: "/",
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
