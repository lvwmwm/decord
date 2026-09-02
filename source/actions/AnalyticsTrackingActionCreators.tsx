// Module ID: 15134
// Function ID: 15135
// Name: track
// Dependencies: [706, 2]
// Exports: track

// Module 15134 (track)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = dispatcherDefault;
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
