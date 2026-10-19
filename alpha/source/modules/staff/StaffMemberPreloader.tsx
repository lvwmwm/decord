// Module ID: 18651
// Function ID: 18652
// Name: StaffMemberPreloader
// Dependencies: [2090, 1392, 18652, 6377, 2]
// Exports: preloadStaffMembers

// Module 18651 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6377 */;
import StaffMemberConstants from "StaffMemberConstants" /* 18652 */;
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
