// Module ID: 18207
// Function ID: 18208
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8578, 1072, 11737, 1113, 5852, 18189, 2]

// Module 18207 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FriendsIcon from "FriendsIcon" /* 5852 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 18189 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
