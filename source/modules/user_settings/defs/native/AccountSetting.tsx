// Module ID: 13683
// Function ID: 105092
// Name: route
// Dependencies: [653, 10059, 1212, 6717, 13684, 2]

// Module 13683 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["ldCE/p"]);
  },
  parent: null,
  IconComponent: require("UserCircleIcon").UserCircleIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT,
  getComponent() {
    return require(13684) /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
