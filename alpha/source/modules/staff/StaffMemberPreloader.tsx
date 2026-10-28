// Module ID: 19265
// Function ID: 19266
// Name: StaffMemberPreloader
// Dependencies: [4878, 1389, 19266, 6866, 2]
// Exports: preloadStaffMembers

// Module 19265 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6866 */;
import StaffMemberConstants from "StaffMemberConstants" /* 19266 */;
import GuildStore from "GuildStore" /* 4878 */;
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
