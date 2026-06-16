import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Standalone SPA build for Vercel/static hosting.
// Run: vite build --config vite.spa.config.ts -> outputs to dist-spa/
export default defineConfig({
  root: path.resolve(__dirname, "spa"),
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "dist-spa"),
    emptyOutDir: true,
  },
});