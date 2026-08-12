// Module ID: 14610
// Function ID: 14611
// Name: track
// Dependencies: [709, 2]
// Exports: track

// Module 14610 (track)
const result = require("set").fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = importDefault(709);
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
