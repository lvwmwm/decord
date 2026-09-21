// Module ID: 931
// Function ID: 932
// Name: _sendStandaloneClsSpan
// Dependencies: [928, 903, 904, 686]
// Exports: trackClsAsStandaloneSpan

// Module 931 (_sendStandaloneClsSpan)
import _mod686 from "module_686" /* 686 */;

require = arg1;
let dependencyMap = arg6;
function _sendStandaloneClsSpan(c1, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (attributes(904).DEBUG_BUILD) {
    const debug = tmp(686).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending CLS span (" + c1 + ")");
  }
  if (startTime) {
    const tmpResult = tmp(928);
    const tmpResult6 = tmp(686);
    let msToSecResult = tmpResult.msToSec((tmp(686).browserPerformanceTimeOrigin() || 0) + startTime.startTime);
    const tmp6 = tmp(686).browserPerformanceTimeOrigin() || 0;
  } else {
    msToSecResult = tmp(686).timestampInSeconds();
    const tmpResult7 = tmp(686);
  }
  const currentScope = attributes(686).getCurrentScope();
  let str3 = "Layout shift";
  if (startTime) {
    const first = startTime.sources[0];
    let node;
    if (first != null) {
      node = first.node;
    }
    str3 = tmp(686).htmlTreeAsString(node);
    const tmpResult9 = tmp(686);
  }
  attributes = { [tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls", [tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls", [tmp(686).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
  let sources;
  if (startTime != null) {
    sources = startTime.sources;
  }
  if (sources) {
    const sources1 = startTime.sources;
    const item = sources1.forEach((node, index) => {
      const combined = "cls.source." + index + 1;
      const obj = _mod686;
      obj[combined] = obj.htmlTreeAsString(node.node);
    });
  }
  const tmpResult8 = attributes(686);
  const result = attributes(928).startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes, startTime: msToSecResult });
  if (result) {
    const obj2 = {};
    obj2[tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "";
    obj2[tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = c1;
    result.addEvent("cls", obj2);
    result.end(msToSecResult);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneClsSpan };
export const trackClsAsStandaloneSpan = function trackClsAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("layout-shift")) {
    closure_2 = tmp(903).addClsInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    const tmpResult = tmp(903);
    const result = tmp(928).listenForWebVitalReportEvents(client, (sentry_report_event, sentry_pageload_span_id) => {
      _sendStandaloneClsSpan(c1, closure_0, sentry_pageload_span_id, sentry_report_event);
      closure_2();
    });
    const tmpResult2 = tmp(928);
  }
};
