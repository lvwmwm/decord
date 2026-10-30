// Module ID: 19302
// Function ID: 19303
// Name: trackHttpRequest
// Dependencies: [1072, 19303, 19304, 1253, 2]
// Exports: default

// Module 19302 (trackHttpRequest)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import HttpRequestSampleExperiment from "HttpRequestSampleExperiment" /* 19303 */;
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest" /* 19304 */;
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
    const track = tmp3(1253).track;
    const HTTP_REQUEST = AnalyticEvents.HTTP_REQUEST;
    AnalyticsUtilsDefault;
    const merged1 = Object.assign(obj);
    track(HTTP_REQUEST, obj3);
  }
};
