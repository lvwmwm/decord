// Module ID: 14864
// Function ID: 14865
// Name: route
// Dependencies: [8127, 676, 10407, 14865, 2]

// Module 14864 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Tabs";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TABS,
  getComponent() {
    return require(14865) /* UserSettingsDesignSystemTabs */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx");

export default route;
