import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const context = resolve(__dirname, 'src');
export const entry = {
  app: ['./index.ts']
};
export const output = {
  filename: '[hash].bundle.js',
  path: resolve(__dirname, 'dist')
};
export const devtool = 'inline-source-map';
export const resolve = {
  extensions: ['.ts', '.tsx', '.js']
};
export const watch = false;
export const devServer = {
  watchContentBase: false,
  compress: false,
  stats: {
    colors: true
  },
  port: 9000
};
export const module = {
  rules: [
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=image/svg+xml'
    },
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    { test: /\.md$/, use: 'raw-loader' }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    { test: /\.(jpg|png|gif)$/, use: 'file-loader' },
    { test: /\.js.map$/, use: 'file-loader' },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
  ]
};
export const plugins = [
  new HtmlWebpackPlugin({
    templateParameters: {
      JUPYTER_BASE_URL: 'http://localhost:9999',
      JUPYTER_TOKEN: 'abc',
      JUPYTER_NOTEBOOK_PATH: 'notebook.ipynb',
      JUPYTER_MATHJAX_URL: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js'
    },
    template: 'index.html',
    inject: true,
  })
];
