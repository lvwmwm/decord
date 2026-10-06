// Module ID: 13173
// Function ID: 13174
// Name: stopSyncingUserActivity
// Dependencies: [585, 2]
// Exports: default

// Module 13173 (stopSyncingUserActivity)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
