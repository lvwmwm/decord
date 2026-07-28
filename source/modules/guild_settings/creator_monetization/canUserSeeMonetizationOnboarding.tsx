// Module ID: 12599
// Function ID: 97418
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1850, 12600, 12601, 3786, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 12599 (canUserSeeMonetizationOnboarding)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getCreatorMonetizationEligibleCountry").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let obj = require(12600) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj = { guild, isOwner: guild.ownerId === id, canManageGuildRoleSubscriptions: require(12600) /* canSeeGuildRoleSubscriptionSettingsContent */.canManageGuildRoleSubscriptions(guild) };
  const obj3 = require(12600) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj.isUserInCreatorMonetizationEligibleCountry = require(12601) /* getCreatorMonetizationEligibleCountry */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(12601) /* getCreatorMonetizationEligibleCountry */;
  obj.shouldRestrictUpdatingRoleSubscriptionSettings = require(3786) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
