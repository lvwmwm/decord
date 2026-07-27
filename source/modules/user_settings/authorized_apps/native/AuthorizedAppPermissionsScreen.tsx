// Module ID: 13909
// Function ID: 106497
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [31, 33, 6273, 13910, 2]
// Exports: default

// Module 13909 (AuthorizedAppPermissionsScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6273) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(13910), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
