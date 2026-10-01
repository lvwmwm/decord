// Module ID: 15502
// Function ID: 15503
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [7417, 1074, 11006, 1115, 4529, 15484, 2]

// Module 15502 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import FriendsIcon from "FriendsIcon" /* 4529 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 15484 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
