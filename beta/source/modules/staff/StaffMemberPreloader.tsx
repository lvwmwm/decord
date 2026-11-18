// Module ID: 20409
// Function ID: 20410
// Name: StaffMemberPreloader
// Dependencies: [5177, 1388, 20410, 6907, 2]
// Exports: preloadStaffMembers

// Module 20409 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6907 */;
import StaffMemberConstants from "StaffMemberConstants" /* 20410 */;
import GuildStore from "GuildStore" /* 5177 */;
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
