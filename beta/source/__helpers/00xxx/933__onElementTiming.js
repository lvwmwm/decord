// Module ID: 933
// Function ID: 934
// Name: _onElementTiming
// Dependencies: [32, 928, 686, 903]
// Exports: startTrackingElementTiming

// Module 933 (_onElementTiming)
import _mod686 from "module_686" /* 686 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 928 */;
import _slicedToArray from "module_32" /* 32 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _onElementTiming(arg0) {
  const entries = arg0.entries;
  let transactionName;
  const activeSpan = transactionName(686).getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    rootSpan = tmp(686).getRootSpan(activeSpan);
    let tmpResult = tmp(686);
  }
  const tmpResult2 = transactionName(686);
  if (rootSpan) {
    transactionName = tmpResult2.spanToJSON(rootSpan).description;
  } else {
    const currentScope = tmpResult2.getCurrentScope();
    transactionName = currentScope.getScopeData().transactionName;
  }
  const item = entries.forEach((identifier) => {
    if (identifier.identifier) {
      ({ name, renderTime, loadTime } = identifier);
      if (loadTime) {
        const items = [tmp(928).msToSec(loadTime), "load-time"];
        let items2 = items;
        const tmpResult = tmp(928);
      } else if (renderTime) {
        const items1 = [tmp(928).msToSec(renderTime), "render-time"];
        items2 = items1;
        const tmpResult3 = tmp(928);
      } else {
        items2 = [tmp(686).timestampInSeconds(), "entry-emission"];
        const tmpResult4 = tmp(686);
      }
      [startTime, obj["sentry.span_start_time_source"]] = items2;
      if ("image-paint" === name) {
        let num4 = renderTime;
        if (renderTime == null) {
          num4 = 0;
        }
        let num5 = loadTime;
        if (loadTime == null) {
          num5 = 0;
        }
        const num3 = extractNetworkProtocol.msToSec(Math.max(0, num4 - num5));
      }
      const obj = {};
      obj[_mod686.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.elementtiming";
      obj[_mod686.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.elementtiming";
      obj[_mod686.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
      obj["sentry.transaction_name"] = transactionName;
      ({ id: obj5["element.id"], element } = identifier);
      let str8;
      if (element != null) {
        if (element.tagName != null) {
          str8 = str9.toLowerCase();
        }
      }
      if (!str8) {
        str8 = "unknown";
      }
      obj["element.type"] = str8;
      let combined;
      if (identifier.naturalWidth) {
        if (identifier.naturalHeight) {
          const _HermesInternal = HermesInternal;
          combined = "" + identifier.naturalWidth + "x" + identifier.naturalHeight;
        }
      }
      obj["element.size"] = combined;
      obj["element.render_time"] = renderTime;
      obj["element.load_time"] = loadTime;
      obj["element.url"] = identifier.url || undefined;
      obj["element.identifier"] = identifier.identifier;
      obj["element.paint_type"] = name;
      const obj2 = { name: null, attributes: null, startTime: null, onlyIfParent: true };
      const _HermesInternal2 = HermesInternal;
      obj2.name = "element[" + identifier.identifier + "]";
      obj2.attributes = obj;
      obj2.startTime = startTime;
      _mod686.startSpan(obj2, (end) => {
        end.end(first + num3);
      });
    }
  });
}

export { _onElementTiming };
export const startTrackingElementTiming = function startTrackingElementTiming() {
  if (obj.getBrowserPerformanceAPI()) {
    if (tmpResult.browserPerformanceTimeOrigin()) {
      let fn = tmp(903).addPerformanceInstrumentationHandler("element", _onElementTiming);
      const tmpResult2 = tmp(903);
    }
    return fn;
  }
  fn = () => {

  };
};
