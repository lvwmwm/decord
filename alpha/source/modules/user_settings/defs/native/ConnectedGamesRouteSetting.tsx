// Module ID: 17595
// Function ID: 17596
// Name: ConnectedGamesRouteSetting
// Dependencies: [9556, 1071, 11970, 1112, 5728, 17576, 2]

// Module 17595 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FriendsIcon from "FriendsIcon" /* 5728 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17576 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
