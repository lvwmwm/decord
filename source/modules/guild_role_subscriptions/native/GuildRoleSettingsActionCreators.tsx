// Module ID: 16913
// Function ID: 16914
// Name: pushTierEditScene
// Dependencies: [16904, 676, 9084, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16913 (pushTierEditScene)
import usePriceTiers from "usePriceTiers";
import { GuildSettingsSections } from "ME";

const result = require("module_9084").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  usePriceTiers.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(9084).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(9084).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
