// Module ID: 7403
// Function ID: 7404
// Name: shouldLogClientHeartbeatSkipped
// Dependencies: [1921, 7404, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7403 (shouldLogClientHeartbeatSkipped)
import sampleWithUserId from "sampleWithUserId" /* 7404 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = sampleWithUserId.sampleWithUserId(currentUser.id, 0.02);
      const obj2 = sampleWithUserId;
    }
    tmp = isStaffResult;
  }
  return tmp;
};
