// Module ID: 14862
// Function ID: 14863
// Name: route
// Dependencies: [8148, 676, 10421, 14863, 2]

// Module 14862 (route)
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
    return require(14863) /* ComparisonRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
