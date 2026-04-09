import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        homedesign: resolve(__dirname, 'projects/Homedesign.html'),
        fitness: resolve(__dirname, 'projects/fitness.html'),
        newdermapro: resolve(__dirname, 'projects/newdermapro.html'),
        symphony: resolve(__dirname, 'projects/symphony.html'),
        gaia: resolve(__dirname, 'projects/Gaia.html'),
      },
    },
  },
})