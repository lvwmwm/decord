// Module ID: 947
// Function ID: 948
// Name: _onInp
// Dependencies: [936, 694, 911, 916]
// Exports: _trackINP, registerInpInteractionListener, startTrackingINP

// Module 947 (_onInp)
import _mod694 from "module_694" /* 694 */;
import _mod911 from "module_911" /* 911 */;
import _mod916 from "module_916" /* 916 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 936 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = [];
const map = new Map();
const map1 = new Map();
let closure_5 = { click: "click", pointerdown: "click", pointerup: "click", mousedown: "click", mouseup: "click", touchstart: "click", touchend: "click", mouseover: "hover", mouseout: "hover", mouseenter: "hover", mouseleave: "hover", pointerover: "hover", pointerout: "hover", pointerenter: "hover", pointerleave: "hover", dragstart: "drag", dragend: "drag", drag: "drag", dragenter: "drag", dragleave: "drag", dragover: "drag", drop: "drag", keydown: "press", keyup: "press", keypress: "press", input: "press" };
function _onInp(metric) {
  const iter = metric.metric;
  if (null != iter.value) {
    const obj12 = iter(936);
    const msToSecResult = obj12.msToSec(iter.value);
    if (msToSecResult <= 60) {
      const entries = iter.entries;
      const found = entries.find((duration) => duration.duration === iter.value && closure_5[duration.name]);
      if (found) {
        let rootSpan;
        let transactionName;
        const interactionId = found.interactionId;
        const tmp2 = closure_5[found.name];
        const msToSec = iter(936).msToSec;
        iter(936);
        const tmp14Result7 = iter(694);
        const msToSecResult1 = msToSec(tmp14Result7.browserPerformanceTimeOrigin() + found.startTime);
        const tmp14Result8 = iter(694);
        const activeSpan = tmp14Result8.getActiveSpan();
        if (activeSpan) {
          const tmp14Result9 = iter(694);
          rootSpan = tmp14Result9.getRootSpan(activeSpan);
        }
        let value;
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
        const tmp14Result10 = iter(694);
        if (span) {
          transactionName = tmp14Result10.spanToJSON(span).description;
        } else {
          const currentScope = tmp14Result10.getCurrentScope();
          transactionName = currentScope.getScopeData().transactionName;
        }
        let elementName;
        if (value != null) {
          elementName = value.elementName;
        }
        if (!elementName) {
          const tmp14Result11 = iter(694);
          elementName = tmp14Result11.htmlTreeAsString(found.target);
        }
        const obj = {};
        obj[iter(694).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.http.browser.inp";
        const _HermesInternal = HermesInternal;
        obj[iter(694).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.interaction." + tmp2;
        obj[iter(694).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME] = found.duration;
        const obj2 = { name: elementName, transaction: transactionName, attributes: obj, startTime: msToSecResult1 };
        const tmp14Result12 = iter(936);
        const result = tmp14Result12.startStandaloneWebVitalSpan(obj2);
        if (result) {
          const obj3 = {};
          obj3[iter(694).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
          obj3[iter(694).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = iter.value;
          result.addEvent("inp", obj3);
          result.end(msToSecResult1 + msToSecResult);
        }
      }
    }
  }
}

export { _onInp };
export const _trackINP = function _trackINP() {
  const obj = _mod911;
  return obj.addInpInstrumentationHandler(_onInp);
};
export const registerInpInteractionListener = function registerInpInteractionListener() {
  let length;
  function captureElementFromEvent(dependencyMap) {
    const target = dependencyMap.target;
    if (target) {
      const _Math = Math;
      const obj = captureElementFromEvent(dependencyMap[1]);
      const htmlTreeAsStringResult = obj.htmlTreeAsString(target);
      const result = map1.set(Math.round(dependencyMap.timeStamp), htmlTreeAsStringResult);
      if (map1.size > 50) {
        const iter = map1.keys();
        const value = iter.next().value;
        if (undefined !== value) {
          map1.delete(value);
        }
      }
    }
  }
  const keys = Object.keys(closure_5);
  let tmp = captureElementFromEvent;
  let tmp2 = dependencyMap;
  let obj = captureElementFromEvent(694);
  if (obj.isBrowser()) {
    let item = keys.forEach((item) => {
      const WINDOW = _mod916.WINDOW;
      const listener = WINDOW.addEventListener(item, captureElementFromEvent, { capture: true, passive: true });
    });
  }
  function handleEntries(arg0) {
    const entries = arg0.entries;
    let rootSpan;
    let tmp = rootSpan;
    let tmp2 = closure_1;
    let obj = rootSpan(closure_1[1]);
    const activeSpan = obj.getActiveSpan();
    rootSpan = activeSpan;
    if (rootSpan) {
      let tmpResult = tmp(tmp2[1]);
      rootSpan = tmpResult.getRootSpan(activeSpan);
    }
    const item = entries.forEach((interactionId) => {
      const obj = captureElementFromEvent(dependencyMap[2]);
      const tmp = captureElementFromEvent;
      const tmp2 = dependencyMap;
      if (obj.isPerformanceEventTiming(interactionId)) {
        interactionId = interactionId.interactionId;
        if (null != interactionId) {
          if (!map.has(interactionId)) {
            let str;
            if (interactionId.target) {
              const tmpResult = tmp(tmp2[1]);
              str = tmpResult.htmlTreeAsString(interactionId.target);
            } else {
              const _Math = Math;
              const rounded = Math.round(interactionId.startTime);
              const value = map1.get(rounded);
              let num = -5;
              str = value;
              if (!str) {
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
              map.delete(length.shift());
            }
            length.push(interactionId);
            const obj2 = { span: rootSpan, elementName: str };
            const result = map.set(interactionId, obj2);
          }
        }
      }
    });
  }
  let tmpResult = tmp(911);
  let result = tmpResult.addPerformanceInstrumentationHandler("event", handleEntries);
  const tmpResult2 = tmp(911);
  const result1 = tmpResult2.addPerformanceInstrumentationHandler("first-input", handleEntries);
};
export const startTrackingINP = function startTrackingINP() {
  const obj = extractNetworkProtocol;
  if (obj.getBrowserPerformanceAPI()) {
    const tmpResult = _mod694;
    if (tmpResult.browserPerformanceTimeOrigin()) {
      const tmpResult2 = _mod911;
      let closure_0 = tmpResult2.addInpInstrumentationHandler(_onInp);
      return () => {
        closure_0();
      };
    }
  }
  return () => {

  };
};
