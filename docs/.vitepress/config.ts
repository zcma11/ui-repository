const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '布局' }
  ]
}

const config = {
  themeConfig: {
    sidebar // 不能驼峰
  },
  markdown: {
    config(md) {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}

export default config
