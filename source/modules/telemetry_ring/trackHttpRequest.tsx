// Module ID: 16005
// Function ID: 123586
// Name: trackHttpRequest
// Dependencies: [653, 16006, 16007, 675, 2]
// Exports: default

// Module 16005 (trackHttpRequest)
import { AnalyticEvents } from "ME";

const result = require("trackZoomedInHttpRequest").fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

export default function trackHttpRequest(url) {
  let obj = {};
  const merged = Object.assign(url);
  let replaced = str;
  if (null != url.url) {
    replaced = str.split(/[?#]/)[0].replace(/\d+/g, "#");
    const str2 = str.split(/[?#]/)[0];
  }
  obj["url"] = replaced;
  importDefault(16007)(obj);
  const random = Math.random();
  if (random < obj2.getHttpRequestSampleRate()) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj["source"] = "sample";
    importDefault(675).track(AnalyticEvents.HTTP_REQUEST, obj);
    const obj3 = importDefault(675);
  }
};
