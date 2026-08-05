// Module ID: 14772
// Function ID: 14773
// Name: route
// Dependencies: [7864, 676, 10333, 1236, 3957, 14756, 2]

// Module 14772 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/7xJCF"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL,
  IconComponent: require("FriendsIcon").FriendsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require(14756) /* ContentAndSocialSettings */.DiscordPermissionsPage;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;
