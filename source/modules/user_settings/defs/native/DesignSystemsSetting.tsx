// Module ID: 14301
// Function ID: 108014
// Name: route
// Dependencies: []

// Module 14301 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: require(dependencyMap[2]).PaintPaletteIcon,
  usePredicate: require(dependencyMap[3]).useDesignSystemsSettingPredicate,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.DESIGN_SYSTEM,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
