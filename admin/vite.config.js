import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },
  cacheDir: 'C:/vite_cache'  // ✅ optional, fine
})
