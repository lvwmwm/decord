// Module ID: 17329
// Function ID: 17330
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8331, 1084, 11212, 1125, 5667, 17311, 2]

// Module 17329 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import FriendsIcon from "FriendsIcon" /* 5667 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17311 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
