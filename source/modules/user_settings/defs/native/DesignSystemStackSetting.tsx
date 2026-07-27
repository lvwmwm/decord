// Module ID: 14516
// Function ID: 110878
// Name: route
// Dependencies: [7697, 653, 10059, 14517, 2]

// Module 14516 (route)
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
    return require(14517) /* StackBlock */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemStackSetting.tsx");

export default route;
