// Module ID: 14593
// Function ID: 14594
// Name: route
// Dependencies: [7756, 676, 10120, 14594, 2]

// Module 14593 (route)
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
    return require(14594) /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
