// Module ID: 13507
// Function ID: 102485
// Name: route
// Dependencies: []

// Module 13507 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.ldCE/p);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).UserCircleIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.ACCOUNT,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
