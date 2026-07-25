// Module ID: 12555
// Function ID: 97243
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1850, 12556, 12557, 3752, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 12555 (canUserSeeMonetizationOnboarding)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getCreatorMonetizationEligibleCountry").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let obj = require(12556) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj = { guild, isOwner: guild.ownerId === id, canManageGuildRoleSubscriptions: require(12556) /* canSeeGuildRoleSubscriptionSettingsContent */.canManageGuildRoleSubscriptions(guild) };
  const obj3 = require(12556) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj.isUserInCreatorMonetizationEligibleCountry = require(12557) /* getCreatorMonetizationEligibleCountry */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(12557) /* getCreatorMonetizationEligibleCountry */;
  obj.shouldRestrictUpdatingRoleSubscriptionSettings = require(3752) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
