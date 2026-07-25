// Module ID: 14509
// Function ID: 110826
// Name: route
// Dependencies: [7697, 653, 10059, 14510, 2]

// Module 14509 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Text Input";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
  getComponent() {
    return require(14510) /* Sample */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
