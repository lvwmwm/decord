// Module ID: 18296
// Function ID: 18297
// Name: ConnectedGamesRouteSetting
// Dependencies: [8536, 1072, 11716, 1113, 5872, 18277, 2]

// Module 18296 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FriendsIcon from "FriendsIcon" /* 5872 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 18277 */;
import SettingBuilders from "SettingBuilders" /* 11716 */;
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
