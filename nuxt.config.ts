// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/storybook', '@nuxt/image', '@pinia/nuxt', '@nuxt/icon', '@nuxtjs/i18n'],

    app: {
        baseURL: '/my-base/',
    },

    i18n: {
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },

    icon: {
        provider: 'server',
        customCollections: [
            {
                prefix: 'my',
                dir: './assets/icons',
            },
        ],
        clientBundle: {
            includeCustomCollections: true,
        },
    },

    imports: {
        dirs: ['./stores'],
    },

    runtimeConfig: {
        // For testing runtimeConfig in useMyComposable
        app: {
            name: 'Nuxt',
            version: '1.0.0',
            host: 'localhost',
            port: 3000,
        },
    },

    vue: {
        runtimeCompiler: true,
    },

    compatibilityDate: '2024-08-03',

    vite: {
        optimizeDeps: {
            include: ['jsdoc-type-pratt-parser'],
        },
    },
})