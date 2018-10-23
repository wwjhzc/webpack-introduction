## 使用webpack的Loader
+ 新建main.css
+ 我们通过require直接在main.js中引入show.js中的方法，并使用
+ 通过require方法在main.js中引入main.css，`require('./main.css')`
+ 打包后，发现样式不可用
+ 使用webpack的Loader（模块转换器）机制
+ 下载样式的loader，npm i style-loader css-loader -D
+ 在webpack.config.js新增一组模块规则，匹配CSS的style-loader、css-loader
+ npm run start执行打包
+ 调试通项目，具体内容后期详解
