// Module ID: 16502
// Function ID: 16503
// Name: AuthorizedAppPermissionsSetting
// Dependencies: [8365, 1084, 11248, 1125, 16503, 2]

// Module 16502 (AuthorizedAppPermissionsSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xrmhRX);
  },
  parent: MobileUserSettings.AUTHORIZED_APP,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
    getComponent() {
      return require("AuthorizedAppPermissionsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;
