// Module ID: 17922
// Function ID: 17923
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8432, 1072, 11540, 1113, 5715, 17904, 2]

// Module 17922 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FriendsIcon from "FriendsIcon" /* 5715 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17904 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
