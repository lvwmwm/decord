// Module ID: 927
// Function ID: 928
// Name: _sendStandaloneClsSpan
// Dependencies: [924, 899, 900, 682]
// Exports: trackClsAsStandaloneSpan

// Module 927 (_sendStandaloneClsSpan)
import _mod682 from "module_682" /* 682 */;

const require = globalThis.__r;
let closure_0, dependencyMap;

function _sendStandaloneClsSpan(c1, startTime, sentry_pageload_span_id, sentry_report_event) {
  let attributes;
  let msToSecResult;
  if (attributes(900).DEBUG_BUILD) {
    const debug = tmp(682).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending CLS span (" + c1 + ")");
  }
  const tmp5 = startTime;
  if (tmp5) {
    const msToSec = attributes(924).msToSec;
    attributes(924);
    const tmpResult6 = attributes(682);
    const tmp8 = tmpResult6.browserPerformanceTimeOrigin() || 0;
    msToSecResult = msToSec(tmp8 + startTime.startTime);
  } else {
    const tmpResult7 = attributes(682);
    msToSecResult = tmpResult7.timestampInSeconds();
  }
  const tmpResult8 = attributes(682);
  const currentScope = tmpResult8.getCurrentScope();
  let str3 = "Layout shift";
  const transactionName = currentScope.getScopeData().transactionName;
  if (startTime) {
    const first = startTime.sources[0];
    let node;
    const htmlTreeAsString = attributes(682).htmlTreeAsString;
    attributes(682);
    if (first != null) {
      node = first.node;
    }
    str3 = htmlTreeAsString(node);
  }
  attributes = { [tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls", [tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls", [tmp(682).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, "sentry.pageload.span_id": sentry_pageload_span_id, "sentry.report_event": sentry_report_event };
  let sources;
  if (startTime != null) {
    sources = startTime.sources;
  }
  if (sources) {
    const sources1 = startTime.sources;
    const item = sources1.forEach((node, index) => {
      const combined = "cls.source." + index + 1;
      const obj = _mod682;
      obj[combined] = obj.htmlTreeAsString(node.node);
    });
  }
  const tmpResult10 = attributes(924);
  const result = tmpResult10.startStandaloneWebVitalSpan({ name: str3, transaction: transactionName, attributes, startTime: msToSecResult });
  if (result) {
    const obj2 = {};
    obj2[attributes(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "";
    obj2[attributes(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = c1;
    result.addEvent("cls", obj2);
    result.end(msToSecResult);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneClsSpan };
export const trackClsAsStandaloneSpan = function trackClsAsStandaloneSpan(client) {
  let c1;
  dependencyMap = 0;
  let tmp = _require;
  const obj = require("extractNetworkProtocol");
  if (obj.supportsWebVital("layout-shift")) {
    const tmpResult = tmp(899);
    let closure_2 = tmpResult.addClsInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        const value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    const tmpResult2 = tmp(924);
    const result = tmpResult2.listenForWebVitalReportEvents(client, (sentry_report_event, sentry_pageload_span_id) => {
      _sendStandaloneClsSpan(c1, closure_0, sentry_pageload_span_id, sentry_report_event);
      closure_2();
    });
  }
};
