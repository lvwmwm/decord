// Module ID: 16308
// Function ID: 125846
// Name: pushTierEditScene
// Dependencies: [0, 0, 0, 0]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16308 (pushTierEditScene)
import closure_2 from "result";
import { GuildSettingsSections } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  closure_2.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(dependencyMap[2]).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(dependencyMap[2]).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
