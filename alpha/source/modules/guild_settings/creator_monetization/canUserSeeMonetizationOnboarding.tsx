// Module ID: 7180
// Function ID: 7181
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1390, 7181, 7182, 4798, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 7180 (canUserSeeMonetizationOnboarding)
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4798 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 7181 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 7182 */;
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
