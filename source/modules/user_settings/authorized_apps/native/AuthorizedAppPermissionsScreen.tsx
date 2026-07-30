// Module ID: 13969
// Function ID: 13970
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6327, 13970, 2]
// Exports: default

// Module 13969 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6327) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(13970), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
