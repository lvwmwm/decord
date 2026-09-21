// Module ID: 939
// Function ID: 940
// Name: _onInp
// Dependencies: [928, 686, 903, 908]
// Exports: _trackINP, registerInpInteractionListener, startTrackingINP

// Module 939 (_onInp)
import _mod903 from "module_903" /* 903 */;
import _mod908 from "module_908" /* 908 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = [];
const map = new Map();
const map1 = new Map();
let closure_5 = { click: "click", pointerdown: "click", pointerup: "click", mousedown: "click", mouseup: "click", touchstart: "click", touchend: "click", mouseover: "hover", mouseout: "hover", mouseenter: "hover", mouseleave: "hover", pointerover: "hover", pointerout: "hover", pointerenter: "hover", pointerleave: "hover", dragstart: "drag", dragend: "drag", drag: "drag", dragenter: "drag", dragleave: "drag", dragover: "drag", drop: "drag", keydown: "press", keyup: "press", keypress: "press", input: "press" };
function _onInp(metric) {
  const iter = metric.metric;
  if (null != iter.value) {
    const msToSecResult = iter(928).msToSec(iter.value);
    if (msToSecResult <= 60) {
      const entries = iter.entries;
      const found = entries.find((duration) => {
        let tmp = duration.duration === iter.value;
        if (tmp) {
          tmp = closure_5[duration.name];
        }
        return tmp;
      });
      if (found) {
        const interactionId = found.interactionId;
        const tmp12Result = tmp12(928);
        const msToSecResult1 = tmp12Result.msToSec(tmp12(686).browserPerformanceTimeOrigin() + found.startTime);
        const tmp12Result7 = tmp12(686);
        const activeSpan = tmp12(686).getActiveSpan();
        if (activeSpan) {
          const rootSpan = tmp12(686).getRootSpan(activeSpan);
          const tmp12Result9 = tmp12(686);
        }
        value = undefined;
        if (null != interactionId) {
          value = map.get(interactionId);
        }
        let span;
        if (value != null) {
          span = value.span;
        }
        if (!span) {
          span = rootSpan;
        }
        const tmp12Result10 = tmp12(686);
        if (span) {
          let transactionName = tmp12Result10.spanToJSON(span).description;
        } else {
          const currentScope = tmp12Result10.getCurrentScope();
          transactionName = currentScope.getScopeData().transactionName;
        }
        let elementName;
        if (value != null) {
          elementName = value.elementName;
        }
        if (!elementName) {
          elementName = tmp12(686).htmlTreeAsString(found.target);
          const tmp12Result11 = tmp12(686);
        }
        const obj = {};
        obj[tmp12(686).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.http.browser.inp";
        const _HermesInternal = HermesInternal;
        obj[tmp12(686).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.interaction." + closure_5[found.name];
        obj[tmp12(686).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME] = found.duration;
        const tmp12Result8 = tmp12(686);
        const obj2 = { name: elementName, transaction: transactionName, attributes: obj, startTime: msToSecResult1 };
        const result = tmp12(928).startStandaloneWebVitalSpan(obj2);
        if (result) {
          const obj3 = {};
          obj3[tmp12(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
          obj3[tmp12(686).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = iter.value;
          result.addEvent("inp", obj3);
          result.end(msToSecResult1 + msToSecResult);
        }
        const tmp12Result12 = tmp12(928);
      }
    }
    const obj13 = iter(928);
  }
}

export { _onInp };
export const _trackINP = function _trackINP() {
  return _mod903.addInpInstrumentationHandler(_onInp);
};
export const registerInpInteractionListener = function registerInpInteractionListener() {
  function captureElementFromEvent(dependencyMap) {
    const target = dependencyMap.target;
    if (target) {
      const _Math = Math;
      const obj = captureElementFromEvent(686);
      const result = map1.set(Math.round(dependencyMap.timeStamp), captureElementFromEvent(686).htmlTreeAsString(target));
      if (map1.size > 50) {
        value = obj2.keys().next().value;
        if (undefined !== value) {
          obj2.delete(value);
        }
        const iter = obj2.keys();
      }
      const htmlTreeAsStringResult = captureElementFromEvent(686).htmlTreeAsString(target);
    }
  }
  const keys = Object.keys(closure_5);
  if (obj.isBrowser()) {
    let item = keys.forEach((item) => {
      const WINDOW = _mod908.WINDOW;
      const listener = WINDOW.addEventListener(item, captureElementFromEvent, { capture: true, passive: true });
    });
  }
  function handleEntries(arg0) {
    const entries = arg0.entries;
    let rootSpan;
    const activeSpan = rootSpan(686).getActiveSpan();
    rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = rootSpan(686).getRootSpan(activeSpan);
      let tmpResult = rootSpan(686);
    }
    const item = entries.forEach((interactionId) => {
      if (obj.isPerformanceEventTiming(interactionId)) {
        interactionId = interactionId.interactionId;
        if (null != interactionId) {
          if (!map.has(interactionId)) {
            if (interactionId.target) {
              let str = captureElementFromEvent(686).htmlTreeAsString(interactionId.target);
              const tmpResult = captureElementFromEvent(686);
            } else {
              const _Math = Math;
              const rounded = Math.round(interactionId.startTime);
              value = map1.get(rounded);
              let num = -5;
              str = value;
              if (!value) {
                str = map1.get(rounded + num);
                while (!str) {
                  num = num + 1;
                  str = value;
                  if (num > 5) {
                    break;
                  }
                }
              }
              if (!str) {
                str = "<unknown>";
              }
            }
            if (length.length > 10) {
              map.delete(arr.shift());
            }
            length.push(interactionId);
            const obj2 = { span: rootSpan, elementName: str };
            const result = map.set(interactionId, obj2);
          }
        }
      }
    });
  }
  obj = captureElementFromEvent(686);
  let result = captureElementFromEvent(903).addPerformanceInstrumentationHandler("event", handleEntries);
  let tmpResult = captureElementFromEvent(903);
  const result1 = captureElementFromEvent(903).addPerformanceInstrumentationHandler("first-input", handleEntries);
};
export const startTrackingINP = function startTrackingINP() {
  if (obj.getBrowserPerformanceAPI()) {
    if (tmpResult.browserPerformanceTimeOrigin()) {
      closure_0 = tmp(903).addInpInstrumentationHandler(_onInp);
      return () => {
        closure_0();
      };
    }
    tmpResult = tmp(686);
  }
  return () => {

  };
};
