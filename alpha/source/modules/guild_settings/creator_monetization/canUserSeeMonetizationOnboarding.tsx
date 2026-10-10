// Module ID: 6961
// Function ID: 6962
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1390, 6962, 6963, 4742, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 6961 (canUserSeeMonetizationOnboarding)
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4742 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 6962 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 6963 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  let obj2;
  let obj3;
  let obj4;
  const ownerId = guild.ownerId;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const obj = { guild, isOwner: ownerId === id, canManageGuildRoleSubscriptions: obj2.canManageGuildRoleSubscriptions(guild), isUserInCreatorMonetizationEligibleCountry: obj3.isUserInCreatorMonetizationEligibleCountry(), shouldRestrictUpdatingRoleSubscriptionSettings: obj4.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id) };
  const canSeeGuildRoleSubscriptionSettings = GuildRoleSubscriptionSettingUtils.canSeeGuildRoleSubscriptionSettings;
  GuildRoleSubscriptionSettingUtils;
  obj2 = GuildRoleSubscriptionSettingUtils;
  obj3 = CreatorMonetizationEligibilityExperimentUtils;
  obj4 = CreatorMonetizationRestrictionsUtils;
  return canSeeGuildRoleSubscriptionSettings(obj);
};
