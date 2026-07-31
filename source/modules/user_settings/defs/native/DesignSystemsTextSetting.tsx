// Module ID: 14567
// Function ID: 14568
// Name: route
// Dependencies: [7761, 676, 10133, 14568, 2]

// Module 14567 (route)
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
    return require(14568) /* UserSettingsDesignSystemText */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;
