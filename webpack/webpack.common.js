const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { outputPath } = require("./paths");
const { rootPath } = require("./paths");

const commonConfig = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /* To add multiple pages
    https://github.com/jantimon/html-webpack-plugin/issues/218#issuecomment-183066602
    */
    new HtmlWebpackPlugin({
      inject: "body",
      chunks: ["index"],
      template: "src/index.html",
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(["dist"], { root: rootPath }),
  ],
};

module.exports = commonConfig;
