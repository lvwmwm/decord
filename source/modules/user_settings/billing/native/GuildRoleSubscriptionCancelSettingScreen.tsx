// Module ID: 14114
// Function ID: 108554
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [31, 33, 6653, 14115, 2]
// Exports: default

// Module 14114 (GuildRoleSubscriptionCancelSettingScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14115), {});
};
