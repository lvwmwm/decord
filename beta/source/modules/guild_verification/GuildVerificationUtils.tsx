// Module ID: 13257
// Function ID: 13258
// Name: GuildVerificationUtils
// Dependencies: [4610, 1074, 4612, 5774, 5818, 2]
// Exports: inviteGuildHasPendingMemberDisabledVerification, openVerificationModalOrTransitionToApplication

// Module 13257 (GuildVerificationUtils)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4612 */;
import transitionToMemberVerification from "transitionToMemberVerification" /* 5774 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5818 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4610 */;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

export const inviteGuildHasPendingMemberDisabledVerification = function inviteGuildHasPendingMemberDisabledVerification(guild) {
  const features = guild.features;
  let hasItem;
  if (features != null) {
    hasItem = features.includes(GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  if (hasItem) {
    const features2 = guild.features;
    let hasItem1;
    if (features2 != null) {
      hasItem1 = features2.includes(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    hasItem = hasItem1;
  }
  return hasItem;
};
export const openVerificationModalOrTransitionToApplication = function openVerificationModalOrTransitionToApplication(id) {
  const request = UserGuildJoinRequestStore.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED) {
      const result = transitionToMemberVerification.transitionToMemberVerification(id);
      const tmp2Result = transitionToMemberVerification;
    }
  }
  const result1 = MemberVerificationModalActionCreators.openMemberVerificationModal(id);
};
