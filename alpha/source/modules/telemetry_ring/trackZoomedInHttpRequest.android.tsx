// Module ID: 19560
// Function ID: 19561
// Name: trackZoomedInHttpRequest
// Dependencies: [1071, 2122, 2]
// Exports: default

// Module 19560 (trackZoomedInHttpRequest)
import Constants from "Constants" /* 1071 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2122 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    const obj = { source: "zoomed_in" };
    const append = ZoomedInTelemetryDefault.append;
    const HTTP_REQUEST = AnalyticEvents.HTTP_REQUEST;
    ZoomedInTelemetryDefault;
    const merged = Object.assign(arg0);
    append(HTTP_REQUEST, obj);
  } catch (err) {
  }
};
