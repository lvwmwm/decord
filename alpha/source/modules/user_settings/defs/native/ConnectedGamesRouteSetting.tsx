// Module ID: 16091
// Function ID: 16092
// Name: ConnectedGamesRouteSetting
// Dependencies: [7966, 1085, 11262, 1126, 5031, 16072, 2]

// Module 16091 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 5031 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16072 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.YpCiMt);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return ContentAndSocialScreen.ConnectedGamesPage;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;
