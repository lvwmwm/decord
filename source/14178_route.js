// Module ID: 14178
// Function ID: 107335
// Name: route
// Dependencies: []

// Module 14178 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.HcoRu0);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).BellIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
