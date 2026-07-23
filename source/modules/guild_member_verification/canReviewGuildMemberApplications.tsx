// Module ID: 5645
// Function ID: 48262
// Name: canReviewGuildMemberApplications
// Dependencies: [1838, 3758, 653, 566, 4620, 2]
// Exports: canReviewGuildMemberApplications, useCanReviewGuildMemberApplications

// Module 5645 (canReviewGuildMemberApplications)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ GuildFeatures: closure_4, Permissions: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_member_verification/canReviewGuildMemberApplications.tsx");

export const canReviewGuildMemberApplications = function canReviewGuildMemberApplications(guildId) {
  guild = guild.getGuild(guildId);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if (hasItem) {
      hasItem = _isNativeReflectConstruct.can(constants2.KICK_MEMBERS, guild);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useCanReviewGuildMemberApplications = function useCanReviewGuildMemberApplications(guildId) {
  const _require = guildId;
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = _isNativeReflectConstruct.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    hasItem = _require(4620).guildHasVerificationGate(stateFromStores);
    const obj2 = _require(4620);
  }
  return hasItem;
};
