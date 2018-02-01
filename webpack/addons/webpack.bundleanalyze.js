const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const analyzeConfig = {
  plugins: [new BundleAnalyzerPlugin()],
};

module.exports = analyzeConfig;
