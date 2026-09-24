// Module ID: 16297
// Function ID: 16298
// Name: ConnectedGamesRouteSetting
// Dependencies: [8323, 1074, 11811, 1115, 4524, 16278, 2]

// Module 16297 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import FriendsIcon from "FriendsIcon" /* 4524 */;
import SettingsConstants from "SettingsConstants" /* 8323 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16278 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
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
