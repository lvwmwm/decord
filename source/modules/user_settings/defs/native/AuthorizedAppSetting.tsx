// Module ID: 13712
// Function ID: 103774
// Name: route
// Dependencies: []

// Module 13712 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "";
  },
  parent: require(dependencyMap[0]).MobileSetting.AUTHORIZED_APPS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.AUTHORIZED_APP,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
