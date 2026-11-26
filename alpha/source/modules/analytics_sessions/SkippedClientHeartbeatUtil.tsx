// Module ID: 14840
// Function ID: 14841
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1387, 14841, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 14840 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 14841 */;
import UserStore from "UserStore" /* 1387 */;
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
