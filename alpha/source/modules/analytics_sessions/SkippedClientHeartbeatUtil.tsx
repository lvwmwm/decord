// Module ID: 7564
// Function ID: 7565
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1392, 7565, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7564 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7565 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  const currentUser = UserStore.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      const obj2 = sampleWithUserId;
      isStaffResult = obj2.sampleWithUserId(currentUser.id, 0.02);
    }
    tmp = isStaffResult;
  }
  return tmp;
};
