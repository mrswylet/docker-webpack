const { merge: webpackMerge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = webpackMerge(commonConfig, {
    // Activate mode
    mode: 'production',

    devtool : false,

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
});
