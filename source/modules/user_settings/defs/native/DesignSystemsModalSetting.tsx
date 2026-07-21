// Module ID: 14333
// Function ID: 108210
// Name: route
// Dependencies: []

// Module 14333 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "Modal";
  },
  parent: require(dependencyMap[0]).MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.DESIGN_SYSTEM_MODAL,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
