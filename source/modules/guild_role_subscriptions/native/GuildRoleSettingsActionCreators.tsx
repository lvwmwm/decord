// Module ID: 16480
// Function ID: 128386
// Name: pushTierEditScene
// Dependencies: [16471, 653, 8482, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 16480 (pushTierEditScene)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildSettingsSections } from "ME";

const result = require("module_8482").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  _createForOfIteratorHelperLoose.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  importDefault(8482).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  importDefault(8482).setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
