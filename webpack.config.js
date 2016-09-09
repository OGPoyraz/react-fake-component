var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        './app/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['dist']}
        }),
        new ExtractTextPlugin("style.css", {allChunks: false})
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react', 'stage-2', 'babili']}
            }, {
                test: /\.scss$/,
                include: path.join(__dirname, 'app'),
                loader: ExtractTextPlugin.extract('style-loader','css-loader?minimize!sass')
            }
        ]
    }
};