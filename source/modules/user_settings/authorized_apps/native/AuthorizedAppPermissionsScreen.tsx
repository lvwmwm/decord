// Module ID: 13897
// Function ID: 106365
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [31, 33, 6653, 13898, 2]
// Exports: default

// Module 13897 (AuthorizedAppPermissionsScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(13898), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
