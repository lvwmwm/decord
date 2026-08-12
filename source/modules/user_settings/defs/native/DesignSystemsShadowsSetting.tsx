// Module ID: 14861
// Function ID: 14862
// Name: route
// Dependencies: [8123, 676, 10493, 14859, 2]

// Module 14861 (route)
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
    return require(14859) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;
