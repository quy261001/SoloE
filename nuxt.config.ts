// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
      app: {
        head: {
          title: 'Nuxt Dojo',
          meta: [
            {name: 'description', content: 'Everything about Nuxt 3'}
          ],
          link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            {href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap', rel: 'stylesheet' },
            {href:"https://fonts.googleapis.com/css2?family=Pacifico&display=swap", rel:"stylesheet"},
            {href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"},
            {href:"https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@700;900&display=swap", rel:"stylesheet"}
          ]
        }
      }
})
