// Module ID: 14753
// Function ID: 14754
// Name: track
// Dependencies: [709, 2]
// Exports: track

// Module 14753 (track)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = dispatcherDefault;
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
