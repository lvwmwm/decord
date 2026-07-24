// Module ID: 14467
// Function ID: 110495
// Name: route
// Dependencies: [7751, 653, 10127, 14468, 2]

// Module 14467 (route)
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
    return require(14468) /* UserSettingsDesignSystemText */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;
