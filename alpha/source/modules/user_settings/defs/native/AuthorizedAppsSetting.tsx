// Module ID: 16156
// Function ID: 16157
// Name: AuthorizedAppsSetting
// Dependencies: [8593, 1072, 11875, 1113, 7267, 16157, 2]

// Module 16156 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import KeyIcon from "KeyIcon" /* 7267 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
