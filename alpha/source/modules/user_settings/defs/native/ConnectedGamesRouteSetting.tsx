// Module ID: 17588
// Function ID: 17589
// Name: ConnectedGamesRouteSetting
// Dependencies: [9555, 1071, 11962, 1112, 5728, 17569, 2]

// Module 17588 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FriendsIcon from "FriendsIcon" /* 5728 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17569 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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
