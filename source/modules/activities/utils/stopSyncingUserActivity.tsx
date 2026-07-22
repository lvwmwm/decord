// Module ID: 12448
// Function ID: 94975
// Name: stopSyncingUserActivity
// Dependencies: []
// Exports: default

// Module 12448 (stopSyncingUserActivity)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(dependencyMap[0]).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
