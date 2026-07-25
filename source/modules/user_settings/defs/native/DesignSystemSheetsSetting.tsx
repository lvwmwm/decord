// Module ID: 14523
// Function ID: 110943
// Name: route
// Dependencies: [7697, 653, 10059, 14524, 2]

// Module 14523 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Sheets";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return require(14524) /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
