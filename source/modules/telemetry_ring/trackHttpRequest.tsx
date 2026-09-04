// Module ID: 17203
// Function ID: 17204
// Name: trackHttpRequest
// Dependencies: [673, 17204, 17205, 695, 2]
// Exports: default

// Module 17203 (trackHttpRequest)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest" /* 17205 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

export default function trackHttpRequest(url) {
  let obj = {};
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
    obj = {};
    const merged1 = Object.assign(obj);
    obj.source = "sample";
    expandEventPropertiesDefault.track(AnalyticEvents.HTTP_REQUEST, obj);
    const tmp3Result = expandEventPropertiesDefault;
  }
};
