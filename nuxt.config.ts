import { resolve } from "path";


export default defineNuxtConfig({
  devtools: { enabled: true },
  build: { transpile: ["@fawmi/vue-google-maps"]},

  modules: [
    ['nuxt-mail', {
      smtp: {
        service: 'gmail',
        auth: {
          user: process.env.NUXT_MAIL_USER,
          pass: process.env.NUXT_MAIL_PASSWORD,
        },
      },
    }],
  ],

  mail: {
    message: {
      to: process.env.NUXT_MAIL_USER,
    },
    smtp: {
      host: "smtp.gmail.com",
      port: 587,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    { src: '~/plugins/scroll-behavior.client.ts', mode: 'client' }
  ],

  alias: {
    "@": resolve(__dirname, "/")
  },

  css: ["~/assets/main.css", '@fortawesome/fontawesome-svg-core/styles.css'],
})
