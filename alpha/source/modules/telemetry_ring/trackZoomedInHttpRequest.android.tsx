// Module ID: 17887
// Function ID: 17888
// Name: trackZoomedInHttpRequest
// Dependencies: [1085, 2003, 2]
// Exports: default

// Module 17887 (trackZoomedInHttpRequest)
import Constants from "Constants" /* 1085 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2003 */;
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
