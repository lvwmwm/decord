// Module ID: 16286
// Function ID: 126169
// Name: preloadStaffMembers
// Dependencies: [1838, 1850, 16287, 5083, 2]
// Exports: preloadStaffMembers

// Module 16286 (preloadStaffMembers)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PRELOAD_SERVER_ID } from "PRELOAD_SERVER_ID";

const result = require("PRELOAD_SERVER_ID").fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export const preloadStaffMembers = function preloadStaffMembers() {
  currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser && currentUser.isStaff();
  if (tmp) {
    tmp = null != guild.getGuild(PRELOAD_SERVER_ID);
  }
  if (tmp) {
    const obj2 = importDefault(5083);
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
};
