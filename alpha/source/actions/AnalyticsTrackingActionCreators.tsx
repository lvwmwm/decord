// Module ID: 15519
// Function ID: 15520
// Name: actions/AnalyticsTrackingActionCreators
// Dependencies: [584, 2]
// Exports: track

// Module 15519 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TRACK", event, properties };
  obj.dispatch(obj2);
};
