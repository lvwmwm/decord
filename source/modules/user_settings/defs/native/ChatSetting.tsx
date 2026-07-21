// Module ID: 14163
// Function ID: 107267
// Name: route
// Dependencies: []

// Module 14163 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t./VQax8);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).ImageTextIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.TEXT,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;
