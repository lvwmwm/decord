// Module ID: 14118
// Function ID: 14119
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6818, 14119, 2]
// Exports: default

// Module 14118 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6818) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14119), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
