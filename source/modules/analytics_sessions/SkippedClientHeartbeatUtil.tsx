// Module ID: 6999
// Function ID: 7000
// Name: shouldLogClientHeartbeatSkipped
// Dependencies: [1922, 7000, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 6999 (shouldLogClientHeartbeatSkipped)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = require(7000) /* sampleWithUserId */.sampleWithUserId(currentUser.id, 0.02);
      const obj2 = require(7000) /* sampleWithUserId */;
    }
    tmp = isStaffResult;
  }
  return tmp;
};
