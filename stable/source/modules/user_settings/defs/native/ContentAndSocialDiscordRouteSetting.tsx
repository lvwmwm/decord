// Module ID: 16301
// Function ID: 16302
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [7988, 1085, 10664, 1126, 4815, 16283, 2]

// Module 16301 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 4815 */;
import SettingsConstants from "SettingsConstants" /* 7988 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16283 */;
import SettingBuilders from "SettingBuilders" /* 10664 */;
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
