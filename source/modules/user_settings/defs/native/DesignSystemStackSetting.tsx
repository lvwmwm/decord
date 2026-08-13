// Module ID: 14878
// Function ID: 14879
// Name: route
// Dependencies: [8127, 676, 10407, 14879, 2]

// Module 14878 (route)
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
    return require(14879) /* StackBlock */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemStackSetting.tsx");

export default route;
