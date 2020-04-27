/*
 * @Author: Bryan 
 * @Date: 2020-04-25 19:28:31 
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-04-27 16:03:57
 */

module.exports = {
  port: '7878',
  title: '神策组件',
  description: '神策属性标准及组件使用文档',
  head: [
    ['link', 
        { rel: 'icon', href: '/logo.png' }
    ],  
  ],
  themeConfig: {
    logo: '/sensors.png',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },   
      { text: '文档', link: '/pages/documention/' },   
      { 
        text: '通用组件', 
        items: [
          {text: '组件使用', link: '/pages/component/usage'},
          {text: '代码结构', link: '/pages/component/code'}
        ]
      },
      { text: '关于', link: '/pages/about/' }
    ],
    lastUpdated: 'Last Updated',
    smoothScroll: true
  }
}
