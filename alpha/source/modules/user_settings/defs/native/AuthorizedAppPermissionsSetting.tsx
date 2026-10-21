// Module ID: 16114
// Function ID: 16115
// Name: AuthorizedAppPermissionsSetting
// Dependencies: [8308, 1087, 11155, 1128, 16115, 2]

// Module 16114 (AuthorizedAppPermissionsSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
