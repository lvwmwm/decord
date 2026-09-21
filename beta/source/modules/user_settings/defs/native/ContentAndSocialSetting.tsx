// Module ID: 16180
// Function ID: 16181
// Name: ContentAndSocialSetting
// Dependencies: [1078, 11594, 1119, 4459, 16181, 2]

// Module 16180 (ContentAndSocialSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import FriendsIcon from "FriendsIcon" /* 4459 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
