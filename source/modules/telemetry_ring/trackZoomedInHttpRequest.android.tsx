// Module ID: 16439
// Function ID: 16440
// Name: trackZoomedInHttpRequest
// Dependencies: [676, 13523, 2]
// Exports: default

// Module 16439 (trackZoomedInHttpRequest)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = importDefault(13523);
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {
  }
};
