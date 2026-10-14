// Module ID: 6978
// Function ID: 6979
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1377, 6979, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 6978 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 6979 */;
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
