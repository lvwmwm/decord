// Module ID: 14720
// Function ID: 14721
// Name: route
// Dependencies: [8005, 676, 10364, 14721, 2]

// Module 14720 (route)
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
    return require(14721) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;
