// Module ID: 14679
// Function ID: 14680
// Name: route
// Dependencies: [7880, 676, 10272, 14680, 2]

// Module 14679 (route)
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
    return require(14680) /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
