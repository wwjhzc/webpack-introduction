const path = require('path')
const ExtraTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './main.js',
    output: {
        // 将所有依赖的模块合并输出到一个bundle.js文件
        filename: 'bundle.js',
        // 将输出文件都放到dist目录下
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                // 用正则表达式去匹配要用该Loader转换的CSS文件
                test: /\.css$/,
                use: ExtraTextPlugin.extract({
                    // 转换.css文件需要使用的Loader
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtraTextPlugin('main.css')
    ]
}
