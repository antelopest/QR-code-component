import { defineConfig } from 'vite';

export default defineConfig({
  base: '/QR-code-component/',
  server: {
    port: 3000,
    host: true
  },
  css: {
    postcss: './postcss.config.js'
  }
});
