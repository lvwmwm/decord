// Module ID: 19558
// Function ID: 19559
// Name: trackHttpRequest
// Dependencies: [1071, 19559, 19560, 1255, 2]
// Exports: default

// Module 19558 (trackHttpRequest)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import HttpRequestSampleExperiment from "HttpRequestSampleExperiment" /* 19559 */;
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest" /* 19560 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

export default function trackHttpRequest(url) {
  let replaced;
  const obj = { url: replaced };
  const merged = Object.assign(url);
  replaced = str;
  if (null != url.url) {
    const str2 = url.url.split(/[?#]/)[0];
    replaced = str2.replace(/\d+/g, "#");
  }
  trackZoomedInHttpRequestDefault(obj);
  const random = Math.random();
  const obj2 = HttpRequestSampleExperiment;
  if (random < obj2.getHttpRequestSampleRate()) {
    const obj3 = { source: "sample" };
    const track = tmp3(1255).track;
    const HTTP_REQUEST = AnalyticEvents.HTTP_REQUEST;
    AnalyticsUtilsDefault;
    const merged1 = Object.assign(obj);
    track(HTTP_REQUEST, obj3);
  }
};
