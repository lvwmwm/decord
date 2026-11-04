// Module ID: 19625
// Function ID: 19626
// Name: StaffMemberPreloader
// Dependencies: [4885, 1383, 19626, 6902, 2]
// Exports: preloadStaffMembers

// Module 19625 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19626 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
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
