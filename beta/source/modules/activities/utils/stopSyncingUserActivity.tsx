// Module ID: 15524
// Function ID: 15525
// Name: stopSyncingUserActivity
// Dependencies: [572, 2]
// Exports: default

// Module 15524 (stopSyncingUserActivity)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
