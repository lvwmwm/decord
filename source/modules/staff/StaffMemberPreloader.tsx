// Module ID: 17409
// Function ID: 17410
// Name: preloadStaffMembers
// Dependencies: [1908, 1921, 17410, 5475, 2]
// Exports: preloadStaffMembers

// Module 17409 (preloadStaffMembers)
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 5475 */;
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { PRELOAD_SERVER_ID } from "PRELOAD_SERVER_ID" /* 17410 */;

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
