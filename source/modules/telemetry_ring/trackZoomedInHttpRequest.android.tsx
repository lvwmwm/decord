// Module ID: 16776
// Function ID: 16777
// Name: trackZoomedInHttpRequest
// Dependencies: [676, 13751, 2]
// Exports: default

// Module 16776 (trackZoomedInHttpRequest)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import shouldRunDefault from "shouldRun" /* 13751 */;

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
