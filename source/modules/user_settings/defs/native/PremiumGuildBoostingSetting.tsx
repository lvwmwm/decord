// Module ID: 13771
// Function ID: 104061
// Name: route
// Dependencies: []

// Module 13771 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.+CbP2v);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).BoostGemIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.GUILD_BOOSTING,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
