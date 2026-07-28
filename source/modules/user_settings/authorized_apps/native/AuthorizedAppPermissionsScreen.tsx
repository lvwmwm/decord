// Module ID: 13953
// Function ID: 106670
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [31, 33, 6309, 13954, 2]
// Exports: default

// Module 13953 (AuthorizedAppPermissionsScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6309) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(13954), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
