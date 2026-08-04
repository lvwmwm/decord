// Module ID: 14794
// Function ID: 14795
// Name: route
// Dependencies: [7892, 676, 10361, 1236, 3987, 14777, 2]

// Module 14794 (route)
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
    return require(14777) /* ContentAndSocialSettings */.ConnectedGamesPage;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;
