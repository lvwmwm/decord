// Module ID: 13103
// Function ID: 13104
// Name: stopSyncingUserActivity
// Dependencies: [709, 2]
// Exports: default

// Module 13103 (stopSyncingUserActivity)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  dispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
