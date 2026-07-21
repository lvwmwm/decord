// Module ID: 10503
// Function ID: 82031
// Name: stashPendingFrameLaunch
// Dependencies: []
// Exports: consumePendingFrameLaunch, discardPendingFrameLaunch, stashPendingFrameLaunch

// Module 10503 (stashPendingFrameLaunch)
let closure_0 = {};
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/pendingFrameLaunch.tsx");

export const stashPendingFrameLaunch = function stashPendingFrameLaunch(applicationId, arg1) {
  closure_0[applicationId] = arg1;
};
export const consumePendingFrameLaunch = function consumePendingFrameLaunch(applicationId) {
  if (null != closure_0[applicationId]) {
    delete r1[r2];
    return tmp;
  }
};
export const discardPendingFrameLaunch = function discardPendingFrameLaunch(applicationId) {
  delete r1[r0];
};
