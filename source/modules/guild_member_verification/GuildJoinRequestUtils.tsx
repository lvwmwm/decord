// Module ID: 3947
// Function ID: 32609
// Name: isActionedApplicationStatus
// Dependencies: []
// Exports: isActionedAndNotAcked, isApprovedAndAcked, isSubmittedApplicationStatus

// Module 3947 (isActionedApplicationStatus)
function isActionedApplicationStatus(applicationStatus) {
  let tmp = applicationStatus === require(dependencyMap[0]).GuildJoinRequestApplicationStatuses.APPROVED;
  if (!tmp) {
    tmp = applicationStatus === require(dependencyMap[0]).GuildJoinRequestApplicationStatuses.REJECTED;
  }
  return tmp;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export { isActionedApplicationStatus };
export const isSubmittedApplicationStatus = function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === require(dependencyMap[0]).GuildJoinRequestApplicationStatuses.SUBMITTED;
};
export const isApprovedAndAcked = function isApprovedAndAcked(applicationStatus) {
  let tmp = applicationStatus.applicationStatus === require(dependencyMap[0]).GuildJoinRequestApplicationStatuses.APPROVED;
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
