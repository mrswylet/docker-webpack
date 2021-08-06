const { merge: webpackMerge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // https://github.com/webpack-contrib/webpack-bundle-analyzer

module.exports = webpackMerge(commonConfig, {
    // Activate mode
    mode: 'development',

    watch: true,

    watchOptions: {
        ignored: /node_modules/
    },

    // Sourcemaps
    devtool: 'source-map',

    plugins: [
        // Analyzer (Анализатор JS кода в графике http://127.0.0.1:8888)
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        })
    ],
});
