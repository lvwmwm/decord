// Module ID: 5698
// Function ID: 49009
// Name: isPremiumGuild
// Dependencies: []
// Exports: getGuildTraits, isDiscoverableGuild

// Module 5698 (isPremiumGuild)
function isPremiumGuild(fromGuildProfileResult) {
  let premiumTier = fromGuildProfileResult;
  if (null == fromGuildProfileResult) {
    return tmp;
  } else {
    if (obj.isGuildRecord(premiumTier)) {
      let tmp5 = premiumTier.premiumSubscriberCount > 0;
      if (!tmp5) {
        premiumTier = premiumTier.premiumTier;
        tmp5 = premiumTier > constants2.NONE;
      }
      let tmp4 = tmp5;
    } else {
      tmp4 = null != premiumTier.premiumSubscriptionCount;
      if (tmp4) {
        tmp4 = premiumTier.premiumSubscriptionCount > 0;
      }
    }
    const obj = require(dependencyMap[1]);
  }
}
const _module = require(dependencyMap[0]);
({ GuildFeatures: closure_2, BoostedGuildTiers: closure_3 } = _module);
const obj = { PUBLIC: "PUBLIC", INVITE_ONLY: "INVITE_ONLY", APPLY_TO_JOIN: "APPLY_TO_JOIN" };
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/guild_badge/GuildTraits.tsx");

export const GuildVisibility = obj;
export const getGuildTraits = function getGuildTraits(fromGuildProfileResult) {
  const set = new Set(fromGuildProfileResult.features);
  let APPLY_TO_JOIN = obj.INVITE_ONLY;
  if (set.has(constants.COMMUNITY)) {
    if (set.has(constants.DISCOVERABLE)) {
      APPLY_TO_JOIN = obj.PUBLIC;
    }
    const tmp7 = isPremiumGuild(fromGuildProfileResult);
    let num = 0;
    if (tmp7) {
      const tmp10 = require(dependencyMap[1]).isGuildRecord(fromGuildProfileResult) ? fromGuildProfileResult.premiumSubscriberCount : fromGuildProfileResult.premiumSubscriptionCount;
      let num3 = 0;
      if (null != tmp10) {
        num3 = tmp10;
      }
      num = num3;
      const obj2 = require(dependencyMap[1]);
    }
    if (obj3.isGuildRecord(fromGuildProfileResult)) {
      let NONE = fromGuildProfileResult.premiumTier;
    } else {
      NONE = constants2.NONE;
    }
    const obj = { verified: set.has(constants.VERIFIED), partnered: set.has(constants.PARTNERED), community: set.has(constants.COMMUNITY), staff: set.has(constants.INTERNAL_EMPLOYEE_ONLY), visibility: APPLY_TO_JOIN, premium: tmp7, premiumSubscriberCount: num, premiumTier: NONE };
    return obj;
  }
  let hasItem = set.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  if (hasItem) {
    hasItem = set.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  if (hasItem) {
    APPLY_TO_JOIN = obj.APPLY_TO_JOIN;
  }
};
export { isPremiumGuild };
export const isDiscoverableGuild = function isDiscoverableGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    const _Set = Set;
    const set = new Set(features.features);
    hasItem = set.has(constants.DISCOVERABLE);
  }
  return hasItem;
};
