// Module ID: 14328
// Function ID: 108200
// Name: route
// Dependencies: []

// Module 14328 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "Tooltip";
  },
  parent: require(dependencyMap[0]).MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.DESIGN_SYSTEM_TOOLTIP,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;
