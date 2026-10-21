// Module ID: 17097
// Function ID: 17098
// Name: ContentAndSocialSetting
// Dependencies: [1087, 11155, 1128, 5648, 17098, 2]

// Module 17097 (ContentAndSocialSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import FriendsIcon from "FriendsIcon" /* 5648 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
