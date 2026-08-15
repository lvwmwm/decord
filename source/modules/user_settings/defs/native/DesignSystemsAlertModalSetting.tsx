// Module ID: 14912
// Function ID: 14913
// Name: route
// Dependencies: [8198, 676, 10669, 14913, 2]

// Module 14912 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Alert Modal";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_ALERT_MODAL,
  getComponent() {
    return require(14913) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;
