// Module ID: 14598
// Function ID: 14599
// Name: route
// Dependencies: [7761, 676, 10133, 14599, 2]

// Module 14598 (route)
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
    return require(14599) /* Sample */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
