import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        404: resolve(__dirname, '404.html'),
        about: resolve(__dirname, 'about.html'),
        enterprise: resolve(__dirname, 'enterprise.html'),
        main: resolve(__dirname, 'index.html'),
        legal: resolve(__dirname, 'legal.html'),
        lmodroid: resolve(__dirname, 'lmodroid.html')
      }
    }
  }
})
