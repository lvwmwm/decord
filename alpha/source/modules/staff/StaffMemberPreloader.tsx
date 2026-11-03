// Module ID: 19775
// Function ID: 19776
// Name: StaffMemberPreloader
// Dependencies: [5012, 1385, 19776, 7022, 2]
// Exports: preloadStaffMembers

// Module 19775 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 7022 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19776 */;
import GuildStore from "GuildStore" /* 5012 */;
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
