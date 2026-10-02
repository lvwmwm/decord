// Module ID: 14844
// Function ID: 14845
// Name: actions/AnalyticsTrackingActionCreators
// Dependencies: [585, 2]
// Exports: track

// Module 14844 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TRACK", event, properties };
  obj.dispatch(obj2);
};
