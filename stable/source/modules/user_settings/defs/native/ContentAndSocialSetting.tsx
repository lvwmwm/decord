// Module ID: 15959
// Function ID: 15960
// Name: ContentAndSocialSetting
// Dependencies: [1074, 11605, 1114, 4336, 15960, 2]

// Module 15959 (ContentAndSocialSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 4336 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
