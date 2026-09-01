// Module ID: 7215
// Function ID: 7216
// Name: shouldLogClientHeartbeatSkipped
// Dependencies: [1922, 7216, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7215 (shouldLogClientHeartbeatSkipped)
import sampleWithUserId from "sampleWithUserId" /* 7216 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;

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
