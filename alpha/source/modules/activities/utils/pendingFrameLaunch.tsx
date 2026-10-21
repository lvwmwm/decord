// Module ID: 11326
// Function ID: 11327
// Name: pendingFrameLaunch
// Dependencies: [2]
// Exports: consumePendingFrameLaunch, stashPendingFrameLaunch

// Module 11326 (pendingFrameLaunch)
import size from "module_2" /* 2 */;

let closure_0 = {};
const result = size.fileFinishedImporting("modules/activities/utils/pendingFrameLaunch.tsx");

export const stashPendingFrameLaunch = function stashPendingFrameLaunch(applicationId, arg1) {
  closure_0[applicationId] = arg1;
};
export const consumePendingFrameLaunch = function consumePendingFrameLaunch(applicationId) {
  if (null != closure_0[applicationId]) {
    delete closure_0[applicationId];
    return closure_0[applicationId];
  }
};
