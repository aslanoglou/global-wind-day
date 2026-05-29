import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    root: 'src',
    base: './',

    server: {
        host: true,
        port: 5173,
        strictPort: true,
        origin: process.env.DDEV_PRIMARY_URL,
        allowedHosts: true,
        hmr: {
            host: process.env.DDEV_HOSTNAME,
            protocol: 'wss',
            clientPort: 5174,
        },
    },

    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                screen1: resolve(__dirname, 'src/screen-1/index.html'),
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]',
            },
        },
    },

    plugins: [tailwindcss()],
})