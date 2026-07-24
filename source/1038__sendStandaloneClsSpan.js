// Module ID: 1038
// Function ID: 11178
// Name: _sendStandaloneClsSpan
// Dependencies: [77, 1035, 1010, 1011, 794]
// Exports: trackClsAsStandaloneSpan

// Module 1038 (_sendStandaloneClsSpan)
import _defineProperty from "_defineProperty";

function _sendStandaloneClsSpan(arg0, startTime) {
  if (require(1011).DEBUG_BUILD) {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending CLS span (" + arg0 + ")");
  }
  if (startTime) {
    let tmp5Result = tmp5(1035);
    tmp5Result = tmp5(794);
    let msToSecResult = tmp5Result.msToSec((tmp5Result.browserPerformanceTimeOrigin() || 0) + startTime.startTime);
    const tmp8 = tmp5Result.browserPerformanceTimeOrigin() || 0;
  } else {
    msToSecResult = tmp5(794).timestampInSeconds();
    const tmp5Result1 = tmp5(794);
  }
  const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
  let str3 = "Layout shift";
  if (startTime) {
    const first = startTime.sources[0];
    let node;
    if (null != first) {
      node = first.node;
    }
    str3 = require(794) /* registerSpanErrorInstrumentation */.htmlTreeAsString(node);
    const obj6 = require(794) /* registerSpanErrorInstrumentation */;
  }
  const obj4 = require(794) /* registerSpanErrorInstrumentation */;
  const tmp14 = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.cls");
  const tmp16 = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.cls"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.cls"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, 0), "sentry.pageload.span_id", arg2), "sentry.report_event", arg3);
  require = tmp16;
  if (tmp17) {
    const sources = startTime.sources;
    const item = sources.forEach((node) => {
      const combined = "cls.source." + arg1 + 1;
      tmp16[combined] = tmp16(outer1_1[4]).htmlTreeAsString(node.node);
    });
  }
  const tmp15 = _defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.cls"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.webvital.cls");
  tmp17 = null != startTime && startTime.sources;
  const obj = { name: str3, transaction: currentScope.getScopeData().transactionName, attributes: tmp16, startTime: msToSecResult };
  const result = require(1035) /* extractNetworkProtocol */.startStandaloneWebVitalSpan(obj);
  if (result) {
    result.addEvent("cls", _defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, ""), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, arg0));
    result.end(msToSecResult);
    const tmp22 = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "");
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneClsSpan };
export const trackClsAsStandaloneSpan = function trackClsAsStandaloneSpan(client) {
  const dependencyMap = 0;
  if (obj.supportsWebVital("layout-shift")) {
    let closure_2 = require(1010) /* triggerHandlers */.addClsInstrumentationHandler((metric) => {
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
