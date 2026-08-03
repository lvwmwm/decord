// Module ID: 14412
// Function ID: 14413
// Name: track
// Dependencies: [709, 2]
// Exports: track

// Module 14412 (track)
const result = require("set").fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = importDefault(709);
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
