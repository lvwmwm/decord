// Module ID: 14067
// Function ID: 14068
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6772, 14068, 2]
// Exports: default

// Module 14067 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6772) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14068), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
