// Module ID: 14496
// Function ID: 110776
// Name: route
// Dependencies: [7697, 653, 10059, 14497, 2]

// Module 14496 (route)
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
    return require(14497) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;
