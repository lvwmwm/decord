// Module ID: 15228
// Function ID: 15229
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 7241, 15229, 2]
// Exports: default

// Module 15228 (AuthorizedAppPermissionsScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7241 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 15229 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
