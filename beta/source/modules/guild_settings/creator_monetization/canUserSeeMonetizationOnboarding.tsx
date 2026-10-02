// Module ID: 6678
// Function ID: 6679
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1378, 6679, 6680, 4464, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 6678 (canUserSeeMonetizationOnboarding)
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4464 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 6679 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 6680 */;
import UserStore from "UserStore" /* 1378 */;
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
