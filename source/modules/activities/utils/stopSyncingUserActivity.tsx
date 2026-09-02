// Module ID: 13506
// Function ID: 13507
// Name: stopSyncingUserActivity
// Dependencies: [706, 2]
// Exports: default

// Module 13506 (stopSyncingUserActivity)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  dispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
