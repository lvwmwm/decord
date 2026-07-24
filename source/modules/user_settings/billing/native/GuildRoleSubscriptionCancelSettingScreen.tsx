// Module ID: 14164
// Function ID: 108877
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [31, 33, 6653, 14165, 2]
// Exports: default

// Module 14164 (GuildRoleSubscriptionCancelSettingScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14165), {});
};
