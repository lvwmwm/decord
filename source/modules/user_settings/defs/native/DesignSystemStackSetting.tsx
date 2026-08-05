// Module ID: 14684
// Function ID: 14685
// Name: route
// Dependencies: [7864, 676, 10333, 14685, 2]

// Module 14684 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Stack";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_STACK,
  getComponent() {
    return require(14685) /* StackBlock */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemStackSetting.tsx");

export default route;
