import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic' // ✅ force correct JSX runtime
    }),
    nodePolyfills()
  ],
  cacheDir: 'C:/vite_cache' // optional, outside OneDrive
})
