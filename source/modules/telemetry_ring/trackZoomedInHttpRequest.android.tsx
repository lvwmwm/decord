// Module ID: 16428
// Function ID: 16429
// Name: trackZoomedInHttpRequest
// Dependencies: [676, 13522, 2]
// Exports: default

// Module 16428 (trackZoomedInHttpRequest)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = importDefault(13522);
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {
  }
};
