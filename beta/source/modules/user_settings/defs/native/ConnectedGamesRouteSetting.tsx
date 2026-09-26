// Module ID: 16214
// Function ID: 16215
// Name: ConnectedGamesRouteSetting
// Dependencies: [8265, 1074, 11754, 1115, 4487, 16195, 2]

// Module 16214 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import FriendsIcon from "FriendsIcon" /* 4487 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16195 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
