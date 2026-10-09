// Module ID: 4902
// Function ID: 4903
// Name: GuildJoinRequestUtils
// Dependencies: [4903, 2]
// Exports: isActionedAndNotAcked, isActionedApplicationStatus, isApprovedAndAcked, isSubmittedApplicationStatus

// Module 4902 (GuildJoinRequestUtils)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4903 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export const isActionedApplicationStatus = function isActionedApplicationStatus(applicationStatus) {
  const tmp3 = applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
  return tmp3;
};
export const isSubmittedApplicationStatus = function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
};
export const isApprovedAndAcked = function isApprovedAndAcked(applicationStatus) {
  const tmp = applicationStatus.applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED && null != applicationStatus.lastSeen;
  return tmp;
};
export const isActionedAndNotAcked = function isActionedAndNotAcked(request) {
  const applicationStatus = request.applicationStatus;
  let tmp3 = applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
  if (tmp3) {
    tmp3 = null == request.lastSeen;
  }
  return tmp3;
};
