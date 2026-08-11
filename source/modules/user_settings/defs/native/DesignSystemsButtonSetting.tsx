// Module ID: 14785
// Function ID: 14786
// Name: route
// Dependencies: [8084, 676, 10452, 14786, 2]

// Module 14785 (route)
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
    return require(14786) /* ExampleButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;
