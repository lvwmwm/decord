// Module ID: 1038
// Function ID: 11172
// Name: _sendStandaloneClsSpan
// Dependencies: []
// Exports: trackClsAsStandaloneSpan

// Module 1038 (_sendStandaloneClsSpan)
function _sendStandaloneClsSpan(arg0, startTime) {
  if (require(dependencyMap[3]).DEBUG_BUILD) {
    const debug = require(dependencyMap[4]).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending CLS span (" + arg0 + ")");
  }
  if (startTime) {
    let tmp5Result = tmp5(tmp6[1]);
    tmp5Result = tmp5(tmp6[4]);
    let msToSecResult = tmp5Result.msToSec((tmp5Result.browserPerformanceTimeOrigin() || 0) + startTime.startTime);
    const tmp8 = tmp5Result.browserPerformanceTimeOrigin() || 0;
  } else {
    msToSecResult = tmp5(tmp6[4]).timestampInSeconds();
    const tmp5Result1 = tmp5(tmp6[4]);
  }
  const currentScope = require(dependencyMap[4]).getCurrentScope();
  let str3 = "Layout shift";
  if (startTime) {
    const first = startTime.sources[0];
    let node;
    if (null != first) {
      node = first.node;
    }
    str3 = require(dependencyMap[4]).htmlTreeAsString(node);
    const obj6 = require(dependencyMap[4]);
  }
  const obj4 = require(dependencyMap[4]);
  const tmp14 = callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.cls");
  const tmp16 = callback(callback(callback(callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.cls"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.cls"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, 0), "sentry.pageload.span_id", arg2), "sentry.report_event", arg3);
  const require = tmp16;
  if (tmp17) {
    const sources = startTime.sources;
    const item = sources.forEach((node) => {
      const combined = "cls.source." + arg1 + 1;
      tmp16[combined] = tmp16(closure_1[4]).htmlTreeAsString(node.node);
    });
  }
  const tmp15 = callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.cls"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.cls");
  const tmp17 = null != startTime && startTime.sources;
  const obj = { name: str3, transaction: currentScope.getScopeData().transactionName, attributes: tmp16, startTime: msToSecResult };
  const result = require(dependencyMap[1]).startStandaloneWebVitalSpan(obj);
  if (result) {
    result.addEvent("cls", callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, ""), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg0));
    result.end(msToSecResult);
    const tmp22 = callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "");
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneClsSpan };
export const trackClsAsStandaloneSpan = function trackClsAsStandaloneSpan(client) {
  let closure_1 = 0;
  if (obj.supportsWebVital("layout-shift")) {
    let closure_2 = require(closure_1[2]).addClsInstrumentationHandler((metric) => {
      const tmp = iter.entries[iter.entries.length - 1];
      if (tmp) {
        const value = iter.value;
      }
    }, true);
    const obj2 = require(closure_1[2]);
    const result = require(closure_1[1]).listenForWebVitalReportEvents(client, (arg0, arg1) => {
      callback2(closure_1, closure_0, arg1, arg0);
      callback();
    });
    const obj3 = require(closure_1[1]);
  }
};
