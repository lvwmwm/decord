// Module ID: 7773
// Function ID: 7774
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1385, 7774, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7773 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7774 */;
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
