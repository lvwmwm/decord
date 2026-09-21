// Module ID: 18200
// Function ID: 18201
// Name: GuildRoleSettingsActionCreators
// Dependencies: [18191, 1078, 9833, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 18200 (GuildRoleSettingsActionCreators)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9833 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18191 */;

const GuildSettingsSections = fn(1078).GuildSettingsSections;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(navigation, arg1) {
  RoleTierEditStore.resetImperatively();
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  GuildSettingsActionCreatorsDefault.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(navigation, arg1) {
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  GuildSettingsActionCreatorsDefault.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
