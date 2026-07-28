// Module ID: 14220
// Function ID: 109182
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [31, 33, 6309, 14221, 2]
// Exports: default

// Module 14220 (GuildRoleSubscriptionCancelSettingScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = require(6309) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14221), {});
};
