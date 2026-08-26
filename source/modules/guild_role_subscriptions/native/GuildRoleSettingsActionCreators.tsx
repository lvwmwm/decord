// Module ID: 17169
// Function ID: 17170
// Name: pushTierEditScene
// Dependencies: [17160, 676, 9236, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 17169 (pushTierEditScene)
import _modDef9236 from "module_9236" /* 9236 */;
import closure_2 from "usePriceTiers" /* 17160 */;
import { GuildSettingsSections } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  closure_2.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  _modDef9236.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  _modDef9236.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
