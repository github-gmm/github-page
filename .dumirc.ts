import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/github-page/',
  publicPath: '/github-page/',
  themeConfig: {
    name: 'github-page',
    footer: false,
    nav: [
      // { title: '指南', link: '/guide' },
      // { title: '工具', link: '/utils' },
      { title: '组件', link: '/components' },
    ],
  },
});
