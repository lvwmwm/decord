// Module ID: 17605
// Function ID: 17606
// Name: StaffMemberPreloader
// Dependencies: [2074, 1377, 17606, 5705, 2]
// Exports: preloadStaffMembers

// Module 17605 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import StaffMemberConstants from "StaffMemberConstants" /* 17606 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
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
