// Module ID: 14060
// Function ID: 14061
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6775, 14061, 2]
// Exports: default

// Module 14060 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6775) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14061), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
