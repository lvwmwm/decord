// Module ID: 19498
// Function ID: 19499
// Name: StaffMemberPreloader
// Dependencies: [4879, 1389, 19499, 6889, 2]
// Exports: preloadStaffMembers

// Module 19498 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6889 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19499 */;
import GuildStore from "GuildStore" /* 4879 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const PRELOAD_SERVER_ID = StaffMemberConstants.PRELOAD_SERVER_ID;
const result = size.fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export function preloadStaffMembers() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    isStaffResult = null != GuildStore.getGuild(PRELOAD_SERVER_ID);
  }
  if (isStaffResult) {
    const obj2 = GuildActionCreatorsDefault;
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
}
