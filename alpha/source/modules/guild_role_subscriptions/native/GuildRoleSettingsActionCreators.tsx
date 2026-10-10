// Module ID: 18502
// Function ID: 18503
// Name: GuildRoleSettingsActionCreators
// Dependencies: [18495, 1085, 8637, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 18502 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1085 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18495 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(navigation, arg1) {
  RoleTierEditStore.resetImperatively();
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  const obj = GuildSettingsActionCreatorsDefault;
  obj.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(navigation, arg1) {
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  const obj = GuildSettingsActionCreatorsDefault;
  obj.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
