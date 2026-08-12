// Module ID: 5918
// Function ID: 5919
// Name: canUserSeeMonetizationOnboarding
// Dependencies: [1922, 5919, 5920, 3982, 2]
// Exports: canUserSeeMonetizationOnboarding

// Module 5918 (canUserSeeMonetizationOnboarding)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(mergeGuildAvatar) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj = require(5919) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj = { guild: mergeGuildAvatar, isOwner: mergeGuildAvatar.ownerId === id, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj[2] = require(5919) /* computeGuildRoleSubscriptionSettingsVisibility */.canManageGuildRoleSubscriptions(mergeGuildAvatar);
  const obj3 = require(5919) /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj[3] = require(5920) /* set */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require(5920) /* set */;
  obj[4] = require(3982) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(mergeGuildAvatar.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
