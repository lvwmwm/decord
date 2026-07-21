// Module ID: 16300
// Function ID: 125785
// Name: pushTierEditScene
// Dependencies: [0, 0, 0, 0]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16300 (pushTierEditScene)
import __exportStarResult1 from "__exportStarResult1";
import { GuildSettingsSections } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  __exportStarResult1.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(dependencyMap[2]).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(dependencyMap[2]).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
