// Module ID: 16578
// Function ID: 16579
// Name: pushTierEditScene
// Dependencies: [16569, 676, 8304, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16578 (pushTierEditScene)
import usePriceTiers from "usePriceTiers";
import { GuildSettingsSections } from "ME";

const result = require("module_8304").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  usePriceTiers.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(8304).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(8304).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
