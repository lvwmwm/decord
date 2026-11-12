// Module ID: 20248
// Function ID: 20249
// Name: StaffMemberPreloader
// Dependencies: [5114, 1385, 20249, 6854, 2]
// Exports: preloadStaffMembers

// Module 20248 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import StaffMemberConstants from "StaffMemberConstants" /* 20249 */;
import GuildStore from "GuildStore" /* 5114 */;
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
