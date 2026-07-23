// Module ID: 13846
// Function ID: 106041
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [31, 33, 6653, 13847, 2]
// Exports: default

// Module 13846 (AuthorizedAppPermissionsScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(13847), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
