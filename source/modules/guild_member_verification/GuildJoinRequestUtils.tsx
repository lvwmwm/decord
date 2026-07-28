// Module ID: 3984
// Function ID: 32736
// Name: isActionedApplicationStatus
// Dependencies: [3985, 2]
// Exports: isActionedAndNotAcked, isApprovedAndAcked, isSubmittedApplicationStatus

// Module 3984 (isActionedApplicationStatus)
function isActionedApplicationStatus(applicationStatus) {
  let tmp = applicationStatus === require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.APPROVED;
  if (!tmp) {
    tmp = applicationStatus === require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.REJECTED;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export { isActionedApplicationStatus };
export const isSubmittedApplicationStatus = function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.SUBMITTED;
};
export const isApprovedAndAcked = function isApprovedAndAcked(applicationStatus) {
  let tmp = applicationStatus.applicationStatus === require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.APPROVED;
  if (tmp) {
    tmp = null != applicationStatus.lastSeen;
  }
  return tmp;
};
export const isActionedAndNotAcked = function isActionedAndNotAcked(request) {
  let tmp = isActionedApplicationStatus(request.applicationStatus);
  if (tmp) {
    tmp = null == request.lastSeen;
  }
  return tmp;
};
