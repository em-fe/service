const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

const base = process.env.GH ? '/service/' : '/';

module.exports = {
  title: 'B 端客服组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'em-fe/service',
    editLinks: true,
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    docsDir: 'emservice',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/service/zh-cn',
    ]
  }
};
