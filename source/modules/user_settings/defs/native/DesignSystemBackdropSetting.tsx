// Module ID: 14810
// Function ID: 14811
// Name: route
// Dependencies: [8082, 676, 10446, 14811, 2]

// Module 14810 (route)
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
    return require(14811) /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
