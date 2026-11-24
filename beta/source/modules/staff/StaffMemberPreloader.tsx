// Module ID: 19665
// Function ID: 19666
// Name: StaffMemberPreloader
// Dependencies: [4784, 1386, 19666, 6511, 2]
// Exports: preloadStaffMembers

// Module 19665 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6511 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19666 */;
import GuildStore from "GuildStore" /* 4784 */;
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
