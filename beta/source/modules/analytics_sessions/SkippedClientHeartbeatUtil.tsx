// Module ID: 7743
// Function ID: 7744
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1372, 7744, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7743 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7744 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  const currentUser = UserStore.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = sampleWithUserId.sampleWithUserId(currentUser.id, 0.02);
    }
    tmp = isStaffResult;
  }
  return tmp;
};
