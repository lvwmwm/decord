// Module ID: 12625
// Function ID: 97584
// Name: stopSyncingUserActivity
// Dependencies: [686, 2]
// Exports: default

// Module 12625 (stopSyncingUserActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  importDefault(686).dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
