// Module ID: 12613
// Function ID: 97452
// Name: stopSyncingUserActivity
// Dependencies: [686, 2]
// Exports: default

// Module 12613 (stopSyncingUserActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(686).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
