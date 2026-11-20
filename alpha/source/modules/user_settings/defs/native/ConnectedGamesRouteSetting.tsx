// Module ID: 17256
// Function ID: 17257
// Name: ConnectedGamesRouteSetting
// Dependencies: [8592, 1071, 11817, 1112, 5479, 17237, 2]

// Module 17256 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FriendsIcon from "FriendsIcon" /* 5479 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17237 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
