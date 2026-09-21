// Module ID: 13895
// Function ID: 13896
// Name: stopSyncingUserActivity
// Dependencies: [577, 2]
// Exports: default

// Module 13895 (stopSyncingUserActivity)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  DispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
