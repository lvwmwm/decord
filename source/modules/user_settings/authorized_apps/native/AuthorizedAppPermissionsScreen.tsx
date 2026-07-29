// Module ID: 13974
// Function ID: 13975
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6330, 13975, 2]
// Exports: default

// Module 13974 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6330) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(13975), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
