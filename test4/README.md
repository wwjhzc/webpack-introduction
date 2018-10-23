## 使用DevServer
+ 安装，npm i webpack-dev-server -D
+ 在package.json文件中的script加入运行方式，`"dev": "webpack-dev-server"`
+ npm run dev运行项目,此时，我们打开页面的链接就变为：localhost:8080
+ 打开页面，发现页面有些异常，改变index.html文件的引用
+ 修改文件内容，浏览器自动刷新页面，如果不想自动刷新，则需要加入 --hot
