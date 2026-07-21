// Module ID: 15829
// Function ID: 121004
// Name: trackHttpRequest
// Dependencies: []
// Exports: default

// Module 15829 (trackHttpRequest)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

export default function trackHttpRequest(url) {
  let obj = {};
  const merged = Object.assign(url);
  let replaced = str;
  if (null != url.url) {
    replaced = str.split(/[?#]/)[0].replace(/\d+/g, "#");
    const str2 = str.split(/[?#]/)[0];
  }
  obj["url"] = replaced;
  importDefault(dependencyMap[2])(obj);
  const random = Math.random();
  if (random < obj2.getHttpRequestSampleRate()) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj["source"] = "sample";
    importDefault(dependencyMap[3]).track(AnalyticEvents.HTTP_REQUEST, obj);
    const obj3 = importDefault(dependencyMap[3]);
  }
};
