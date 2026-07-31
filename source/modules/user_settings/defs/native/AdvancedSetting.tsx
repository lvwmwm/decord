// Module ID: 14509
// Function ID: 14510
// Name: route
// Dependencies: [676, 10133, 1236, 9020, 14510, 2]

// Module 14509 (route)
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
    return require(14510).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
