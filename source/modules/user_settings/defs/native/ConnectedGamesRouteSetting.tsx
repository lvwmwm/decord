// Module ID: 14693
// Function ID: 14694
// Name: route
// Dependencies: [7761, 676, 10133, 1236, 3895, 14676, 2]

// Module 14693 (route)
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
    return require(14676) /* ContentAndSocialSettings */.ConnectedGamesPage;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;
