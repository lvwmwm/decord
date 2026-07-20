// Module ID: 14320
// Function ID: 108159
// Name: route
// Dependencies: []

// Module 14320 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "Coachmark";
  },
  parent: require(dependencyMap[0]).MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.DESIGN_SYSTEM_COACHMARK,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;
