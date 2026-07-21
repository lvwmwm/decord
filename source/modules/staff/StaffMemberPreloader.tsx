// Module ID: 16044
// Function ID: 123198
// Name: preloadStaffMembers
// Dependencies: []
// Exports: preloadStaffMembers

// Module 16044 (preloadStaffMembers)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const PRELOAD_SERVER_ID = arg1(dependencyMap[2]).PRELOAD_SERVER_ID;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export const preloadStaffMembers = function preloadStaffMembers() {
  const currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser && currentUser.isStaff();
  if (tmp) {
    tmp = null != guild.getGuild(PRELOAD_SERVER_ID);
  }
  if (tmp) {
    const obj2 = importDefault(dependencyMap[3]);
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
};
