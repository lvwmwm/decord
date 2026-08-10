// Module ID: 14545
// Function ID: 14546
// Name: track
// Dependencies: [709, 2]
// Exports: track

// Module 14545 (track)
const result = require("set").fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = importDefault(709);
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
