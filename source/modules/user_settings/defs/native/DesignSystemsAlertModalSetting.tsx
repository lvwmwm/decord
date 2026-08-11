// Module ID: 14800
// Function ID: 14801
// Name: route
// Dependencies: [8084, 676, 10452, 14801, 2]

// Module 14800 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Alert Modal";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_ALERT_MODAL,
  getComponent() {
    return require(14801) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;
