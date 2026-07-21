// Module ID: 14077
// Function ID: 106893
// Name: track
// Dependencies: [646840323, 899088385]
// Exports: track

// Module 14077 (track)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
