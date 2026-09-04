// Module ID: 17205
// Function ID: 17206
// Name: trackZoomedInHttpRequest
// Dependencies: [673, 14108, 2]
// Exports: default

// Module 17205 (trackZoomedInHttpRequest)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import shouldRunDefault from "shouldRun" /* 14108 */;

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
