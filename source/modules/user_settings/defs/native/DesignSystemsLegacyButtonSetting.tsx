// Module ID: 14641
// Function ID: 14642
// Name: route
// Dependencies: [7880, 676, 10272, 14642, 2]

// Module 14641 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Legacy Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_LEGACY_BUTTON,
  getComponent() {
    return require(14642) /* ComparisonRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
