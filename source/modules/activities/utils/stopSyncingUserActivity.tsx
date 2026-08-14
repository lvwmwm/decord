// Module ID: 12983
// Function ID: 12984
// Name: stopSyncingUserActivity
// Dependencies: [709, 2]
// Exports: default

// Module 12983 (stopSyncingUserActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(709).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
