// Module ID: 19723
// Function ID: 19724
// Name: StaffMemberPreloader
// Dependencies: [4663, 1388, 19724, 6390, 2]
// Exports: preloadStaffMembers

// Module 19723 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6390 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19724 */;
import GuildStore from "GuildStore" /* 4663 */;
import UserStore from "UserStore" /* 1388 */;
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
