// Module ID: 15753
// Function ID: 15754
// Name: stopSyncingUserActivity
// Dependencies: [572, 2]
// Exports: default

// Module 15753 (stopSyncingUserActivity)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
