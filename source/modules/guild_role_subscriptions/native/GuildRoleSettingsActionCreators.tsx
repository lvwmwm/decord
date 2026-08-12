// Module ID: 16895
// Function ID: 16896
// Name: pushTierEditScene
// Dependencies: [16886, 676, 9066, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16895 (pushTierEditScene)
import usePriceTiers from "usePriceTiers";
import { GuildSettingsSections } from "ME";

const result = require("module_9066").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  usePriceTiers.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(9066).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(9066).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
