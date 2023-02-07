import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  resolve: {
    extensions: [".ts", ".vue", ".js", ".tsx"],
    alias: {
      "src/": `${path.resolve(__dirname, "src")}/`,
      "test/": `${path.resolve(__dirname, "test")}/`,
      "types/": `${path.resolve(__dirname, "types")}/`,
    },
  },
  plugins: [vue(), jsx()],
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      },
      scss: {
        additionalData: "",
      }
    }
  },
  build: {
    target: "modules",
    polyfillModulePreload: false,
    lib: {
      entry: "src/index",
      name: "model",
      formats: ["es"],
      fileName: "model"
    },
    cssCodeSplit: true,
    sourcemap: true,
    manifest: false,
    rollupOptions: {
      external: [
        /vue/i,
        /ant-design-vue/i
      ],
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
