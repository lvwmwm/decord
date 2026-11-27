// Module ID: 19891
// Function ID: 19892
// Name: StaffMemberPreloader
// Dependencies: [4914, 1387, 19892, 6991, 2]
// Exports: preloadStaffMembers

// Module 19891 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6991 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19892 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;
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
