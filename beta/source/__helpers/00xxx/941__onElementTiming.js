// Module ID: 941
// Function ID: 942
// Name: _onElementTiming
// Dependencies: [32, 936, 694, 911]
// Exports: startTrackingElementTiming

// Module 941 (_onElementTiming)
import _mod694 from "module_694" /* 694 */;
import _mod911 from "module_911" /* 911 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 936 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _onElementTiming(arg0) {
  const entries = arg0.entries;
  let transactionName;
  let obj = transactionName(694);
  const activeSpan = obj.getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    let tmpResult = tmp(694);
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  const tmpResult2 = transactionName(694);
  if (rootSpan) {
    transactionName = tmpResult2.spanToJSON(rootSpan).description;
  } else {
    const currentScope = tmpResult2.getCurrentScope();
    transactionName = currentScope.getScopeData().transactionName;
  }
  const item = entries.forEach((identifier) => {
    let combined;
    let element;
    let first;
    let loadTime;
    let name;
    let renderTime;
    let str8;
    let tmp6;
    if (identifier.identifier) {
      let items2;
      ({ name, renderTime, loadTime } = identifier);
      if (loadTime) {
        const items = [, ];
        const tmpResult = extractNetworkProtocol;
        items[0] = tmpResult.msToSec(loadTime);
        items[1] = "load-time";
        items2 = items;
      } else if (renderTime) {
        const items1 = [, ];
        const tmpResult3 = extractNetworkProtocol;
        items1[0] = tmpResult3.msToSec(renderTime);
        items1[1] = "render-time";
        items2 = items1;
      } else {
        items2 = [, ];
        const tmpResult4 = _mod694;
        items2[0] = tmpResult4.timestampInSeconds();
        items2[1] = "entry-emission";
      }
      [first, tmp6] = items2;
      let num3 = 0;
      if ("image-paint" === name) {
        let num4 = renderTime;
        const msToSec = extractNetworkProtocol.msToSec;
        const _Math = Math;
        extractNetworkProtocol;
        if (renderTime == null) {
          num4 = 0;
        }
        let num5 = loadTime;
        if (loadTime == null) {
          num5 = 0;
        }
        num3 = msToSec(max(0, num4 - num5));
      }
      const obj = { "sentry.span_start_time_source": tmp6, "sentry.transaction_name": transactionName, "element.type": str8, "element.size": combined, "element.render_time": renderTime, "element.load_time": loadTime, "element.url": identifier.url || undefined, "element.identifier": identifier.identifier, "element.paint_type": name };
      obj[_mod694.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.elementtiming";
      obj[_mod694.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.elementtiming";
      obj[_mod694.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
      ({ id: obj4["element.id"], element } = identifier);
      str8 = undefined;
      if (element != null) {
        if (element.tagName != null) {
          str8 = str9.toLowerCase();
        }
      }
      if (!str8) {
        str8 = "unknown";
      }
      combined = undefined;
      if (identifier.naturalWidth) {
        if (identifier.naturalHeight) {
          const _HermesInternal = HermesInternal;
          combined = "" + identifier.naturalWidth + "x" + identifier.naturalHeight;
        }
      }
      const _HermesInternal2 = HermesInternal;
      const obj2 = { name: "element[" + identifier.identifier + "]", attributes: obj, startTime: first, onlyIfParent: true };
      const startSpan = _mod694.startSpan;
      _mod694;
      startSpan(obj2, (end) => {
        end.end(first + num3);
      });
    }
  });
}

export { _onElementTiming };
export const startTrackingElementTiming = function startTrackingElementTiming() {
  const obj = extractNetworkProtocol;
  if (obj.getBrowserPerformanceAPI()) {
    let fn;
    const tmpResult = _mod694;
    if (tmpResult.browserPerformanceTimeOrigin()) {
      const tmpResult2 = _mod911;
      fn = tmpResult2.addPerformanceInstrumentationHandler("element", _onElementTiming);
    }
    return fn;
  }
  fn = () => {

  };
};
