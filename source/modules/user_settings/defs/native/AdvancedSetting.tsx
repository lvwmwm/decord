// Module ID: 14610
// Function ID: 14611
// Name: route
// Dependencies: [676, 10361, 1236, 5920, 14611, 2]

// Module 14610 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8/udY0"]);
  },
  parent: null,
  IconComponent: require("SettingsIcon").SettingsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ADVANCED,
  getComponent() {
    return require(14611).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
