// Module ID: 20071
// Function ID: 20072
// Name: StaffMemberPreloader
// Dependencies: [5041, 1385, 20072, 6990, 2]
// Exports: preloadStaffMembers

// Module 20071 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6990 */;
import StaffMemberConstants from "StaffMemberConstants" /* 20072 */;
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
