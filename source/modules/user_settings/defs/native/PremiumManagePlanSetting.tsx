// Module ID: 13764
// Function ID: 104042
// Name: route
// Dependencies: []

// Module 13764 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.8jmdON);
  },
  parent: require(dependencyMap[0]).MobileSetting.PREMIUM,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
