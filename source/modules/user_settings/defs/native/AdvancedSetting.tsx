// Module ID: 14230
// Function ID: 107573
// Name: route
// Dependencies: []

// Module 14230 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.8/udY0);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).SettingsIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.ADVANCED,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
