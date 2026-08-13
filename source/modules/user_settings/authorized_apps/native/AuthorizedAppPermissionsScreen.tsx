// Module ID: 14264
// Function ID: 14265
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6925, 14265, 2]
// Exports: default

// Module 14264 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6925) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14265), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
