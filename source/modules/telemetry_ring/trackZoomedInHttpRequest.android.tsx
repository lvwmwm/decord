// Module ID: 16069
// Function ID: 123961
// Name: trackZoomedInHttpRequest
// Dependencies: [653, 13226, 2]
// Exports: default

// Module 16069 (trackZoomedInHttpRequest)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  let obj = importDefault(13226);
  obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = "zoomed_in";
  obj.append(AnalyticEvents.HTTP_REQUEST, obj);
};
