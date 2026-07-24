// Module ID: 14486
// Function ID: 110654
// Name: route
// Dependencies: [7751, 653, 10127, 14485, 2]

// Module 14486 (route)
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
    return require(14485) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;
