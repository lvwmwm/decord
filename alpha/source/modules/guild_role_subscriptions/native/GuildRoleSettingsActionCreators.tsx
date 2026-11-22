// Module ID: 20013
// Function ID: 20014
// Name: GuildRoleSettingsActionCreators
// Dependencies: [20005, 1071, 7994, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 20013 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1071 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 7994 */;
import RoleTierEditStore from "RoleTierEditStore" /* 20005 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export function pushTierEditScene(navigation, arg1) {
  RoleTierEditStore.resetImperatively();
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  const obj = GuildSettingsActionCreatorsDefault;
  obj.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
}
export function pushTierTemplateSelectionScene(navigation, arg1) {
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  const obj = GuildSettingsActionCreatorsDefault;
  obj.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
}
