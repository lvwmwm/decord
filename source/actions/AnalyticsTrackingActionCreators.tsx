// Module ID: 14259
// Function ID: 109539
// Name: track
// Dependencies: [686, 2]
// Exports: track

// Module 14259 (track)
const result = require("set").fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = importDefault(686);
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
