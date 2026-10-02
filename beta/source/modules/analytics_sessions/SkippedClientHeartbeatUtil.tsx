// Module ID: 6893
// Function ID: 6894
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1378, 6894, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 6893 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 6894 */;
import UserStore from "UserStore" /* 1378 */;
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
