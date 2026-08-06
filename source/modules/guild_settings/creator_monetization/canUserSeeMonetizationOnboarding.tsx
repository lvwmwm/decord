// Module ID: 5800
// Function ID: 5801
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1903, 5801, 5802, 3905, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 5800 (canUserSeeMonetizationOnboarding)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(mergeGuildAvatar) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj = require(5801) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj = { guild: mergeGuildAvatar, isOwner: mergeGuildAvatar.ownerId === id, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj[2] = require(5801) /* computeGuildRoleSubscriptionSettingsVisibility */.canManageGuildRoleSubscriptions(mergeGuildAvatar);
  const obj3 = require(5801) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj[3] = require(5802) /* set */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(5802) /* set */;
  obj[4] = require(3905) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(mergeGuildAvatar.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
