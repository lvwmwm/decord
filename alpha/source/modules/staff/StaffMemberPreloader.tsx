// Module ID: 19941
// Function ID: 19942
// Name: StaffMemberPreloader
// Dependencies: [5014, 1385, 19942, 7040, 2]
// Exports: preloadStaffMembers

// Module 19941 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 7040 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19942 */;
import GuildStore from "GuildStore" /* 5014 */;
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
