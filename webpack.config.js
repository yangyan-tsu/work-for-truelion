var path = require('path');
//一个常见的Webpack配置文件
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var staticRoot = './build/src/build';

var cssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader',  'postcss-loader']
    // use: ["postcss-loader", "css-loader", "less-loader", "stylus-loader", "sass-loader"]
});

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(staticRoot), //打包后的文件存放的地方
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash:8].js',
        publicPath: '/build/src/build/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                // use: 'happypack/loader?id=vue'
                use: [{
                    loader: 'vue-loader',
                    options: {
                        // 交由postcss处理
                        autoprefixer: false,
                        // html: {
                        //     root: srcRoot
                        // },
                        loaders: {
                            css: cssLoader
                        },
                        // 交由postcss处理
                        cssSourceMap: false
                    }
                }]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: 'babel-loader',
            //         options: {
            //             cacheDirectory: './.babel_cache/',
            //             presets: [['es2015', {'modules': false}]]
            //         }
            //     }]
            // },
            {
                test: /\.css$/,
                use: cssLoader
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader", "css-loader", "postcss-loader", "less-loader",
                ]
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader", "css-loader", "postcss-loader", "sass-loader",
                ]
            },
            {
                test: /\.styl/,
                use: [
                    "style-loader", "css-loader", "postcss-loader", "stylus-loader",
                ]
            },
            // {
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "less-loader",
            //     ]
            // },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name].[ext]',
            //                 outputPath: url => '../../' + path.relative('./src', url)
            //             }
            //         },
            //         'extract-loader',
            //         'html-loader?' + JSON.stringify({
            //             ignoreCustomFragments: [/\{\{.*?}}|\{%.*?%}|\{=.*?=}/],
            //             root: path.resolve('./src'),
            //             attrs: ['img:src']
            //         })
            //     ]
            // },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=10000&name=./img/[name]-[hash].[ext]'
            },
            {
                test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'url-loader?limit=10000&name=./font/[name]-[hash].[ext]'
            }
        ]
    },
}