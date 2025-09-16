import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()
  ],
  cacheDir: 'C:/vite_cache'  // ✅ put vite cache outside OneDrive
})
