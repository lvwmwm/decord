// Module ID: 15448
// Function ID: 15449
// Name: route
// Dependencies: [7852, 676, 11031, 1236, 4165, 15431, 2]

// Module 15448 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import FriendsIcon from "FriendsIcon" /* 4165 */;
import MobileUserSettings from "MobileUserSettings" /* 7852 */;
import ContentAndSocialSettings from "ContentAndSocialSettings" /* 15431 */;
import createToggle from "createToggle" /* 11031 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.YpCiMt);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return ContentAndSocialSettings.ConnectedGamesPage;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;
