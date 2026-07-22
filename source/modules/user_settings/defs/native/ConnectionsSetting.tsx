// Module ID: 13742
// Function ID: 103929
// Name: route
// Dependencies: [0, 0, 0, 0, 0]

// Module 13742 (route)
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.3fe7U5);
  },
  parent: null,
  IconComponent: require("__exportStarResult1").PuzzlePieceIcon,
  screen: obj
};
obj = {
  route: require("__exportStarResult1").UserSettingsSections.CONNECTIONS,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = require("__exportStarResult1").createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
