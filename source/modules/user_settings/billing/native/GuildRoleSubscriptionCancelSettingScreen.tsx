// Module ID: 13990
// Function ID: 106326
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: []
// Exports: default

// Module 13990 (GuildRoleSubscriptionCancelSettingScreen)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = arg1(dependencyMap[2]);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(dependencyMap[3]), obj);
};
