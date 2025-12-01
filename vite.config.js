import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    server: {
      port: "3000",
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          works: resolve(__dirname, "works.html"),
        },
      },
    },
  };
});
