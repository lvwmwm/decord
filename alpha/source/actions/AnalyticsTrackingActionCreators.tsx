// Module ID: 16776
// Function ID: 16777
// Name: actions/AnalyticsTrackingActionCreators
// Dependencies: [572, 2]
// Exports: track

// Module 16776 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export function track(event, properties) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TRACK", event, properties };
  obj.dispatch(obj2);
}
