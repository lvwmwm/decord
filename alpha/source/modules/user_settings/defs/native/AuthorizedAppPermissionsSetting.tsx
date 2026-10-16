// Module ID: 15910
// Function ID: 15911
// Name: AuthorizedAppPermissionsSetting
// Dependencies: [8213, 1087, 11006, 1128, 15911, 2]

// Module 15910 (AuthorizedAppPermissionsSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
