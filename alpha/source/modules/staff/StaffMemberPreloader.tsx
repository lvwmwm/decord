// Module ID: 20058
// Function ID: 20059
// Name: StaffMemberPreloader
// Dependencies: [5013, 1385, 20059, 6960, 2]
// Exports: preloadStaffMembers

// Module 20058 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6960 */;
import StaffMemberConstants from "StaffMemberConstants" /* 20059 */;
import GuildStore from "GuildStore" /* 5013 */;
import UserStore from "UserStore" /* 1385 */;
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
