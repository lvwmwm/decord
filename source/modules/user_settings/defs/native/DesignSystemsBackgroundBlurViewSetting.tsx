// Module ID: 14586
// Function ID: 14587
// Name: route
// Dependencies: [7761, 676, 10133, 14585, 2]

// Module 14586 (route)
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
    return require(14585) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;
