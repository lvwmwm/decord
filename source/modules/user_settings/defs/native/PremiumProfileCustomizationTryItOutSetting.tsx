// Module ID: 14354
// Function ID: 108382
// Name: route
// Dependencies: [0, 0, 4294967295, 0, 0, 0]

// Module 14354 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.gMlDNd);
  },
  parent: require("__exportStarResult1").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("__exportStarResult1").UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const result = require("__exportStarResult1").fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;
