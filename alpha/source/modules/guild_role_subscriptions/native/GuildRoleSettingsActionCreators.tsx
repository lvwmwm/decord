// Module ID: 20069
// Function ID: 20070
// Name: GuildRoleSettingsActionCreators
// Dependencies: [20061, 1072, 7875, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 20069 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1072 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 7875 */;
import RoleTierEditStore from "RoleTierEditStore" /* 20061 */;
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
