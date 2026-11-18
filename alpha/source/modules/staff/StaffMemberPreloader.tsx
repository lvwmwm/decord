// Module ID: 19727
// Function ID: 19728
// Name: StaffMemberPreloader
// Dependencies: [4694, 1388, 19728, 6419, 2]
// Exports: preloadStaffMembers

// Module 19727 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6419 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19728 */;
import GuildStore from "GuildStore" /* 4694 */;
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
