// Module ID: 14268
// Function ID: 14269
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6946, 14269, 2]
// Exports: default

// Module 14268 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6946) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14269), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
