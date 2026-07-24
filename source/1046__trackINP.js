// Module ID: 1046
// Function ID: 11231
// Name: _trackINP
// Dependencies: [77, 1035, 794, 1010, 1015]
// Exports: registerInpInteractionListener, startTrackingINP

// Module 1046 (_trackINP)
import _defineProperty from "_defineProperty";

function _trackINP() {
  return require(1010) /* triggerHandlers */.addInpInstrumentationHandler(_onInp);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = [];
const map = new Map();
const map1 = new Map();
let closure_6 = { click: "click", pointerdown: "click", pointerup: "click", mousedown: "click", mouseup: "click", touchstart: "click", touchend: "click", mouseover: "hover", mouseout: "hover", mouseenter: "hover", mouseleave: "hover", pointerover: "hover", pointerout: "hover", pointerenter: "hover", pointerleave: "hover", dragstart: "drag", dragend: "drag", drag: "drag", dragenter: "drag", dragleave: "drag", dragover: "drag", drop: "drag", keydown: "press", keyup: "press", keypress: "press", input: "press" };
function _onInp(metric) {
  const iter = metric.metric;
  if (null != iter.value) {
    const msToSecResult = iter(1035).msToSec(iter.value);
    if (msToSecResult <= 60) {
      const entries = iter.entries;
      const found = entries.find((duration) => {
        let tmp = duration.duration === iter.value;
        if (tmp) {
          tmp = outer1_6[duration.name];
        }
        return tmp;
      });
      if (found) {
        const interactionId = found.interactionId;
        let obj = iter(1035);
        const msToSecResult1 = obj.msToSec(iter(794).browserPerformanceTimeOrigin() + found.startTime);
        const obj2 = iter(794);
        const activeSpan = iter(794).getActiveSpan();
        if (activeSpan) {
          const rootSpan = iter(794).getRootSpan(activeSpan);
          const obj4 = iter(794);
        }
        let value;
        if (null != interactionId) {
          value = map.get(interactionId);
        }
        let span;
        if (null != value) {
          span = value.span;
        }
        if (!span) {
          span = rootSpan;
        }
        const obj5 = iter(794);
        if (span) {
          let transactionName = obj5.spanToJSON(span).description;
        } else {
          const currentScope = obj5.getCurrentScope();
          transactionName = currentScope.getScopeData().transactionName;
        }
        let elementName;
        if (null != value) {
          elementName = value.elementName;
        }
        if (!elementName) {
          elementName = iter(794).htmlTreeAsString(found.target);
          const obj7 = iter(794);
        }
        const obj3 = iter(794);
        const _HermesInternal = HermesInternal;
        const tmp20 = _defineProperty({}, iter(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.inp");
        const tmp22 = _defineProperty(_defineProperty({}, iter(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.inp"), iter(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.interaction." + table[found.name]);
        const tmp23 = _defineProperty(_defineProperty(_defineProperty({}, iter(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.inp"), iter(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.interaction." + table[found.name]), iter(794).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, found.duration);
        obj = { name: elementName, transaction: transactionName, attributes: tmp23, startTime: msToSecResult1 };
        const result = iter(1035).startStandaloneWebVitalSpan(obj);
        if (result) {
          result.addEvent("inp", _defineProperty(_defineProperty({}, iter(794).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond"), iter(794).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, iter.value));
          result.end(msToSecResult1 + msToSecResult);
          const tmp27 = _defineProperty({}, iter(794).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond");
        }
        const obj8 = iter(1035);
      }
    }
    const obj11 = iter(1035);
  }
}

export { _onInp };
export { _trackINP };
export const registerInpInteractionListener = function registerInpInteractionListener() {
  function captureElementFromEvent(target) {
    target = target.target;
    if (target) {
      const _Math = Math;
      const obj = captureElementFromEvent(outer1_1[2]);
      const result = outer1_5.set(Math.round(target.timeStamp), captureElementFromEvent(outer1_1[2]).htmlTreeAsString(target));
      if (outer1_5.size > 50) {
        const value = outer1_5.keys().next().value;
        if (undefined !== value) {
          outer1_5.delete(value);
        }
        const iter = outer1_5.keys();
      }
      const htmlTreeAsStringResult = captureElementFromEvent(outer1_1[2]).htmlTreeAsString(target);
    }
  }
  const keys = Object.keys(closure_6);
  if (obj.isBrowser()) {
    let item = keys.forEach((arg0) => {
      const WINDOW = captureElementFromEvent(outer1_1[4]).WINDOW;
      const listener = WINDOW.addEventListener(arg0, captureElementFromEvent, { capture: true, passive: true });
    });
  }
  function handleEntries(arg0) {
    const entries = arg0.entries;
    const activeSpan = captureElementFromEvent(outer1_1[2]).getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = captureElementFromEvent(outer1_1[2]).getRootSpan(activeSpan);
      let obj2 = captureElementFromEvent(outer1_1[2]);
    }
    const item = entries.forEach((interactionId) => {
      let obj = captureElementFromEvent(outer2_1[3]);
      if (obj.isPerformanceEventTiming(interactionId)) {
        interactionId = interactionId.interactionId;
        if (null != interactionId) {
          if (!outer2_4.has(interactionId)) {
            if (interactionId.target) {
              let str = captureElementFromEvent(outer2_1[2]).htmlTreeAsString(interactionId.target);
              const obj2 = captureElementFromEvent(outer2_1[2]);
            } else {
              const _Math = Math;
              const rounded = Math.round(interactionId.startTime);
              const value = outer2_5.get(rounded);
              let num = -5;
              str = value;
              if (!value) {
                str = outer2_5.get(rounded + num);
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
            if (outer2_3.length > 10) {
              outer2_4.delete(outer2_3.shift());
            }
            outer2_3.push(interactionId);
            obj = { span: rootSpan, elementName: str };
            const result = outer2_4.set(interactionId, obj);
          }
        }
      }
    });
  }
  obj = captureElementFromEvent(794);
  let result = captureElementFromEvent(1010).addPerformanceInstrumentationHandler("event", handleEntries);
  let obj2 = captureElementFromEvent(1010);
  const result1 = captureElementFromEvent(1010).addPerformanceInstrumentationHandler("first-input", handleEntries);
};
export const startTrackingINP = function startTrackingINP() {
  if (obj.getBrowserPerformanceAPI()) {
    if (obj2.browserPerformanceTimeOrigin()) {
      const _require = _trackINP();
      return () => {
        callback();
      };
    }
    obj2 = _require(794);
  }
  return () => {

  };
};
