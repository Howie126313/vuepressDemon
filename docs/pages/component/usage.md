# 使用指南
## 目录
```
── README.md
├── build // 打包配置文件
│   ├── base.js
│   ├── dev.js
│   ├── pro.js
│   └── publish.js // npm 发布脚本
├── dist
│   ├── index.js // 打包后的 web 文件
│   └── weChat.js // 打包后的小程序文件
├── jsconfig.json
├── package-lock.json
├── package.json
└── src
    ├── decorators // 装饰器
    │   ├── base.js // 基本类型装饰器
    │   ├── decoratorsUntils.js // 装饰器工具函数
    │   ├── index.js // 统一导出
    │   └── validators.js // 判断类型装饰器
    ├── entries // 各端入口文件
    │   ├── index.js
    │   └── index_weChat.js
    ├── index.js
    ├── models
    │   ├── base // 基础类
    │   │   ├── Base.js
    │   │   ├── Common.js
    │   │   ├── Consultant.js
    │   │   ├── House.js
    │   │   ├── Output.js
    │   │   ├── Resblock.js
    │   │   └── User.js
    │   ├── features // 功能类
    │   │   ├── AppPromotion.js
    │   │   ├── Chat.js
    │   │   ├── RecommendedTopics.js
    │   │   ├── Report.js
    │   │   └── Share.js
    │   └── output // 输出类
    │       ├── SensorAndroid.js
    │       ├── SensorH5.js
    │       ├── SensorIos.js
    │       ├── SensorMiniProgram.js
    │       └── SensorWebsite.js
    └── utils
        ├── SensorsMiniInit.js // 小程序初始化方法及神策相关配置
        ├── sensorsInit.js // web 初始化方法及神策相关配置
        └── untils.js // 工具函数
```

## 开发
### 本地调试
安装依赖` npm install`

打包` npm run dev`

运行` node dist/index.js`

### 装饰器类别

`@accessor` 属性访问器

`@required` 必填属性

`@validateString` 判断属性值是否为字符串

`@validateNumber` 判断属性值是否为数字

`@validateArray` 判断属性值是否为数组

`@regex` 按照传入正则对实例化属性值进行判断，并打印相关传入错误提醒

::: warning
属性名称一律使用下划线命名法。
:::

::: danger
在类种声明属性时，每个属性值以‘_’开头，另外需要给每个属性设置访问器，在没有访问器的情况下属性不会在实例中生成。每个装饰器都用访问器功能，所以在已有装饰器的情况下，不需要另外添加`@accessor`装饰器。
:::

### 项目联调
打包` npm run build`

生成 link：`npm run link`

项目中执行：`npm run link landz-sensors-fullstack`

### 项目发布
`npm run publishToNpm` 按照提示输入版本号即可

## 使用
### 引入
#### web

```
import Sensors from 'landz-sensors-fullstack';
let { SensorsInit, SensorWebsite } = Sensors;
```
#### 小程序
```
import LandzSensors from 'landz-sensors-fullstack';
let { SensorsMiniInit, SensorMiniProgram } = LandzSensors;
```

### 初始化
``
SensorsInit
``web 项目神策初始化方法；
``
SensorsMiniInit
``小程序神策初始化方法；

### 获取属性对象
通过调用实例的``getObject``方法来获取对应的属性对象。

由于历史原因部分字段(``houseDelId``, ``shareRootId``, ``themeId``, ``themeName``)使用驼峰命名法，该方法对这些字段进行了兼容处理，后期后台修改后会去掉兼容处理。

e.g:
```
let collectObj = {
  channel_name: this.channel_name,
  source_from: this.source || '',
  source_param: this.source_param || '',
  site_name: this.site_name,
  url: this.url,
  init_ca: cookie.get('wap_init_ca') || '', // 初始渠道
  page_name: getPageName(pageConfig, route) // 页面名称
}
let objForSend = new SensorWebsite(collectObj).getObject()
```

