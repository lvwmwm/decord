// Module ID: 18759
// Function ID: 18760
// Name: trackZoomedInHttpRequest
// Dependencies: [1084, 2002, 2]
// Exports: default

// Module 18759 (trackZoomedInHttpRequest)
import Constants from "Constants" /* 1084 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2002 */;
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
