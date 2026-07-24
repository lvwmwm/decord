// Module ID: 1037
// Function ID: 11173
// Name: _sendStandaloneLcpSpan
// Dependencies: [77, 1035, 1010, 1011, 794]
// Exports: trackLcpAsStandaloneSpan

// Module 1037 (_sendStandaloneLcpSpan)
import _defineProperty from "_defineProperty";

function _sendStandaloneLcpSpan(arg0, startTime) {
  if (require(1011).DEBUG_BUILD) {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending LCP span (" + arg0 + ")");
  }
  let obj = require(1035) /* extractNetworkProtocol */;
  const obj2 = require(794) /* registerSpanErrorInstrumentation */;
  let num2;
  if (null != startTime) {
    num2 = startTime.startTime;
  }
  if (!num2) {
    num2 = 0;
  }
  const msToSecResult = obj.msToSec((require(794) /* registerSpanErrorInstrumentation */.browserPerformanceTimeOrigin() || 0) + num2);
  const tmp5 = require(794) /* registerSpanErrorInstrumentation */.browserPerformanceTimeOrigin() || 0;
  const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
  let str3 = "Largest contentful paint";
  if (startTime) {
    str3 = require(794) /* registerSpanErrorInstrumentation */.htmlTreeAsString(startTime.element);
    const obj5 = require(794) /* registerSpanErrorInstrumentation */;
  }
  const obj3 = require(794) /* registerSpanErrorInstrumentation */;
  const tmp9 = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.lcp");
  const tmp11 = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.lcp"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.lcp"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, 0), "sentry.pageload.span_id", arg2), "sentry.report_event", arg3);
  if (startTime) {
    if (startTime.element) {
      tmp11["lcp.element"] = require(794) /* registerSpanErrorInstrumentation */.htmlTreeAsString(startTime.element);
      const obj6 = require(794) /* registerSpanErrorInstrumentation */;
    }
    if (startTime.id) {
      tmp11["lcp.id"] = startTime.id;
    }
    if (startTime.url) {
      tmp11["lcp.url"] = startTime.url;
    }
    if (null != startTime.loadTime) {
      tmp11["lcp.loadTime"] = startTime.loadTime;
    }
    if (null != startTime.renderTime) {
      tmp11["lcp.renderTime"] = startTime.renderTime;
    }
    if (null != startTime.size) {
      tmp11["lcp.size"] = startTime.size;
    }
  }
  const tmp10 = _defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.lcp"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.lcp");
  obj = { name: str3, transaction: currentScope.getScopeData().transactionName, attributes: tmp11, startTime: msToSecResult };
  const result = require(1035) /* extractNetworkProtocol */.startStandaloneWebVitalSpan(obj);
  if (result) {
    result.addEvent("lcp", _defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg0));
    result.end(msToSecResult);
    const tmp17 = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond");
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneLcpSpan };
export const trackLcpAsStandaloneSpan = function trackLcpAsStandaloneSpan(client) {
  const dependencyMap = 0;
  if (obj.supportsWebVital("largest-contentful-paint")) {
    let closure_2 = require(1010) /* triggerHandlers */.addLcpInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        const value = iter.value;
        let closure_0 = tmp;
      }
    }, true);
    const obj2 = require(1010) /* triggerHandlers */;
    const result = require(1035) /* extractNetworkProtocol */.listenForWebVitalReportEvents(client, (arg0, arg1) => {
      outer1_3(c1, closure_0, arg1, arg0);
      callback();
    });
    const obj3 = require(1035) /* extractNetworkProtocol */;
  }
};
