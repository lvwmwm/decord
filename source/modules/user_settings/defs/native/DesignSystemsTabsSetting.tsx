// Module ID: 14794
// Function ID: 14795
// Name: route
// Dependencies: [8082, 676, 10446, 14795, 2]

// Module 14794 (route)
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
    return require(14795) /* UserSettingsDesignSystemTabs */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx");

export default route;
