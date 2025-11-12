import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "APP_");

  return {
    base: env.APP_BASE_URL,
    envPrefix: "APP_",
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
