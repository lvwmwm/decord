// Module ID: 14726
// Function ID: 14727
// Name: route
// Dependencies: [8005, 676, 10364, 14727, 2]

// Module 14726 (route)
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
    return require(14727) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
