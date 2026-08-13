// Module ID: 4167
// Function ID: 4168
// Name: isActionedApplicationStatus
// Dependencies: [4168, 2]
// Exports: isActionedAndNotAcked, isActionedApplicationStatus, isApprovedAndAcked, isSubmittedApplicationStatus

// Module 4167 (isActionedApplicationStatus)
const result = require("set").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export const isActionedApplicationStatus = function isActionedApplicationStatus(applicationStatus) {
  return applicationStatus === require(4168) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === require(4168) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.REJECTED;
};
export const isSubmittedApplicationStatus = function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === require(4168) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.SUBMITTED;
};
export const isApprovedAndAcked = function isApprovedAndAcked(applicationStatus) {
  let tmp = applicationStatus.applicationStatus === require(4168) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.APPROVED;
  if (tmp) {
    tmp = null != applicationStatus.lastSeen;
  }
  return tmp;
};
export const isActionedAndNotAcked = function isActionedAndNotAcked(request) {
  const applicationStatus = request.applicationStatus;
  let tmp3 = applicationStatus === require(4168) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === require(4168) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.REJECTED;
  if (tmp3) {
    tmp3 = null == request.lastSeen;
  }
  return tmp3;
};
