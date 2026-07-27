// Module ID: 14499
// Function ID: 110789
// Name: route
// Dependencies: [7697, 653, 10059, 14497, 2]

// Module 14499 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Shadows";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SHADOWS,
  getComponent() {
    return require(14497) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;
