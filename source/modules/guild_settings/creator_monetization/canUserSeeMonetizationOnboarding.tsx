// Module ID: 5635
// Function ID: 48204
// Name: canUserSeeMonetizationOnboarding
// Dependencies: []
// Exports: canUserSeeMonetizationOnboarding

// Module 5635 (canUserSeeMonetizationOnboarding)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  const currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let obj = arg1(dependencyMap[1]);
  obj = { guild, isOwner: guild.ownerId === id, canManageGuildRoleSubscriptions: arg1(dependencyMap[1]).canManageGuildRoleSubscriptions(guild) };
  const obj3 = arg1(dependencyMap[1]);
  obj.isUserInCreatorMonetizationEligibleCountry = arg1(dependencyMap[2]).isUserInCreatorMonetizationEligibleCountry();
  const obj4 = arg1(dependencyMap[2]);
  obj.shouldRestrictUpdatingRoleSubscriptionSettings = arg1(dependencyMap[3]).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
