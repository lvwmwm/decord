// Module ID: 14478
// Function ID: 110622
// Name: route
// Dependencies: [7697, 653, 10059, 14479, 2]

// Module 14478 (route)
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
    return require(14479) /* UserSettingsDesignSystemText */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;
