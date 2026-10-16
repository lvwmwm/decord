// Module ID: 18585
// Function ID: 18586
// Name: StaffMemberPreloader
// Dependencies: [2090, 1392, 18586, 6324, 2]
// Exports: preloadStaffMembers

// Module 18585 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6324 */;
import StaffMemberConstants from "StaffMemberConstants" /* 18586 */;
import GuildStore from "GuildStore" /* 2090 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const PRELOAD_SERVER_ID = StaffMemberConstants.PRELOAD_SERVER_ID;
const result = size.fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export const preloadStaffMembers = function preloadStaffMembers() {
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
};
