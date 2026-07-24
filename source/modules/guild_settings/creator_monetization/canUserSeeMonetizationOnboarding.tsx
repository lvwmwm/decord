// Module ID: 5640
// Function ID: 48241
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1849, 5641, 5642, 3751, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 5640 (canUserSeeMonetizationOnboarding)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getCreatorMonetizationEligibleCountry").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let obj = require(5641) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj = { guild, isOwner: guild.ownerId === id, canManageGuildRoleSubscriptions: require(5641) /* canSeeGuildRoleSubscriptionSettingsContent */.canManageGuildRoleSubscriptions(guild) };
  const obj3 = require(5641) /* canSeeGuildRoleSubscriptionSettingsContent */;
  obj.isUserInCreatorMonetizationEligibleCountry = require(5642) /* getCreatorMonetizationEligibleCountry */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(5642) /* getCreatorMonetizationEligibleCountry */;
  obj.shouldRestrictUpdatingRoleSubscriptionSettings = require(3751) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
