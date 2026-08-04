// Module ID: 12805
// Function ID: 12806
// Name: stopSyncingUserActivity
// Dependencies: [709, 2]
// Exports: default

// Module 12805 (stopSyncingUserActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(709).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
