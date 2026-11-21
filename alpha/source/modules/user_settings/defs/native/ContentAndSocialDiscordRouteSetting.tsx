// Module ID: 17379
// Function ID: 17380
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8712, 1071, 11937, 1112, 5598, 17361, 2]

// Module 17379 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FriendsIcon from "FriendsIcon" /* 5598 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17361 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/7xJCF"]);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return ContentAndSocialScreen.DiscordPermissionsPage;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;
