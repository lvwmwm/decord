// Module ID: 19812
// Function ID: 19813
// Name: StaffMemberPreloader
// Dependencies: [4883, 1386, 19813, 6960, 2]
// Exports: preloadStaffMembers

// Module 19812 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6960 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19813 */;
import GuildStore from "GuildStore" /* 4883 */;
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
