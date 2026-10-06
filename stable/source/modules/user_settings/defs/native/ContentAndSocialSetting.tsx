// Module ID: 15471
// Function ID: 15472
// Name: ContentAndSocialSetting
// Dependencies: [1086, 10874, 1127, 4532, 15472, 2]

// Module 15471 (ContentAndSocialSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import FriendsIcon from "FriendsIcon" /* 4532 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["+o1pDZ"]);
  },
  parent: null,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return require("ContentAndSocialScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;
