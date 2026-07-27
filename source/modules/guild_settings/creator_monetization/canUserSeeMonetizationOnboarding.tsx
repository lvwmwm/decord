// Module ID: 12556
// Function ID: 97248
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1850, 12557, 12558, 3752, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 12556 (canUserSeeMonetizationOnboarding)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getCreatorMonetizationEligibleCountry").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let obj = require(12557) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj = { guild, isOwner: guild.ownerId === id, canManageGuildRoleSubscriptions: require(12557) /* canSeeGuildRoleSubscriptionSettingsContent */.canManageGuildRoleSubscriptions(guild) };
  const obj3 = require(12557) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj.isUserInCreatorMonetizationEligibleCountry = require(12558) /* getCreatorMonetizationEligibleCountry */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(12558) /* getCreatorMonetizationEligibleCountry */;
  obj.shouldRestrictUpdatingRoleSubscriptionSettings = require(3752) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
