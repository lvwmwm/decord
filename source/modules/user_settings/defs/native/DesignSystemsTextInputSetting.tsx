// Module ID: 14814
// Function ID: 14815
// Name: route
// Dependencies: [8084, 676, 10452, 14815, 2]

// Module 14814 (route)
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
    return require(14815) /* Sample */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
