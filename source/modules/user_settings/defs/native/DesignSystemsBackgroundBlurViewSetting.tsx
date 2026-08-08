// Module ID: 14790
// Function ID: 14791
// Name: route
// Dependencies: [8082, 676, 10446, 14789, 2]

// Module 14790 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Blur";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW,
  getComponent() {
    return require(14789) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;
