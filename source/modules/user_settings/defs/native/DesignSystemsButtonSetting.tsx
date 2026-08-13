// Module ID: 14852
// Function ID: 14853
// Name: route
// Dependencies: [8127, 676, 10407, 14853, 2]

// Module 14852 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BUTTON,
  getComponent() {
    return require(14853) /* ExampleButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;
