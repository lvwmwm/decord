// Module ID: 13744
// Function ID: 103967
// Name: route
// Dependencies: []

// Module 13744 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.z2jK6X);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).ClipsIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.CLIPS,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
