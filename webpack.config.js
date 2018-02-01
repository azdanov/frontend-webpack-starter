/* eslint-disable global-require, import/no-dynamic-require */

const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack/webpack.common");
const { resolveAddons } = require("./webpack/utils");

const config = ({ env, addons }) => {
  const envConfig = require(`./webpack/webpack.${env}.js`);
  const addonConfigs = resolveAddons(addons);

  return webpackMerge(commonConfig, envConfig, ...addonConfigs);
};

module.exports = config;
