// Module ID: 14792
// Function ID: 14793
// Name: route
// Dependencies: [676, 10407, 1236, 6054, 14793, 2]

// Module 14792 (route)
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
    return require(14793).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
