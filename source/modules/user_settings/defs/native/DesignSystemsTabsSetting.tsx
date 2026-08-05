// Module ID: 14670
// Function ID: 14671
// Name: route
// Dependencies: [7864, 676, 10333, 14671, 2]

// Module 14670 (route)
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
    return require(14671) /* UserSettingsDesignSystemTabs */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx");

export default route;
