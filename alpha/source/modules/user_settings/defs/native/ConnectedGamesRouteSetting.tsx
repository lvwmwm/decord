// Module ID: 18580
// Function ID: 18581
// Name: ConnectedGamesRouteSetting
// Dependencies: [9202, 1072, 12406, 1113, 6018, 18561, 2]

// Module 18580 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FriendsIcon from "FriendsIcon" /* 6018 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 18561 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
