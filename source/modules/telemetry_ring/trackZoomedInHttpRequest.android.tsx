// Module ID: 16018
// Function ID: 123758
// Name: trackZoomedInHttpRequest
// Dependencies: [653, 13181, 2]
// Exports: default

// Module 16018 (trackZoomedInHttpRequest)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  let obj = importDefault(13181);
  obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = "zoomed_in";
  obj.append(AnalyticEvents.HTTP_REQUEST, obj);
};
