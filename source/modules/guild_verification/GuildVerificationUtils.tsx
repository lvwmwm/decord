// Module ID: 12237
// Function ID: 93882
// Name: inviteGuildHasPendingMemberDisabledVerification
// Dependencies: []
// Exports: inviteGuildHasPendingMemberDisabledVerification, openVerificationModalOrTransitionToApplication

// Module 12237 (inviteGuildHasPendingMemberDisabledVerification)
let closure_2 = importDefault(dependencyMap[0]);
({ GuildFeatures: closure_3, Routes: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

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
  const request = request.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== arg1(dependencyMap[2]).GuildJoinRequestApplicationStatuses.STARTED) {
      arg1(dependencyMap[3]).transitionTo(closure_4.GUILD_MEMBER_VERIFICATION(id));
      const obj2 = arg1(dependencyMap[3]);
    }
  }
  const result = arg1(dependencyMap[4]).openMemberVerificationModal(id);
};
