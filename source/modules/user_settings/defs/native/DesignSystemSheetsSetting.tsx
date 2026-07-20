// Module ID: 14330
// Function ID: 108242
// Name: route
// Dependencies: [0, 0, 0, 0, 0]

// Module 14330 (route)
import result from "result";
import result from "result";

let obj = {
  useTitle() {
    return "Sheets";
  },
  parent: require("result").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("result").UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = result.createRoute(obj);
result = result.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
