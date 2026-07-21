// Module ID: 14311
// Function ID: 108103
// Name: route
// Dependencies: []

// Module 14311 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "Blur";
  },
  parent: require(dependencyMap[0]).MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;
