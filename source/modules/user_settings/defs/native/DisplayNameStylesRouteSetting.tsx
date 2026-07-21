// Module ID: 14096
// Function ID: 107012
// Name: route
// Dependencies: []

// Module 14096 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).ZPMAlX);
  },
  screen: obj,
  usePredicate() {
    return true;
  }
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.DISPLAY_NAME_STYLES,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
