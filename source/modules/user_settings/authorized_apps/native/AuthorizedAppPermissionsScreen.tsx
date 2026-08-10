// Module ID: 14190
// Function ID: 14191
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6878, 14191, 2]
// Exports: default

// Module 14190 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6878) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14191), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
