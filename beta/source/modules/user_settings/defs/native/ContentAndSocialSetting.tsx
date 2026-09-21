// Module ID: 16191
// Function ID: 16192
// Name: ContentAndSocialSetting
// Dependencies: [1074, 11725, 1115, 4455, 16192, 2]

// Module 16191 (ContentAndSocialSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import FriendsIcon from "FriendsIcon" /* 4455 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+o1pDZ"]);
  },
  parent: null,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: Constants.UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return require("ContentAndSocialScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;
