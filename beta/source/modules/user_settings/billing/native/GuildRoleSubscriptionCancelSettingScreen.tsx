// Module ID: 15495
// Function ID: 15496
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [19, 21, 7239, 15496, 2]
// Exports: default

// Module 15495 (GuildRoleSubscriptionCancelSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7239 */;
import UserSettingsGuildRoleSubscriptionsCancelDefault from "UserSettingsGuildRoleSubscriptionsCancel" /* 15496 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const obj2 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsGuildRoleSubscriptionsCancelDefault, {});
};
