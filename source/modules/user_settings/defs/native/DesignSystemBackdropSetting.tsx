// Module ID: 14673
// Function ID: 14674
// Name: route
// Dependencies: [7880, 676, 10272, 14674, 2]

// Module 14673 (route)
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
    return require(14674) /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
