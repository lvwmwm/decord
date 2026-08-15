// Module ID: 14915
// Function ID: 14916
// Name: route
// Dependencies: [8198, 676, 10669, 14913, 2]

// Module 14915 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Shadows";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SHADOWS,
  getComponent() {
    return require(14913) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;
