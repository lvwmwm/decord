// Module ID: 16201
// Function ID: 16202
// Name: trackHttpRequest
// Dependencies: [676, 16202, 16203, 698, 2]
// Exports: default

// Module 16201 (trackHttpRequest)
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
  obj.url = replaced;
  importDefault(16203)(obj);
  const random = Math.random();
  if (random < obj2.getHttpRequestSampleRate()) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.source = "sample";
    importDefault(698).track(AnalyticEvents.HTTP_REQUEST, obj);
    const tmp3Result = importDefault(698);
  }
};
