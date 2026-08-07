// Module ID: 12829
// Function ID: 12830
// Name: stopSyncingUserActivity
// Dependencies: [709, 2]
// Exports: default

// Module 12829 (stopSyncingUserActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(709).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
