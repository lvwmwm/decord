// Module ID: 8175
// Function ID: 8176
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1388, 8176, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 8175 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 8176 */;
import UserStore from "UserStore" /* 1388 */;
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
