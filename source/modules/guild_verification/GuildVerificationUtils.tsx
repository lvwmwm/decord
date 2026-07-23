// Module ID: 12356
// Function ID: 96061
// Name: inviteGuildHasPendingMemberDisabledVerification
// Dependencies: [3948, 653, 3950, 1198, 9145, 2]
// Exports: inviteGuildHasPendingMemberDisabledVerification, openVerificationModalOrTransitionToApplication

// Module 12356 (inviteGuildHasPendingMemberDisabledVerification)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_3;
let closure_4;
const require = arg1;
({ GuildFeatures: closure_3, Routes: closure_4 } = ME);
let result = require("isTermsFormField").fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

export const inviteGuildHasPendingMemberDisabledVerification = function inviteGuildHasPendingMemberDisabledVerification(guild) {
  const features = guild.features;
  let hasItem;
  if (null != features) {
    hasItem = features.includes(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  if (hasItem) {
    const features2 = guild.features;
    let hasItem1;
    if (null != features2) {
      hasItem1 = features2.includes(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    hasItem = hasItem1;
  }
  return hasItem;
};
export const openVerificationModalOrTransitionToApplication = function openVerificationModalOrTransitionToApplication(id) {
  request = request.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.STARTED) {
      require(1198) /* shouldNavigate */.transitionTo(closure_4.GUILD_MEMBER_VERIFICATION(id));
      const obj2 = require(1198) /* shouldNavigate */;
    }
  }
  const result = require(9145) /* openMemberVerificationModal */.openMemberVerificationModal(id);
};
