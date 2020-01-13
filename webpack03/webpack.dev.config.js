var path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        "main": "./src/main.js"
    },
    output: {
        path: path.resolve("./dist"),
        filename: "./build.js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /.(jpg|png|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=500000'        // 当图片的大小 小于500000字节时，生成Base64格式，否则生成文件
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    watch: true
}