// Module ID: 15506
// Function ID: 15507
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [19, 21, 7241, 15507, 2]
// Exports: default

// Module 15506 (GuildRoleSubscriptionCancelSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7241 */;
import UserSettingsGuildRoleSubscriptionsCancelDefault from "UserSettingsGuildRoleSubscriptionsCancel" /* 15507 */;
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
