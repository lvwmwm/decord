// Module ID: 13724
// Function ID: 103849
// Name: route
// Dependencies: []

// Module 13724 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.xrmhRX);
  },
  parent: require(dependencyMap[0]).MobileSetting.AUTHORIZED_APP,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;
