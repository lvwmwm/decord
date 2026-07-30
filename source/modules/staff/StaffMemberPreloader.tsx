// Module ID: 16315
// Function ID: 16316
// Name: preloadStaffMembers
// Dependencies: [1862, 1874, 16316, 5105, 2]
// Exports: preloadStaffMembers

// Module 16315 (preloadStaffMembers)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { PRELOAD_SERVER_ID } from "PRELOAD_SERVER_ID";

const result = require("PRELOAD_SERVER_ID").fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export const preloadStaffMembers = function preloadStaffMembers() {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    isStaffResult = null != guild.getGuild(PRELOAD_SERVER_ID);
  }
  if (isStaffResult) {
    const obj2 = importDefault(5105);
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
};
