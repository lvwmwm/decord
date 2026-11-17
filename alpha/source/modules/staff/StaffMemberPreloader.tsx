// Module ID: 20454
// Function ID: 20455
// Name: StaffMemberPreloader
// Dependencies: [5181, 1388, 20455, 6915, 2]
// Exports: preloadStaffMembers

// Module 20454 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6915 */;
import StaffMemberConstants from "StaffMemberConstants" /* 20455 */;
import GuildStore from "GuildStore" /* 5181 */;
import UserStore from "UserStore" /* 1388 */;
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
