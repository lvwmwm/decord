// Module ID: 16293
// Function ID: 125754
// Name: pushTierEditScene
// Dependencies: []
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16293 (pushTierEditScene)
let closure_2 = importAll(dependencyMap[0]);
const GuildSettingsSections = arg1(dependencyMap[1]).GuildSettingsSections;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  closure_2.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(dependencyMap[2]).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(dependencyMap[2]).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
