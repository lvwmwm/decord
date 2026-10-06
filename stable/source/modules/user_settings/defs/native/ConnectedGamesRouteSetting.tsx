// Module ID: 15491
// Function ID: 15492
// Name: ConnectedGamesRouteSetting
// Dependencies: [7421, 1086, 10874, 1127, 4532, 15472, 2]

// Module 15491 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import FriendsIcon from "FriendsIcon" /* 4532 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 15472 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
