## 使用webpack的Plugin
+ 上一个练习我们通过Loader加载CSS文件，现在我们想从bundle.js文件里CSS提取到单独的文件
+ 安装插件，npm i extract-text-webpack-plugin@next -D (版本原因所以要安装最新)
+ 在webpack.config.js中引入plugin，然后使用它
+ 打包时，dist下产生main.css，此时我们在html文件中需要使用外链的css
+ 调试通项目，具体内容后期详解