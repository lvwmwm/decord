// Module ID: 14841
// Function ID: 14842
// Name: route
// Dependencies: [8123, 676, 10493, 14842, 2]

// Module 14841 (route)
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
    return require(14842) /* UserSettingsDesignSystemText */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;
