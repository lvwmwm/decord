// Module ID: 14345
// Function ID: 14346
// Name: track
// Dependencies: [709, 2]
// Exports: track

// Module 14345 (track)
const result = require("set").fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = importDefault(709);
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
