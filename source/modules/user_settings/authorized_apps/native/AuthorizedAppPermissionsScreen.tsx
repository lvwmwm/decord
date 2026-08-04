// Module ID: 14093
// Function ID: 14094
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6787, 14094, 2]
// Exports: default

// Module 14093 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6787) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14094), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
