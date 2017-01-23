const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './script/app.jsx',
    output: {
        path: path.resolve(__dirname, 'script/dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};