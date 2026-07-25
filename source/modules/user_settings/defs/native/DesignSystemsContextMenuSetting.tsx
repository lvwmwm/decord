// Module ID: 14503
// Function ID: 110807
// Name: route
// Dependencies: [7697, 653, 10059, 14504, 2]

// Module 14503 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Context Menu";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_CONTEXT_MENU,
  getComponent() {
    return require(14504) /* contextMenuItems */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
