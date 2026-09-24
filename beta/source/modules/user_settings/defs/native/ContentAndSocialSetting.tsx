// Module ID: 16190
// Function ID: 16191
// Name: ContentAndSocialSetting
// Dependencies: [1078, 11630, 1119, 4491, 16191, 2]

// Module 16190 (ContentAndSocialSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import FriendsIcon from "FriendsIcon" /* 4491 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
