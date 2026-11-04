// Module ID: 14960
// Function ID: 14961
// Name: GuildVerificationUtils
// Dependencies: [5173, 1072, 5175, 7042, 7079, 2]
// Exports: inviteGuildHasPendingMemberDisabledVerification, openVerificationModalOrTransitionToApplication

// Module 14960 (GuildVerificationUtils)
import Constants from "Constants" /* 1072 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5175 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7079 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5173 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

export function inviteGuildHasPendingMemberDisabledVerification(guild) {
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
}
export function openVerificationModalOrTransitionToApplication(id) {
  const request = UserGuildJoinRequestStore.getRequest(id);
  if (null != request) {
    const tmp2 = require;
    if (request.applicationStatus !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED) {
      const tmp2Result = tmp2(7042);
      const result = tmp2Result.transitionToMemberVerification(id);
    }
  }
  const obj = MemberVerificationModalActionCreators;
  const result1 = obj.openMemberVerificationModal(id);
}
