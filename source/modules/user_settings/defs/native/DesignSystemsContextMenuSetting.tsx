// Module ID: 14328
// Function ID: 108204
// Name: route
// Dependencies: [57, 31, 27, 33, 4126]

// Module 14328 (route)
import get ActivityIndicator from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {
  useTitle() {
    return "Context Menu";
  },
  parent: require("_slicedToArray").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("module_31").UserSettingsSections.DESIGN_SYSTEM_CONTEXT_MENU,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = get_ActivityIndicator.createRoute(obj);
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
