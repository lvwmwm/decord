// Module ID: 18188
// Function ID: 18189
// Name: ContentAndSocialSetting
// Dependencies: [1072, 11737, 1113, 5852, 18189, 2]

// Module 18188 (ContentAndSocialSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FriendsIcon from "FriendsIcon" /* 5852 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
