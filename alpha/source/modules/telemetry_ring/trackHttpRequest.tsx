// Module ID: 18631
// Function ID: 18632
// Name: trackHttpRequest
// Dependencies: [1087, 18632, 18633, 1267, 2]
// Exports: default

// Module 18631 (trackHttpRequest)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import HttpRequestSampleExperiment from "HttpRequestSampleExperiment" /* 18632 */;
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest" /* 18633 */;
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
    const track = tmp3(1267).track;
    const HTTP_REQUEST = AnalyticEvents.HTTP_REQUEST;
    AnalyticsUtilsDefault;
    const merged1 = Object.assign(obj);
    track(HTTP_REQUEST, obj3);
  }
};
