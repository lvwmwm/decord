// Module ID: 18294
// Function ID: 18295
// Name: StaffMemberPreloader
// Dependencies: [2087, 1390, 18295, 6104, 2]
// Exports: preloadStaffMembers

// Module 18294 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6104 */;
import StaffMemberConstants from "StaffMemberConstants" /* 18295 */;
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
