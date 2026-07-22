// Module ID: 13778
// Function ID: 104111
// Name: route
// Dependencies: []

// Module 13778 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.u95Dt4);
  },
  parent: require(dependencyMap[0]).MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.PREMIUM_PLAN_SELECT,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;
