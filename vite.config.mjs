import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

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
            // Removed input: 'index.html', as Vite should auto-detect index.html in the root
            output: {
                entryFileNames: 'assets/main.js',
                chunkFileNames: 'assets/main.js',
                assetFileNames: 'assets/main[extname]',
            },
        },
    },

    plugins: [tailwindcss()],
})