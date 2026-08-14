// Module ID: 14890
// Function ID: 14891
// Name: route
// Dependencies: [8148, 676, 10421, 14891, 2]

// Module 14890 (route)
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
    return require(14891) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;
