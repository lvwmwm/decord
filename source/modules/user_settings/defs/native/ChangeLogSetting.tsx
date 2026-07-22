// Module ID: 14260
// Function ID: 107760
// Name: route
// Dependencies: []

// Module 14260 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.LRmNAl);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).CircleInformationIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.CHANGE_LOG,
  getComponent() {
    return require(dependencyMap[4]).ChangeLogScreen;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;
