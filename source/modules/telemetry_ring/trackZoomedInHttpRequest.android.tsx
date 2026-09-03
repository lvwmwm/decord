// Module ID: 17119
// Function ID: 17120
// Name: trackZoomedInHttpRequest
// Dependencies: [673, 14076, 2]
// Exports: default

// Module 17119 (trackZoomedInHttpRequest)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import shouldRunDefault from "shouldRun" /* 14076 */;

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
