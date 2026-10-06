// Module ID: 6991
// Function ID: 6992
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1377, 6992, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 6991 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 6992 */;
import UserStore from "UserStore" /* 1377 */;
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
