// Module ID: 14891
// Function ID: 14892
// Name: route
// Dependencies: [8127, 676, 10407, 14892, 2]

// Module 14891 (route)
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
    return require(14892) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
