// Module ID: 12964
// Function ID: 12965
// Name: stopSyncingUserActivity
// Dependencies: [709, 2]
// Exports: default

// Module 12964 (stopSyncingUserActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(709).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
