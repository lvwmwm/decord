// Module ID: 18992
// Function ID: 18993
// Name: StaffMemberPreloader
// Dependencies: [4877, 1392, 18993, 6862, 2]
// Exports: preloadStaffMembers

// Module 18992 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6862 */;
import StaffMemberConstants from "StaffMemberConstants" /* 18993 */;
import GuildStore from "GuildStore" /* 4877 */;
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
