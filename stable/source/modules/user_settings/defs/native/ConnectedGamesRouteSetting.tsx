// Module ID: 15977
// Function ID: 15978
// Name: ConnectedGamesRouteSetting
// Dependencies: [8079, 1074, 11605, 1114, 4336, 15960, 2]

// Module 15977 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 4336 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 15960 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.YpCiMt);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: Constants.UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return ContentAndSocialScreen.ConnectedGamesPage;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;
