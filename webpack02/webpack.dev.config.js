module.exports = {
    entry: {
        "main": "./main.js"
    },
    output: {
        filename: "./build.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /.(jpg|png|jpeg|gif)$/,
                loader: 'url-loader?limit=50000'        // 当图片的大小小于50000字节时，生成Base64格式，否则生成文件
            }
        ]
    },
    watch: true
}