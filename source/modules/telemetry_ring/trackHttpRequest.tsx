// Module ID: 16426
// Function ID: 16427
// Name: trackHttpRequest
// Dependencies: [676, 16427, 16428, 698, 2]
// Exports: default

// Module 16426 (trackHttpRequest)
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
  importDefault(16428)(obj);
  const random = Math.random();
  if (random < obj2.getHttpRequestSampleRate()) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.source = "sample";
    importDefault(698).track(AnalyticEvents.HTTP_REQUEST, obj);
    const tmp3Result = importDefault(698);
  }
};
