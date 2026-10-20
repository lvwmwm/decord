// Module ID: 17021
// Function ID: 17022
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8276, 1087, 11099, 1128, 5628, 17003, 2]

// Module 17021 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import FriendsIcon from "FriendsIcon" /* 5628 */;
import SettingsConstants from "SettingsConstants" /* 8276 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17003 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
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
