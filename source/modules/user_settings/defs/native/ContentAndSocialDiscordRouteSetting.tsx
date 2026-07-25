// Module ID: 14605
// Function ID: 111419
// Name: route
// Dependencies: [7697, 653, 10059, 1212, 3833, 14589, 2]

// Module 14605 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/7xJCF"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL,
  IconComponent: require("FriendsIcon").FriendsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require(14589) /* getSocialPermissions */.DiscordPermissionsPage;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;
