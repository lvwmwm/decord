// Module ID: 14665
// Function ID: 14666
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1386, 14666, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 14665 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 14666 */;
import UserStore from "UserStore" /* 1386 */;
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
