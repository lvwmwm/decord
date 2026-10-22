// Module ID: 19185
// Function ID: 19186
// Name: GuildRoleSettingsActionCreators
// Dependencies: [19178, 1087, 8981, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 19185 (GuildRoleSettingsActionCreators)
import Constants from "Constants" /* 1087 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8981 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19178 */;
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
