// Module ID: 15835
// Function ID: 121052
// Name: trackZoomedInHttpRequest
// Dependencies: []
// Exports: default

// Module 15835 (trackZoomedInHttpRequest)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = "zoomed_in";
  obj.append(AnalyticEvents.HTTP_REQUEST, obj);
};
