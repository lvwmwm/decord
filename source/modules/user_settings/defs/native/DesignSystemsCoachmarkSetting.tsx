// Module ID: 14885
// Function ID: 14886
// Name: route
// Dependencies: [8127, 676, 10407, 14886, 2]

// Module 14885 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Coachmark";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_COACHMARK,
  getComponent() {
    return require(14886) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;
