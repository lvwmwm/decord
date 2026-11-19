// Module ID: 16173
// Function ID: 16174
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 7295, 16174, 2]
// Exports: default

// Module 16173 (AuthorizedAppPermissionsScreen)
import Fragment from "Fragment" /* 21 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7295 */;
import UserSettingsAuthedAppPermissionsDefault from "UserSettingsAuthedAppPermissions" /* 16174 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  return jsx(UserSettingsAuthedAppPermissionsDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
