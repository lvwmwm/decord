// Module ID: 12443
// Function ID: 94947
// Name: stopSyncingUserActivity
// Dependencies: [646840323, 899088385]
// Exports: default

// Module 12443 (stopSyncingUserActivity)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(dependencyMap[0]).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
