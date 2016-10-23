'use strict';

const path = require('path');
const webpack = require('webpack');

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
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
