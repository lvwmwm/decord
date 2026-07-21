// Module ID: 13435
// Function ID: 102034
// Name: route
// Dependencies: []

// Module 13435 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.LYju5J);
  },
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;
