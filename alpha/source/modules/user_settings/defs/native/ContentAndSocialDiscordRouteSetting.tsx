// Module ID: 17255
// Function ID: 17256
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8592, 1071, 11817, 1112, 5479, 17237, 2]

// Module 17255 (ContentAndSocialDiscordRouteSetting)
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
