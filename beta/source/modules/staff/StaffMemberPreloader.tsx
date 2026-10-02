// Module ID: 17262
// Function ID: 17263
// Name: StaffMemberPreloader
// Dependencies: [2073, 1378, 17263, 5833, 2]
// Exports: preloadStaffMembers

// Module 17262 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5833 */;
import StaffMemberConstants from "StaffMemberConstants" /* 17263 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserStore from "UserStore" /* 1378 */;
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
