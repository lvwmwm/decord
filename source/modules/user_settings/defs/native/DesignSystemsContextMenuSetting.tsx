// Module ID: 14573
// Function ID: 14574
// Name: route
// Dependencies: [7756, 676, 10120, 14574, 2]

// Module 14573 (route)
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
    return require(14574) /* DemoContextMenu */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
