// Module ID: 13993
// Function ID: 13994
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6333, 13994, 2]
// Exports: default

// Module 13993 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6333) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(13994), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
