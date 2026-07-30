// Module ID: 12615
// Function ID: 12616
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1874, 12616, 12617, 3810, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 12615 (canUserSeeMonetizationOnboarding)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(mergeGuildAvatar) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj = require(12616) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj = { guild: mergeGuildAvatar, isOwner: mergeGuildAvatar.ownerId === id, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj[2] = require(12616) /* computeGuildRoleSubscriptionSettingsVisibility */.canManageGuildRoleSubscriptions(mergeGuildAvatar);
  const obj3 = require(12616) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj[3] = require(12617) /* set */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(12617) /* set */;
  obj[4] = require(3810) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(mergeGuildAvatar.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
