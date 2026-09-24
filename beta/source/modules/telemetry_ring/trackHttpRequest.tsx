// Module ID: 17715
// Function ID: 17716
// Name: trackHttpRequest
// Dependencies: [1078, 17716, 17717, 1245, 2]
// Exports: default

// Module 17715 (trackHttpRequest)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest" /* 17717 */;
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
