// Module ID: 17488
// Function ID: 17489
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 7812, 17489, 2]
// Exports: default

// Module 17488 (AuthorizedAppPermissionsScreen)
import Fragment from "Fragment" /* 21 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7812 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 17489 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
