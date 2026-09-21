// Module ID: 930
// Function ID: 931
// Name: _sendStandaloneLcpSpan
// Dependencies: [928, 903, 904, 686]
// Exports: trackLcpAsStandaloneSpan

// Module 930 (_sendStandaloneLcpSpan)
import _mod686 from "module_686" /* 686 */;
import _mod904 from "module_904" /* 904 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 928 */;

require = arg1;
let dependencyMap = arg6;
function _sendStandaloneLcpSpan(c1, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (_mod904.DEBUG_BUILD) {
    const debug = tmp(686).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending LCP span (" + c1 + ")");
  }
  const tmpResult = extractNetworkProtocol;
  const tmpResult6 = _mod686;
  let num;
  if (startTime != null) {
    num = startTime.startTime;
  }
  if (!num) {
    num = 0;
  }
  const msToSecResult = tmpResult.msToSec((_mod686.browserPerformanceTimeOrigin() || 0) + num);
  const tmp5 = _mod686.browserPerformanceTimeOrigin() || 0;
  const currentScope = _mod686.getCurrentScope();
  let str3 = "Largest contentful paint";
  if (startTime) {
    str3 = tmp(686).htmlTreeAsString(startTime.element);
    const tmpResult8 = tmp(686);
  }
  const obj = { [_mod686.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp", [_mod686.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp", [_mod686.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
  if (startTime) {
    if (startTime.element) {
      obj["lcp.element"] = tmp(686).htmlTreeAsString(startTime.element);
      const tmpResult9 = tmp(686);
    }
    if (startTime.id) {
      obj["lcp.id"] = startTime.id;
    }
    if (startTime.url) {
      obj["lcp.url"] = startTime.url;
    }
    if (null != startTime.loadTime) {
      obj["lcp.loadTime"] = startTime.loadTime;
    }
    if (null != startTime.renderTime) {
      obj["lcp.renderTime"] = startTime.renderTime;
    }
    if (null != startTime.size) {
      obj["lcp.size"] = startTime.size;
    }
  }
  const tmpResult7 = _mod686;
  const result = extractNetworkProtocol.startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes: obj, startTime: msToSecResult });
  if (result) {
    const obj2 = {};
    obj2[tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    obj2[tmp(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = c1;
    result.addEvent("lcp", obj2);
    result.end(msToSecResult);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneLcpSpan };
export const trackLcpAsStandaloneSpan = function trackLcpAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("largest-contentful-paint")) {
    closure_2 = tmp(903).addLcpInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    const tmpResult = tmp(903);
    const result = tmp(928).listenForWebVitalReportEvents(client, (sentry_report_event, sentry_pageload_span_id) => {
      _sendStandaloneLcpSpan(c1, closure_0, sentry_pageload_span_id, sentry_report_event);
      closure_2();
    });
    const tmpResult2 = tmp(928);
  }
};
