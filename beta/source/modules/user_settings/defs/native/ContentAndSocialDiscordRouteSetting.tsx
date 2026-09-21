// Module ID: 16199
// Function ID: 16200
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8238, 1078, 11594, 1119, 4459, 16181, 2]

// Module 16199 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import FriendsIcon from "FriendsIcon" /* 4459 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16181 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
