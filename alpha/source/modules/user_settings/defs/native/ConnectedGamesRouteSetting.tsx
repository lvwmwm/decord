// Module ID: 17563
// Function ID: 17564
// Name: ConnectedGamesRouteSetting
// Dependencies: [8365, 1084, 11248, 1125, 5702, 17544, 2]

// Module 17563 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import FriendsIcon from "FriendsIcon" /* 5702 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17544 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
