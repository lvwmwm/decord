// Module ID: 1037
// Function ID: 11171
// Name: _sendStandaloneLcpSpan
// Dependencies: []
// Exports: trackLcpAsStandaloneSpan

// Module 1037 (_sendStandaloneLcpSpan)
function _sendStandaloneLcpSpan(arg0, startTime) {
  if (require(dependencyMap[3]).DEBUG_BUILD) {
    const debug = require(dependencyMap[4]).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending LCP span (" + arg0 + ")");
  }
  let obj = require(dependencyMap[1]);
  const obj2 = require(dependencyMap[4]);
  let num2;
  if (null != startTime) {
    num2 = startTime.startTime;
  }
  if (!num2) {
    num2 = 0;
  }
  const msToSecResult = obj.msToSec((require(dependencyMap[4]).browserPerformanceTimeOrigin() || 0) + num2);
  const tmp5 = require(dependencyMap[4]).browserPerformanceTimeOrigin() || 0;
  const currentScope = require(dependencyMap[4]).getCurrentScope();
  let str3 = "Largest contentful paint";
  if (startTime) {
    str3 = require(dependencyMap[4]).htmlTreeAsString(startTime.element);
    const obj5 = require(dependencyMap[4]);
  }
  const obj3 = require(dependencyMap[4]);
  const tmp9 = callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.lcp");
  const tmp11 = callback(callback(callback(callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.lcp"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.lcp"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, 0), "sentry.pageload.span_id", arg2), "sentry.report_event", arg3);
  if (startTime) {
    if (startTime.element) {
      tmp11.lcp.element = require(dependencyMap[4]).htmlTreeAsString(startTime.element);
      const obj6 = require(dependencyMap[4]);
    }
    if (startTime.id) {
      tmp11.lcp.id = startTime.id;
    }
    if (startTime.url) {
      tmp11.lcp.url = startTime.url;
    }
    if (null != startTime.loadTime) {
      tmp11.lcp.loadTime = startTime.loadTime;
    }
    if (null != startTime.renderTime) {
      tmp11.lcp.renderTime = startTime.renderTime;
    }
    if (null != startTime.size) {
      tmp11.lcp.size = startTime.size;
    }
  }
  const tmp10 = callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.lcp"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.lcp");
  obj = { name: str3, transaction: currentScope.getScopeData().transactionName, attributes: tmp11, startTime: msToSecResult };
  const result = require(dependencyMap[1]).startStandaloneWebVitalSpan(obj);
  if (result) {
    result.addEvent("lcp", callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg0));
    result.end(msToSecResult);
    const tmp17 = callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond");
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneLcpSpan };
export const trackLcpAsStandaloneSpan = function trackLcpAsStandaloneSpan(client) {
  let closure_1 = 0;
  if (obj.supportsWebVital("largest-contentful-paint")) {
    let closure_2 = require(closure_1[2]).addLcpInstrumentationHandler((metric) => {
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
