const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'inline-source-map',
    target: 'node',
    watch: true,
    mode: 'development',
    resolve: {
        alias: {
        },
        extensions: ['.ts', '.js', '.tsx']
    },
    watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/
    },
    entry: {
        app:  './src/app.ts',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/static/index.html",
            filename: "./src/static/index.html",
            excludeChunks: [ 'app' ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins
                test: /\.html$/,
                use: [{loader: "html-loader"}]
            }
        ]
    }
};


module.exports = [appConfig, highwayConfig];