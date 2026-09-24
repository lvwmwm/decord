// Module ID: 18211
// Function ID: 18212
// Name: GuildRoleSettingsActionCreators
// Dependencies: [18202, 1078, 9865, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 18211 (GuildRoleSettingsActionCreators)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9865 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18202 */;

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
