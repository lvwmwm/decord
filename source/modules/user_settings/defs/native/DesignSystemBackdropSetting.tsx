// Module ID: 14707
// Function ID: 14708
// Name: route
// Dependencies: [7892, 676, 10361, 14708, 2]

// Module 14707 (route)
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
    return require(14708) /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
