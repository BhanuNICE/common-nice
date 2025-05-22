import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.tsx"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      plugins: [
        typescript({
          tsconfig: "./tsconfig.app.json",
          exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
          declaration: true,
          declarationDir: "dist",
        }),
      ],
    },
    copyPublicDir: false,
  },
});
