/*
 * @Author: Bryan 
 * @Date: 2020-04-25 19:28:31 
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-04-25 19:58:46
 */

module.exports = {
  title: 'Landz-sensors',
  description: '神策标准文档及组件使用',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },   
      { text: '文档', link: '/documention/' },   
      { 
        text: '通用组件', 
        items: [
          {text: '组件使用', link: '/component/usage'},
          {text: '代码结构', link: '/component/code'}
        ]
      },
      { text: '关于', link: '/about/' }
    ]
  }
}
