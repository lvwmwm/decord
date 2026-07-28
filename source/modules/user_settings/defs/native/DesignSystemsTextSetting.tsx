// Module ID: 14523
// Function ID: 110800
// Name: route
// Dependencies: [7733, 653, 10099, 14524, 2]

// Module 14523 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Text";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TEXT,
  getComponent() {
    return require(14524) /* UserSettingsDesignSystemText */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;
