// Module ID: 13963
// Function ID: 13964
// Name: route
// Dependencies: [676, 10446, 1236, 9670, 13964, 2]

// Module 13963 (route)
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
    return require(13964) /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
