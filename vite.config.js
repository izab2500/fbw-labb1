import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                bilder: resolve(__dirname, 'bilder.html'),
                arbetsprocess: resolve(__dirname, 'arbetsprocess.html'),
            },
        },
    },
    plugins:[
        ViteImageOptimizer({
            avif:{
                quality: 50
            },
            webp:{
                quality: 75
            },
            jpg:{
                quality: 75
            }
      }),
    ]
})