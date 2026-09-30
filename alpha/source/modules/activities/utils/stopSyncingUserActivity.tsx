// Module ID: 13368
// Function ID: 13369
// Name: stopSyncingUserActivity
// Dependencies: [573, 2]
// Exports: default

// Module 13368 (stopSyncingUserActivity)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  DispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
