// Module ID: 14724
// Function ID: 14725
// Name: route
// Dependencies: [8005, 676, 10364, 14725, 2]

// Module 14724 (route)
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
    return require(14725) /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
