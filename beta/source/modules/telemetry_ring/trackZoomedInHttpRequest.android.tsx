// Module ID: 17707
// Function ID: 17708
// Name: trackZoomedInHttpRequest
// Dependencies: [1078, 1987, 2]
// Exports: default

// Module 17707 (trackZoomedInHttpRequest)
import Constants from "Constants" /* 1078 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1987 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.source = "zoomed_in";
    ZoomedInTelemetryDefault.append(AnalyticEvents.HTTP_REQUEST, obj2);
  } catch (err) {
  }
};
