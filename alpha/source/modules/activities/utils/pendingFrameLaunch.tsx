// Module ID: 11732
// Function ID: 11733
// Name: pendingFrameLaunch
// Dependencies: [2]
// Exports: consumePendingFrameLaunch, stashPendingFrameLaunch

// Module 11732 (pendingFrameLaunch)
import size from "module_2" /* 2 */;

let closure_0 = {};
const result = size.fileFinishedImporting("modules/activities/utils/pendingFrameLaunch.tsx");

export function stashPendingFrameLaunch(applicationId, arg1) {
  closure_0[applicationId] = arg1;
}
export function consumePendingFrameLaunch(applicationId) {
  if (null != closure_0[applicationId]) {
    delete closure_0[applicationId];
    return closure_0[applicationId];
  }
}
