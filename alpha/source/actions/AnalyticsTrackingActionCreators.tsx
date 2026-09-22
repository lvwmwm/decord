// Module ID: 15592
// Function ID: 15593
// Name: actions/AnalyticsTrackingActionCreators
// Dependencies: [573, 2]
// Exports: track

// Module 15592 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  DispatcherDefault.dispatch({ type: "TRACK", event, properties });
};
