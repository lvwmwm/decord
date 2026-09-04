// Module ID: 15807
// Function ID: 15808
// Name: route
// Dependencies: [7906, 673, 11400, 1233, 4195, 15791, 2]

// Module 15807 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import FriendsIcon from "FriendsIcon" /* 4195 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import ContentAndSocialSettings from "ContentAndSocialSettings" /* 15791 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/7xJCF"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return ContentAndSocialSettings.DiscordPermissionsPage;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;
