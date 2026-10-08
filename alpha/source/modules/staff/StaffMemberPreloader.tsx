// Module ID: 17962
// Function ID: 17963
// Name: StaffMemberPreloader
// Dependencies: [2086, 1389, 17963, 6102, 2]
// Exports: preloadStaffMembers

// Module 17962 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import StaffMemberConstants from "StaffMemberConstants" /* 17963 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1389 */;
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
