// Module ID: 5061
// Function ID: 5062
// Name: shouldLogClientHeartbeatSkipped
// Dependencies: [1922, 5062, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 5061 (shouldLogClientHeartbeatSkipped)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = require(5062) /* sampleWithUserId */.sampleWithUserId(currentUser.id, 0.02);
      const obj2 = require(5062) /* sampleWithUserId */;
    }
    tmp = isStaffResult;
  }
  return tmp;
};
