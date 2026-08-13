// Module ID: 14867
// Function ID: 14868
// Name: route
// Dependencies: [8127, 676, 10407, 14868, 2]

// Module 14867 (route)
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
    return require(14868) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;
