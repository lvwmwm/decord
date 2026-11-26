// Module ID: 20227
// Function ID: 20228
// Name: GuildRoleSettingsActionCreators
// Dependencies: [20219, 1071, 8573, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 20227 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1071 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8573 */;
import RoleTierEditStore from "RoleTierEditStore" /* 20219 */;
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
