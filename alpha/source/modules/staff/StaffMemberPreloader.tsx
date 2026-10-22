// Module ID: 18876
// Function ID: 18877
// Name: StaffMemberPreloader
// Dependencies: [4843, 1392, 18877, 6815, 2]
// Exports: preloadStaffMembers

// Module 18876 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6815 */;
import StaffMemberConstants from "StaffMemberConstants" /* 18877 */;
import GuildStore from "GuildStore" /* 4843 */;
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
