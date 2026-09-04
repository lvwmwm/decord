// Module ID: 12867
// Function ID: 12868
// Name: inviteGuildHasPendingMemberDisabledVerification
// Dependencies: [4303, 673, 4305, 5480, 5524, 2]
// Exports: inviteGuildHasPendingMemberDisabledVerification, openVerificationModalOrTransitionToApplication

// Module 12867 (inviteGuildHasPendingMemberDisabledVerification)
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4305 */;
import transitionToMemberVerification from "transitionToMemberVerification" /* 5480 */;
import openMemberVerificationModal from "openMemberVerificationModal" /* 5524 */;
import closure_2 from "handleGatewayJoinRequestUpdate" /* 4303 */;
import { GuildFeatures } from "ME" /* 673 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

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
  request = request.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.STARTED) {
      const result = transitionToMemberVerification.transitionToMemberVerification(id);
      const tmp2Result = transitionToMemberVerification;
    }
  }
  const result1 = openMemberVerificationModal.openMemberVerificationModal(id);
};
