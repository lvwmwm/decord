// Module ID: 16643
// Function ID: 16644
// Name: ConnectedGamesRouteSetting
// Dependencies: [8000, 1085, 10767, 1126, 4817, 16624, 2]

// Module 16643 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 4817 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16624 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
