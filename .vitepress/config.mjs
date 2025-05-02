import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zotero 中文社区博客",
  description: "Zotero 中文社区博客",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],

    socialLinks: [
      { icon: "github", link: "https://github.com/zotero-chinese/blog" },
    ],

    footer: {
      message: "此页面仅供博文撰写预览之用",
    },
  },

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/Home.vue", import.meta.url),
          ),
        },
      ],
    },
  },
});
