/* eslint-disable global-require, import/no-dynamic-require */

const resolveAddons = addonArgs => {
  const addons = [].concat.apply([], [addonArgs]).filter(Boolean);

  return addons.map(addonName => require(`./webpack/addons/webpack.${addonName}.js`));
};

module.exports.resolveAddons = resolveAddons;
