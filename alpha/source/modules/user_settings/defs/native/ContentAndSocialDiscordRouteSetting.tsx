// Module ID: 17800
// Function ID: 17801
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8387, 1084, 11302, 1125, 5704, 17782, 2]

// Module 17800 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import FriendsIcon from "FriendsIcon" /* 5704 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17782 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
