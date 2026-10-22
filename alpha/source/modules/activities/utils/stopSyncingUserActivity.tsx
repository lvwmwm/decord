// Module ID: 14881
// Function ID: 14882
// Name: stopSyncingUserActivity
// Dependencies: [584, 2]
// Exports: default

// Module 14881 (stopSyncingUserActivity)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
