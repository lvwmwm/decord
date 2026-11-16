// Module ID: 17471
// Function ID: 17472
// Name: AuthorizedAppsSetting
// Dependencies: [9202, 1072, 12406, 1113, 7784, 17472, 2]

// Module 17471 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import KeyIcon from "KeyIcon" /* 7784 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["f6kk+r"]);
  },
  parent: MobileUserSettings.CONNECTIONS,
  IconComponent: KeyIcon.KeyIcon,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.AUTHORIZED_APPS,
    getComponent() {
      return require("ConnectedAppsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
