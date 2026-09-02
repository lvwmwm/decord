// Module ID: 15694
// Function ID: 15695
// Name: route
// Dependencies: [673, 11288, 1233, 4195, 15695, 2]

// Module 15694 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import FriendsIcon from "FriendsIcon" /* 4195 */;
import createToggle from "createToggle" /* 11288 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+o1pDZ"]);
  },
  parent: null,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require(15695) /* ContentAndSocialSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;
