// Module ID: 14860
// Function ID: 14861
// Name: route
// Dependencies: [8123, 676, 10493, 14859, 2]

// Module 14860 (route)
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
    return require(14859) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;
