import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'https://api.coinlore.net/api',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                    secure: false,
                },
            },
        },
    },
})
