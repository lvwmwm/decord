// Module ID: 17562
// Function ID: 17563
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8365, 1084, 11248, 1125, 5702, 17544, 2]

// Module 17562 (ContentAndSocialDiscordRouteSetting)
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
