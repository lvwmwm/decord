// Module ID: 14084
// Function ID: 106933
// Name: track
// Dependencies: []
// Exports: track

// Module 14084 (track)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
