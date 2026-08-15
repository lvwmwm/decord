// Module ID: 14837
// Function ID: 14838
// Name: route
// Dependencies: [676, 10669, 1236, 7355, 14838, 2]

// Module 14837 (route)
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
    return require(14838).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
