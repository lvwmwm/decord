// Module ID: 16209
// Function ID: 16210
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8270, 1078, 11630, 1119, 4491, 16191, 2]

// Module 16209 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import FriendsIcon from "FriendsIcon" /* 4491 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16191 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/7xJCF"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: Constants.UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return ContentAndSocialScreen.DiscordPermissionsPage;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;
