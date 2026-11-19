// Module ID: 4827
// Function ID: 4828
// Name: GuildJoinRequestUtils
// Dependencies: [4828, 2]
// Exports: isActionedAndNotAcked, isActionedApplicationStatus, isApprovedAndAcked, isSubmittedApplicationStatus

// Module 4827 (GuildJoinRequestUtils)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4828 */;
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
