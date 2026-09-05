// Module ID: 17285
// Function ID: 17286
// Name: trackZoomedInHttpRequest
// Dependencies: [1074, 1899, 2]
// Exports: default

// Module 17285 (trackZoomedInHttpRequest)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import shouldRunDefault from "shouldRun" /* 1899 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = shouldRunDefault;
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {
  }
};
