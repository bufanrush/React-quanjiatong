const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    devtool: 'none',//打包后在srouce里断点调试
    mode: 'production',
    /*入口*/
    entry: {
        app:[
            "@babel/polyfill",
            path.join(__dirname, '../src/index.js'),
        ],
        vendor:['react','react-router-dom','redux','react-dom','react-redux']
    }, 
           

    /*输出到dist目录，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename:'[name].[chunkhash].js',
        publicPath:'/dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader?modules', 'postcss-loader']
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]

        }

        ]
    },
    //webpack-dev-server
    // devServer: {
    //     contentBase: path.join(__dirname, '../dist'),
    //     compress: true, //gzip压缩
    //     host: '0.0.0.0',//允许id访问
    //     hot: true,//热更新
    //     historyApiFallback: true,//解决启动后刷新404
    //     proxy: {//配置服务代表
    //         './api': {
    //             target: 'http://localhost:8000',
    //             pathRewrite: { '^/api': '' },//可转换
    //             changeOrigin: true
    //         }
    //     },
    //     port: 8000 //端口
    // },
    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname,'../src/images')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: "./public",
                    colors: true,//终端输出结果为彩色
                    historyApiFallback: true,//不跳转
                    inline: true,//实时刷新
                }
            }
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin()//每次打包前清空
    ],
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    }
};