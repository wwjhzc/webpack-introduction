## 安装使用webpack
+ 首先npm init初始一个package.json文件
+ 安装webpack，npm i -D webpack
+ 在package.json文件的scripts中加入  "start": "webpack"

### 构建页面
+ 新建html文件
    - 在文件中写入一个div标签，id为app
    - 导入webpack输出的JavaScript文件 `<script src="./dist/bundle.js"></script>`
+ 新建show.js
    - 操作DOM元素，将content显示到网页上
    - 通过CommonJS规范导出show函数
+ 新建main.js
    - 导入show函数，并执行
+ 新建webpack.config.js文件，对其进行输入输出的配置
    - 定义入口文件为 main.js
    - 输出文件为 dist下的bundle.js
+ 准备完成，npm run start 运行webpack