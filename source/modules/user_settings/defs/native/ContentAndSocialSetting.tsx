// Module ID: 14891
// Function ID: 14892
// Name: route
// Dependencies: [676, 10452, 1236, 4022, 14892, 2]

// Module 14891 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+o1pDZ"]);
  },
  parent: null,
  IconComponent: require("FriendsIcon").FriendsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require(14892) /* ContentAndSocialSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;
