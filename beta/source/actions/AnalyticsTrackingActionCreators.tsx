// Module ID: 15570
// Function ID: 15571
// Name: actions/AnalyticsTrackingActionCreators
// Dependencies: [577, 2]
// Exports: track

// Module 15570 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  DispatcherDefault.dispatch({ type: "TRACK", event, properties });
};
