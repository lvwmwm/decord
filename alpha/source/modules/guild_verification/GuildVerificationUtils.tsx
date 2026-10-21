// Module ID: 14092
// Function ID: 14093
// Name: GuildVerificationUtils
// Dependencies: [4993, 1087, 4995, 6813, 6850, 2]
// Exports: inviteGuildHasPendingMemberDisabledVerification, openVerificationModalOrTransitionToApplication

// Module 14092 (GuildVerificationUtils)
import Constants from "Constants" /* 1087 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4995 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6850 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4993 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
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
    const tmp2 = require;
    if (request.applicationStatus !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED) {
      const tmp2Result = tmp2(6813);
      const result = tmp2Result.transitionToMemberVerification(id);
    }
  }
  const obj = MemberVerificationModalActionCreators;
  const result1 = obj.openMemberVerificationModal(id);
};
