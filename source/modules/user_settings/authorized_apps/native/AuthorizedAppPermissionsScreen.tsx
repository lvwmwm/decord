// Module ID: 14255
// Function ID: 14256
// Name: AuthorizedAppPermissionsScreen
// Dependencies: [19, 21, 6919, 14256, 2]
// Exports: default

// Module 14255 (AuthorizedAppPermissionsScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppPermissionsScreen.tsx");

export default function AuthorizedAppPermissionsScreen() {
  let obj = require(6919) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = { oauth2Token: settingNavigationRoute.params.oauth2Token };
  return jsx(importDefault(14256), { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
