// Module ID: 10514
// Function ID: 82094
// Name: stashPendingFrameLaunch
// Dependencies: [2]
// Exports: consumePendingFrameLaunch, discardPendingFrameLaunch, stashPendingFrameLaunch

// Module 10514 (stashPendingFrameLaunch)
let closure_0 = {};
const result = require("set").fileFinishedImporting("modules/activities/utils/pendingFrameLaunch.tsx");

export const stashPendingFrameLaunch = function stashPendingFrameLaunch(applicationId, arg1) {
  closure_0[applicationId] = arg1;
};
export const consumePendingFrameLaunch = function consumePendingFrameLaunch(applicationId) {
  if (null != table[applicationId]) {
    delete tmp[tmp2];
    return tmp3;
  }
};
export const discardPendingFrameLaunch = function discardPendingFrameLaunch(applicationId) {
  delete tmp2[tmp];
};
