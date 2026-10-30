// Module ID: 17872
// Function ID: 17873
// Name: ConnectedGamesRouteSetting
// Dependencies: [8424, 1072, 11505, 1114, 5710, 17853, 2]

// Module 17872 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 5710 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17853 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
