// Module ID: 14305
// Function ID: 108071
// Name: route
// Dependencies: []

// Module 14305 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "Experimental Buttons";
  },
  parent: require(dependencyMap[0]).MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
