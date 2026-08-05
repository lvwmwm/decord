// Module ID: 14672
// Function ID: 14673
// Name: route
// Dependencies: [7864, 676, 10333, 14673, 2]

// Module 14672 (route)
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
    return require(14673) /* DemoContextMenu */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
