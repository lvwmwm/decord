// Module ID: 14740
// Function ID: 14741
// Name: route
// Dependencies: [8022, 676, 10380, 14741, 2]

// Module 14740 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Backdrop";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
  getComponent() {
    return require(14741) /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
