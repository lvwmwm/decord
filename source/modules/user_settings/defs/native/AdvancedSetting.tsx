// Module ID: 14362
// Function ID: 109824
// Name: route
// Dependencies: [653, 10095, 1212, 5791, 14363, 2]

// Module 14362 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8/udY0"]);
  },
  parent: null,
  IconComponent: require("SettingsIcon").SettingsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ADVANCED,
  getComponent() {
    return require(14363).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
