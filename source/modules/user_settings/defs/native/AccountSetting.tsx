// Module ID: 14030
// Function ID: 14031
// Name: route
// Dependencies: [676, 10407, 1236, 9719, 14031, 2]

// Module 14030 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["ldCE/p"]);
  },
  parent: null,
  IconComponent: require("UserCircleIcon").UserCircleIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT,
  getComponent() {
    return require(14031) /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
