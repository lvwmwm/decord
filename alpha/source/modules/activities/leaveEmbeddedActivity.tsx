// Module ID: 10812
// Function ID: 10813
// Name: leaveEmbeddedActivity
// Dependencies: [584, 2]
// Exports: leaveEmbeddedActivity

// Module 10812 (leaveEmbeddedActivity)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/leaveEmbeddedActivity.tsx");

export const leaveEmbeddedActivity = function leaveEmbeddedActivity(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  const obj = { type: "EMBEDDED_ACTIVITY_LEAVE" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
};
