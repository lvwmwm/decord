// Module ID: 16222
// Function ID: 16223
// Name: ConnectedGamesRouteSetting
// Dependencies: [8237, 1074, 11729, 1115, 4456, 16203, 2]

// Module 16222 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import FriendsIcon from "FriendsIcon" /* 4456 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16203 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
