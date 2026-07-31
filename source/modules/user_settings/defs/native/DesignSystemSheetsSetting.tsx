// Module ID: 14612
// Function ID: 14613
// Name: route
// Dependencies: [7761, 676, 10133, 14613, 2]

// Module 14612 (route)
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
    return require(14613) /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
