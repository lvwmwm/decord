// Module ID: 14520
// Function ID: 110893
// Name: route
// Dependencies: [7697, 653, 10059, 14521, 2]

// Module 14520 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Modal";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_MODAL,
  getComponent() {
    return require(14521) /* useScreens */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
