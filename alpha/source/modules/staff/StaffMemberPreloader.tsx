// Module ID: 18533
// Function ID: 18534
// Name: StaffMemberPreloader
// Dependencies: [2087, 1390, 18534, 6320, 2]
// Exports: preloadStaffMembers

// Module 18533 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6320 */;
import StaffMemberConstants from "StaffMemberConstants" /* 18534 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;
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
