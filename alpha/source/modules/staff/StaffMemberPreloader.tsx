// Module ID: 19002
// Function ID: 19003
// Name: StaffMemberPreloader
// Dependencies: [4846, 1389, 19003, 6832, 2]
// Exports: preloadStaffMembers

// Module 19002 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6832 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19003 */;
import GuildStore from "GuildStore" /* 4846 */;
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
