const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'prod';

const extractSass = new ExtractTextPlugin({
  filename: './static/css/all.css'
});

const sassLint = new sassLintPlugin({
  glob: './src/scss/**/*.s?(a|c)ss',
  ignorePlugins: ['extract-text-webpack-plugin']
});

const copyFiles = new CopyWebpackPlugin([
  {
    from: './src/images/**/*',
    to: './static/images/',
    flatten: true
  }
]);

const compilerPlugin = new ClosureCompiler({
  options: {
    languageIn: 'ECMASCRIPT6',
    languageOut: 'ECMASCRIPT6',
    compilationLevel: 'WHITESPACE_ONLY',
    warningLevel: 'QUIET',
    jsCode: ['./site/static/js/all.js']
  },
});

const cleanWebpackPlugin = new CleanWebpackPlugin(['site/static']);
const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

let plugins = [sassLint, extractSass];

if (isProduction) {
  plugins.push(compilerPlugin);
  plugins.push(copyFiles);
} else {
  plugins.push(hotModulePlugin);
}

module.exports = {
  entry: ['./src/ts/all.ts', './src/scss/all.scss'],

  output: {
    path: path.resolve(__dirname, './site/'),
    filename: './static/js/all.js'
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
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'static/',
            name: 'images/[name].[ext]',
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
