// Module ID: 5203
// Function ID: 5204
// Name: GuildJoinRequestUtils
// Dependencies: [5204, 2]
// Exports: isActionedAndNotAcked, isActionedApplicationStatus, isApprovedAndAcked, isSubmittedApplicationStatus

// Module 5203 (GuildJoinRequestUtils)
import MemberVerificationTypes from "MemberVerificationTypes" /* 5204 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export function isActionedApplicationStatus(applicationStatus) {
  const tmp3 = applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
  return tmp3;
}
export function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
}
export function isApprovedAndAcked(applicationStatus) {
  const tmp = applicationStatus.applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED && null != applicationStatus.lastSeen;
  return tmp;
}
export function isActionedAndNotAcked(request) {
  const applicationStatus = request.applicationStatus;
  let tmp3 = applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
  if (tmp3) {
    tmp3 = null == request.lastSeen;
  }
  return tmp3;
}
