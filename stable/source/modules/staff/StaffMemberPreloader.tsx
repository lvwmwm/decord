// Module ID: 17604
// Function ID: 17605
// Name: StaffMemberPreloader
// Dependencies: [1979, 1371, 17605, 5601, 2]
// Exports: preloadStaffMembers

// Module 17604 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5601 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

const PRELOAD_SERVER_ID = fn(17605).PRELOAD_SERVER_ID;
const size = fn(2);
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
