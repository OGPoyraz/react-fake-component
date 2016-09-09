var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['public']}
        })
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
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};