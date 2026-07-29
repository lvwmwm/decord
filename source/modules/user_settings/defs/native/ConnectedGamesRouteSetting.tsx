// Module ID: 14676
// Function ID: 14677
// Name: route
// Dependencies: [7756, 676, 10120, 1236, 3891, 14659, 2]

// Module 14676 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.YpCiMt);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL,
  IconComponent: require("FriendsIcon").FriendsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require(14659) /* ContentAndSocialSettings */.ConnectedGamesPage;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;
