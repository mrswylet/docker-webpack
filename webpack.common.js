const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

// путь относительно output.path
const pathsToClean = [
    '**/*', // Путь к папке JS (для очистки)
    path.join(process.cwd(), 'public/assets/frontend/css-build/**/*') // Путь к папке CSS (для
];

module.exports = {
    // Скорость обновления в мс
    watchOptions: {
        aggregateTimeout: 50,
    },

    // Точки входа
    entry: {
        index: './src/js/index.js',
        css: './src/css/index.css'
    },

    // Точки выхода
    // IMPORTANT! If you will change `output` targets, `Dockerfile` must be updated too!
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/build/',
        clean: true,
    },

    resolve: {
        alias: {
            jQuery: path.resolve('./node_modules/jquery'),
            jquery: path.resolve('./node_modules/jquery'),
        },
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, 'postcss.config.js'),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },

    plugins: [
        // Плагин для сборки CSS файлов
        new MiniCssExtractPlugin({
            filename: './main.css',
        }),

        new MinifyPlugin(),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),

        // Плагин для очистки сбилденных файлов
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: pathsToClean,
            dry: false,
            dangerouslyAllowCleanPatternsOutsideProject: true,
        }),
    ],
};
