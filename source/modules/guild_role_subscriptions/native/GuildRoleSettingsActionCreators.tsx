// Module ID: 17658
// Function ID: 17659
// Name: pushTierEditScene
// Dependencies: [17649, 673, 8993, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 17658 (pushTierEditScene)
import _modDef8993 from "module_8993" /* 8993 */;
import closure_2 from "usePriceTiers" /* 17649 */;
import { GuildSettingsSections } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  closure_2.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  _modDef8993.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  _modDef8993.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
