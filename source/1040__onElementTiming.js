// Module ID: 1040
// Function ID: 11189
// Name: _onElementTiming
// Dependencies: [77, 57, 1035, 794, 1010]
// Exports: startTrackingElementTiming

// Module 1040 (_onElementTiming)
import _defineProperty from "_defineProperty";
import _slicedToArray from "_slicedToArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _onElementTiming(arg0) {
  const entries = arg0.entries;
  const activeSpan = transactionName(794).getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    rootSpan = transactionName(794).getRootSpan(activeSpan);
    const obj2 = transactionName(794);
  }
  const obj3 = transactionName(794);
  if (rootSpan) {
    transactionName = obj3.spanToJSON(rootSpan).description;
  } else {
    const currentScope = obj3.getCurrentScope();
    transactionName = currentScope.getScopeData().transactionName;
  }
  const item = entries.forEach((identifier) => {
    let loadTime;
    let name;
    let renderTime;
    if (identifier.identifier) {
      ({ name, renderTime, loadTime } = identifier);
      if (loadTime) {
        let tmpResult = tmp(tmp2[2]);
        const items = [tmpResult.msToSec(loadTime), "load-time"];
        let items2 = items;
      } else if (renderTime) {
        tmpResult = tmp(tmp2[2]);
        const items1 = [tmpResult.msToSec(renderTime), "render-time"];
        items2 = items1;
      } else {
        items2 = [tmp(tmp2[3]).timestampInSeconds(), "entry-emission"];
        const tmpResult1 = tmp(tmp2[3]);
      }
      const tmp4 = outer1_3(items2, 2);
      const first = tmp4[0];
      let num7 = 0;
      if ("image-paint" === name) {
        let num8 = 0;
        if (null != renderTime) {
          num8 = renderTime;
        }
        let num9 = 0;
        if (null != loadTime) {
          num9 = loadTime;
        }
        num7 = transactionName(outer1_1[2]).msToSec(Math.max(0, num8 - num9));
        const obj4 = transactionName(outer1_1[2]);
      }
      let obj = {};
      const tmp13 = outer1_2(obj, transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.elementtiming");
      const element = identifier.element;
      let str11;
      const tmp14 = outer1_2(outer1_2(obj, transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.elementtiming"), transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.elementtiming");
      if (null != element) {
        if (null != element.tagName) {
          str11 = str12.toLowerCase();
        }
      }
      if (!str11) {
        str11 = "unknown";
      }
      let combined;
      let tmp10Result = tmp10(outer1_2(outer1_2(outer1_2(outer1_2(outer1_2(outer1_2(obj, transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.elementtiming"), transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.elementtiming"), transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component"), "sentry.span_start_time_source", tmp4[1]), "sentry.transaction_name", first), "element.id", identifier.id), "element.type", str11);
      if (identifier.naturalWidth) {
        if (identifier.naturalHeight) {
          const _HermesInternal = HermesInternal;
          combined = "" + identifier.naturalWidth + "x" + identifier.naturalHeight;
        }
      }
      tmp10Result = tmp10(tmp10(tmp10(tmp10Result, "element.size", combined), "element.render_time", renderTime), "element.load_time", loadTime);
      const tmp16 = outer1_2(outer1_2(outer1_2(outer1_2(outer1_2(outer1_2(obj, transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.elementtiming"), transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.elementtiming"), transactionName(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component"), "sentry.span_start_time_source", tmp4[1]), "sentry.transaction_name", first), "element.id", identifier.id);
      const tmp23 = identifier.url || undefined;
      const tmp22Result = outer1_2(outer1_2(outer1_2(obj, "element.url", identifier.url || undefined), "element.identifier", identifier.identifier), "element.paint_type", name);
      obj = {};
      const _HermesInternal2 = HermesInternal;
      obj.name = "element[" + identifier.identifier + "]";
      obj.attributes = tmp22Result;
      obj.startTime = first;
      obj.onlyIfParent = true;
      transactionName(outer1_1[3]).startSpan(obj, (end) => {
        end.end(first + num7);
      });
      const obj6 = transactionName(outer1_1[3]);
    }
  });
}

export { _onElementTiming };
export const startTrackingElementTiming = function startTrackingElementTiming() {
  if (obj.getBrowserPerformanceAPI()) {
    if (obj2.browserPerformanceTimeOrigin()) {
      let fn = require(1010) /* triggerHandlers */.addPerformanceInstrumentationHandler("element", _onElementTiming);
      const obj3 = require(1010) /* triggerHandlers */;
    }
    return fn;
  }
  fn = () => {

  };
};
