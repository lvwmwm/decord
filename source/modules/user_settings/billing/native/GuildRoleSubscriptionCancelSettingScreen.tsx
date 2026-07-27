// Module ID: 14176
// Function ID: 109009
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [31, 33, 6273, 14177, 2]
// Exports: default

// Module 14176 (GuildRoleSubscriptionCancelSettingScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = require(6273) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14177), {});
};
