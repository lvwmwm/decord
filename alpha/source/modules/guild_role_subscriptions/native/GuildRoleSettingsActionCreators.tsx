// Module ID: 19829
// Function ID: 19830
// Name: GuildRoleSettingsActionCreators
// Dependencies: [19822, 1084, 9042, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 19829 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1084 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9042 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19822 */;
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
