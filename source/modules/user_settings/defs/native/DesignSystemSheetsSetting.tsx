// Module ID: 14886
// Function ID: 14887
// Name: route
// Dependencies: [8127, 676, 10407, 14887, 2]

// Module 14886 (route)
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
    return require(14887) /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
