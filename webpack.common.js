const HtmlWebPackPlugin = module.require('html-webpack-plugin');
const { CleanWebpackPlugin } = module.require('clean-webpack-plugin');
const webpack = module.require('webpack');
const path = module.require('path');

module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(`${__dirname}/build`),
    publicPath: '/',
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        exclude: /\/favicon.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg/,
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'Caching',
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
