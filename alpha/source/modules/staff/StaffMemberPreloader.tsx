// Module ID: 19948
// Function ID: 19949
// Name: StaffMemberPreloader
// Dependencies: [5041, 1385, 19949, 6982, 2]
// Exports: preloadStaffMembers

// Module 19948 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6982 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19949 */;
import GuildStore from "GuildStore" /* 5041 */;
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
