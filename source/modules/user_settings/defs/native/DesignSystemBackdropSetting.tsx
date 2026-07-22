// Module ID: 14342
// Function ID: 108276
// Name: route
// Dependencies: []

// Module 14342 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "Backdrop";
  },
  parent: require(dependencyMap[0]).MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
