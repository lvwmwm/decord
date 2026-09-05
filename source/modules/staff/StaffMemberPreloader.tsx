// Module ID: 17489
// Function ID: 17490
// Name: preloadStaffMembers
// Dependencies: [1979, 1371, 17490, 5520, 2]
// Exports: preloadStaffMembers

// Module 17489 (preloadStaffMembers)
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 5520 */;
import closure_2 from "createGuildRecordFromRust" /* 1979 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import { PRELOAD_SERVER_ID } from "PRELOAD_SERVER_ID" /* 17490 */;

const result = require("set").fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

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
    const obj2 = showTooManyUserGuildsAlertDefault;
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
};
