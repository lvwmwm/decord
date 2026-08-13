// Module ID: 14875
// Function ID: 14876
// Name: route
// Dependencies: [8127, 676, 10407, 14876, 2]

// Module 14875 (route)
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
    return require(14876) /* DemoContextMenu */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
