// Module ID: 19295
// Function ID: 19296
// Name: GuildRoleSettingsActionCreators
// Dependencies: [19288, 1087, 9005, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 19295 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1087 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9005 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19288 */;
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
