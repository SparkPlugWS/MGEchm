import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/MGEchm/",

  lang: "zh-CN",
  title: "魔物娘图鉴",
  description: "魔物娘图鉴1",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
