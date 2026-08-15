// Module ID: 7246
// Function ID: 7247
// Name: stopSyncingUserActivity
// Dependencies: [709, 2]
// Exports: default

// Module 7246 (stopSyncingUserActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(709).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
