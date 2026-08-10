// Module ID: 13965
// Function ID: 13966
// Name: route
// Dependencies: [676, 10447, 1236, 9670, 13966, 2]

// Module 13965 (route)
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
    return require(13966) /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
