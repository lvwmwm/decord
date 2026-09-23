// Module ID: 17975
// Function ID: 17976
// Name: StaffMemberPreloader
// Dependencies: [2064, 1372, 17976, 5823, 2]
// Exports: preloadStaffMembers

// Module 17975 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5823 */;
import GuildStore from "GuildStore" /* 2064 */;
import UserStore from "UserStore" /* 1372 */;

const PRELOAD_SERVER_ID = fn(17976).PRELOAD_SERVER_ID;
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
