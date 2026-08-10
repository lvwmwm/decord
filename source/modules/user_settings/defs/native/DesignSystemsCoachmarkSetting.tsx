// Module ID: 14808
// Function ID: 14809
// Name: route
// Dependencies: [8082, 676, 10447, 14809, 2]

// Module 14808 (route)
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
    return require(14809) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;
