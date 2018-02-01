const ExtractTextPlugin = require("extract-text-webpack-plugin");

const prodConfig = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader",
          },
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin("css/[name].[chunkhash].css")],
};

module.exports = prodConfig;
