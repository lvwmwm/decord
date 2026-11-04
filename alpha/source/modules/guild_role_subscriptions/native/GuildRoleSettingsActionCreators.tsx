// Module ID: 20223
// Function ID: 20224
// Name: GuildRoleSettingsActionCreators
// Dependencies: [20215, 1072, 9219, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 20223 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1072 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9219 */;
import RoleTierEditStore from "RoleTierEditStore" /* 20215 */;
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
