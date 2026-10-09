// Module ID: 16206
// Function ID: 16207
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [7974, 1085, 10629, 1126, 5032, 16188, 2]

// Module 16206 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 5032 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16188 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
