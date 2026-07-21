// Module ID: 13719
// Function ID: 103805
// Name: route
// Dependencies: []

// Module 13719 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.f6kk+r);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).KeyIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
