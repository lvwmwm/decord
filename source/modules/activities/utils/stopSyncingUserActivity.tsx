// Module ID: 7284
// Function ID: 7285
// Name: stopSyncingUserActivity
// Dependencies: [709, 2]
// Exports: default

// Module 7284 (stopSyncingUserActivity)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  dispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
