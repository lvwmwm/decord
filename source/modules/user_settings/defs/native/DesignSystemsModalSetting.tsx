// Module ID: 14824
// Function ID: 14825
// Name: route
// Dependencies: [8084, 676, 10452, 14825, 2]

// Module 14824 (route)
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
    return require(14825) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
