// Module ID: 14486
// Function ID: 110713
// Name: route
// Dependencies: [7697, 653, 10059, 14487, 2]

// Module 14486 (route)
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
    return require(14487) /* _createForOfIteratorHelperLoose */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
