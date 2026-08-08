// Module ID: 14806
// Function ID: 14807
// Name: route
// Dependencies: [8082, 676, 10446, 14807, 2]

// Module 14806 (route)
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
    return require(14807) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;
