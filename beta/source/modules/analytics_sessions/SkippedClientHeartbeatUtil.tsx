// Module ID: 7716
// Function ID: 7717
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1376, 7717, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7716 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7717 */;
import UserStore from "UserStore" /* 1376 */;

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
