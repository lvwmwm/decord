// Module ID: 12749
// Function ID: 12750
// Name: leaveEmbeddedActivity
// Dependencies: [572, 2]
// Exports: leaveEmbeddedActivity

// Module 12749 (leaveEmbeddedActivity)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/leaveEmbeddedActivity.tsx");

export function leaveEmbeddedActivity(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  const obj = { type: "EMBEDDED_ACTIVITY_LEAVE" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
}
