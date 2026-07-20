// Module ID: 13726
// Function ID: 103851
// Name: route
// Dependencies: [0, 0, 0, 0, 0]

// Module 13726 (route)
import result from "result";

let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.3fe7U5);
  },
  parent: null,
  IconComponent: require("result").PuzzlePieceIcon,
  screen: obj
};
obj = {
  route: require("result").UserSettingsSections.CONNECTIONS,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = result.createRoute(obj);
const _module1 = require(dependencyMap[5]);
result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
