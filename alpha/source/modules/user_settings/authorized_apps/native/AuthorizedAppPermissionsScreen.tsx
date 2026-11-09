// Module ID: 17179
// Function ID: 17180
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 7226, 17180, 2]
// Exports: default

// Module 17179 (AuthorizedAppPermissionsScreen)
import Fragment from "Fragment" /* 21 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7226 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 17180 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
