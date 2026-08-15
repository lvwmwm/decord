// Module ID: 14300
// Function ID: 14301
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 7385, 14301, 2]
// Exports: default

// Module 14300 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(7385) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14301), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
