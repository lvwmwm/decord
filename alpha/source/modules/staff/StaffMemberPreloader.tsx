// Module ID: 19541
// Function ID: 19542
// Name: StaffMemberPreloader
// Dependencies: [4665, 1386, 19542, 6392, 2]
// Exports: preloadStaffMembers

// Module 19541 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6392 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19542 */;
import GuildStore from "GuildStore" /* 4665 */;
import UserStore from "UserStore" /* 1386 */;
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
