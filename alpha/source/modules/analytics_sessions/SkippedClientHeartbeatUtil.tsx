// Module ID: 8606
// Function ID: 8607
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1385, 8607, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 8606 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 8607 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export function shouldLogClientHeartbeatSkipped() {
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
}
