// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   app: {
    head: {
      titleTemplate: "%s - Nuxt3 | Alan",
      title: "nuxt3-ssr | Alan",
      charset: "utf-8",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        { name: "keywords", content: "vue3,nuxt3,ssr,Alan" },
        { name: "description", content: "基于vue3的nuxt框架SSR模板" },
      ],
    },
  },
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/tailwind.css"],
  buildModules: ['@nuxtjs/tailwindcss'],

});
