// Module ID: 16126
// Function ID: 16127
// Name: trackZoomedInHttpRequest
// Dependencies: [676, 13266, 2]
// Exports: default

// Module 16126 (trackZoomedInHttpRequest)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = importDefault(13266);
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {
  }
};
