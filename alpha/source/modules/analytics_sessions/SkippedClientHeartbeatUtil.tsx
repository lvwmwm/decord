// Module ID: 7410
// Function ID: 7411
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1392, 7411, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7410 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7411 */;
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
