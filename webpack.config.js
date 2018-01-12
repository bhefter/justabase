const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'prod';

const extractSass = new ExtractTextPlugin({
  filename: './dist/css/all.css'
});

const compilerPlugin = new ClosureCompiler({
  options: {
    languageIn: 'ECMASCRIPT6',
    languageOut: 'ECMASCRIPT6',
    compilationLevel: 'WHITESPACE_ONLY',
    warningLevel: 'QUIET',
    jsCode: ['./site/dist/js/all.js']
  },
});

const cleanWebpackPlugin = new CleanWebpackPlugin(['site/dist']);
const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

let plugins = [extractSass];

if (isProduction) {
  plugins.push(compilerPlugin);
} else {
  plugins.push(hotModulePlugin);
}

module.exports = {
  entry: ['./src/ts/all.ts', './src/scss/all.scss'],

  output: {
    path: path.resolve(__dirname, './site/'),
    filename: './dist/js/all.js'
  },

  devServer: {
    contentBase: 'site',
    compress: true,
    port: 9001,
    hotOnly: true
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
       use: ['ts-loader', 'tslint-loader'],
       exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'dist/images/',
            name: '[name].[ext]',
            useRelativePath: true
          }
        }]
      }]
  },

  resolve: {
   extensions: ['.tsx', '.ts', '.js']
  },

  plugins: plugins
};
