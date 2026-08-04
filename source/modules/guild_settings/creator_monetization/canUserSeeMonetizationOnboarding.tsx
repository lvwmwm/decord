// Module ID: 5788
// Function ID: 5789
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1874, 5789, 5790, 3906, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 5788 (canUserSeeMonetizationOnboarding)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(mergeGuildAvatar) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj = require(5789) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj = { guild: mergeGuildAvatar, isOwner: mergeGuildAvatar.ownerId === id, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj[2] = require(5789) /* computeGuildRoleSubscriptionSettingsVisibility */.canManageGuildRoleSubscriptions(mergeGuildAvatar);
  const obj3 = require(5789) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj[3] = require(5790) /* set */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(5790) /* set */;
  obj[4] = require(3906) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(mergeGuildAvatar.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
