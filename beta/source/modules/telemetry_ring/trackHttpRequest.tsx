// Module ID: 17706
// Function ID: 17707
// Name: trackHttpRequest
// Dependencies: [1074, 17707, 17708, 1241, 2]
// Exports: default

// Module 17706 (trackHttpRequest)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest" /* 17708 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

export default function trackHttpRequest(url) {
  const obj = {};
  const merged = Object.assign(url);
  let replaced = str;
  if (null != url.url) {
    replaced = str.split(/[?#]/)[0].replace(/\d+/g, "#");
    const str2 = str.split(/[?#]/)[0];
  }
  obj.url = replaced;
  trackZoomedInHttpRequestDefault(obj);
  const random = Math.random();
  if (random < obj2.getHttpRequestSampleRate()) {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    obj3.source = "sample";
    AnalyticsUtilsDefault.track(AnalyticEvents.HTTP_REQUEST, obj3);
    const tmp3Result = AnalyticsUtilsDefault;
  }
};
