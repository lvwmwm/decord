// Module ID: 14198
// Function ID: 14199
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6880, 14199, 2]
// Exports: default

// Module 14198 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6880) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14199), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
