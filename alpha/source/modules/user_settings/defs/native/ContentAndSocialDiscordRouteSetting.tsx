// Module ID: 17207
// Function ID: 17208
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8318, 1087, 11181, 1128, 5652, 17189, 2]

// Module 17207 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import FriendsIcon from "FriendsIcon" /* 5652 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17189 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
