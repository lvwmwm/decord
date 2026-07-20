// Module ID: 1039
// Function ID: 11178
// Name: getAbsoluteTime
// Dependencies: []
// Exports: resourceTimingToSpanAttributes

// Module 1039 (getAbsoluteTime)
function getAbsoluteTime(arg0) {
  let result = arg0;
  if (arg0) {
    let timeOrigin = require(dependencyMap[1]).browserPerformanceTimeOrigin();
    if (!timeOrigin) {
      const _performance = performance;
      timeOrigin = performance.timeOrigin;
    }
    result = (timeOrigin + arg0) / 1000;
    const obj = require(dependencyMap[1]);
  }
  return result;
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const resourceTimingToSpanAttributes = function resourceTimingToSpanAttributes(nextHopProtocol) {
  let obj = {};
  if (null != nextHopProtocol.nextHopProtocol) {
    const result = require(dependencyMap[2]).extractNetworkProtocol(nextHopProtocol.nextHopProtocol);
    ({ version: obj.network.protocol.version, name: obj.network.protocol.name } = result);
    const obj2 = require(dependencyMap[2]);
  }
  if (obj3.browserPerformanceTimeOrigin()) {
    obj = { http.request.redirect_start: getAbsoluteTime(nextHopProtocol.redirectStart), http.request.redirect_end: getAbsoluteTime(nextHopProtocol.redirectEnd), http.request.worker_start: getAbsoluteTime(nextHopProtocol.workerStart), http.request.fetch_start: getAbsoluteTime(nextHopProtocol.fetchStart), http.request.domain_lookup_start: getAbsoluteTime(nextHopProtocol.domainLookupStart), http.request.domain_lookup_end: getAbsoluteTime(nextHopProtocol.domainLookupEnd), http.request.connect_start: getAbsoluteTime(nextHopProtocol.connectStart), http.request.secure_connection_start: getAbsoluteTime(nextHopProtocol.secureConnectionStart), http.request.connection_end: getAbsoluteTime(nextHopProtocol.connectEnd), http.request.request_start: getAbsoluteTime(nextHopProtocol.requestStart), http.request.response_start: getAbsoluteTime(nextHopProtocol.responseStart), http.request.response_end: getAbsoluteTime(nextHopProtocol.responseEnd) };
    let result1;
    if (null != nextHopProtocol.responseStart) {
      result1 = nextHopProtocol.responseStart / 1000;
    }
    obj.http.request.time_to_first_byte = result1;
    let tmp7 = function dropUndefinedKeysFromObject(arg0) {
      const entries = Object.entries(arg0);
      return Object.fromEntries(entries.filter((arg0) => null != callback(arg0, 2)[1]));
    }(Object.assign({}, obj, obj));
  } else {
    const browserPerformanceAPI = require(dependencyMap[2]).getBrowserPerformanceAPI();
    tmp7 = obj;
    if (null != browserPerformanceAPI) {
      tmp7 = obj;
    }
    const obj4 = require(dependencyMap[2]);
  }
  return tmp7;
};
