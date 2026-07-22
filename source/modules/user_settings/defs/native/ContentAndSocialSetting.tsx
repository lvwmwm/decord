// Module ID: 14413
// Function ID: 108717
// Name: route
// Dependencies: []

// Module 14413 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.+o1pDZ);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).FriendsIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;
