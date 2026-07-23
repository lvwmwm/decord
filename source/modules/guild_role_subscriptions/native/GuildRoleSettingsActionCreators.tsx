// Module ID: 16433
// Function ID: 128062
// Name: pushTierEditScene
// Dependencies: [16424, 653, 8438, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16433 (pushTierEditScene)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildSettingsSections } from "ME";

const result = require("module_8438").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  _createForOfIteratorHelperLoose.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(8438).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(8438).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
