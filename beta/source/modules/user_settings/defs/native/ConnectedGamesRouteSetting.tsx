// Module ID: 16210
// Function ID: 16211
// Name: ConnectedGamesRouteSetting
// Dependencies: [8270, 1078, 11630, 1119, 4491, 16191, 2]

// Module 16210 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import FriendsIcon from "FriendsIcon" /* 4491 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16191 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
