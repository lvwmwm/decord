// Module ID: 15221
// Function ID: 15222
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 7239, 15222, 2]
// Exports: default

// Module 15221 (AuthorizedAppPermissionsScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7239 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 15222 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
