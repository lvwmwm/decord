// Module ID: 7408
// Function ID: 7409
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1390, 7409, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7408 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7409 */;
import UserStore from "UserStore" /* 1390 */;
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
