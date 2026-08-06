// Module ID: 14104
// Function ID: 14105
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6799, 14105, 2]
// Exports: default

// Module 14104 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6799) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14105), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
