'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: { path: './public', filename: 'bundle.js' },
  resolve: {
    root: __dirname,
    alias: {
      // Alias absolute path here
    },
    extentions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file' },
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
    }),
  ],
};
