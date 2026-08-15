// Module ID: 14932
// Function ID: 14933
// Name: route
// Dependencies: [8198, 676, 10669, 14933, 2]

// Module 14932 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Stack";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_STACK,
  getComponent() {
    return require(14933) /* StackBlock */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemStackSetting.tsx");

export default route;
