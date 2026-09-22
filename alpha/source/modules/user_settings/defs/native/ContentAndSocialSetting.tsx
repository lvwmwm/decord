// Module ID: 16202
// Function ID: 16203
// Name: ContentAndSocialSetting
// Dependencies: [1074, 11729, 1115, 4456, 16203, 2]

// Module 16202 (ContentAndSocialSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import FriendsIcon from "FriendsIcon" /* 4456 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
