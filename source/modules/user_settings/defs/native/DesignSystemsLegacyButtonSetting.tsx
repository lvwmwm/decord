// Module ID: 14654
// Function ID: 14655
// Name: route
// Dependencies: [7864, 676, 10333, 14655, 2]

// Module 14654 (route)
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
    return require(14655) /* ComparisonRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
