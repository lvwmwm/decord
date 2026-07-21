// Module ID: 1046
// Function ID: 11229
// Name: _trackINP
// Dependencies: [131072, 0, 4294967295, 0, 0]
// Exports: registerInpInteractionListener, startTrackingINP

// Module 1046 (_trackINP)
function _trackINP() {
  return require(dependencyMap[3]).addInpInstrumentationHandler(_onInp);
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = [];
const map = new Map();
const map1 = new Map();
let closure_6 = {};
function _onInp(metric) {
  const require = iter;
  if (null != metric.metric.value) {
    const msToSecResult = require(dependencyMap[1]).msToSec(iter.value);
    if (msToSecResult <= 60) {
      const entries = iter.entries;
      const found = entries.find((duration) => {
        let tmp = duration.duration === iter.value;
        if (tmp) {
          tmp = closure_6[duration.name];
        }
        return tmp;
      });
      if (found) {
        const interactionId = found.interactionId;
        let obj = require(dependencyMap[1]);
        const msToSecResult1 = obj.msToSec(require(dependencyMap[2]).browserPerformanceTimeOrigin() + found.startTime);
        const obj2 = require(dependencyMap[2]);
        const activeSpan = require(dependencyMap[2]).getActiveSpan();
        if (activeSpan) {
          const rootSpan = require(dependencyMap[2]).getRootSpan(activeSpan);
          const obj4 = require(dependencyMap[2]);
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
        const obj5 = require(dependencyMap[2]);
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
          elementName = require(dependencyMap[2]).htmlTreeAsString(found.target);
          const obj7 = require(dependencyMap[2]);
        }
        const obj3 = require(dependencyMap[2]);
        const _HermesInternal = HermesInternal;
        const tmp20 = callback2({}, require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.inp");
        const tmp22 = callback2(callback2({}, require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.inp"), require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.interaction." + closure_6[found.name]);
        const tmp23 = callback2(callback2(callback2({}, require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser.inp"), require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "ui.interaction." + closure_6[found.name]), require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME, found.duration);
        obj = { name: elementName, transaction: transactionName, attributes: tmp23, startTime: msToSecResult1 };
        const result = require(dependencyMap[1]).startStandaloneWebVitalSpan(obj);
        if (result) {
          result.addEvent("inp", callback2(callback2({}, require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond"), require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, iter.value));
          result.end(msToSecResult1 + msToSecResult);
          const tmp27 = callback2({}, require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, "millisecond");
        }
        const obj8 = require(dependencyMap[1]);
      }
    }
    const obj11 = require(dependencyMap[1]);
  }
}

export { _onInp };
export { _trackINP };
export const registerInpInteractionListener = function registerInpInteractionListener() {
  function captureElementFromEvent(target) {
    target = target.target;
    if (target) {
      const _Math = Math;
      const obj = captureElementFromEvent(closure_1[2]);
      const result = map.set(Math.round(target.timeStamp), captureElementFromEvent(closure_1[2]).htmlTreeAsString(target));
      if (map.size > 50) {
        const value = map.keys().next().value;
        if (undefined !== value) {
          map.delete(value);
        }
        const iter = map.keys();
      }
      const htmlTreeAsStringResult = captureElementFromEvent(closure_1[2]).htmlTreeAsString(target);
    }
  }
  const keys = Object.keys(closure_6);
  if (obj.isBrowser()) {
    const item = keys.forEach((arg0) => {
      const WINDOW = captureElementFromEvent(closure_1[4]).WINDOW;
      const listener = WINDOW.addEventListener(arg0, captureElementFromEvent, { allowLinks: null, allowEmojiLinks: null });
    });
  }
  function handleEntries(arg0) {
    const entries = arg0.entries;
    const activeSpan = captureElementFromEvent(closure_1[2]).getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = captureElementFromEvent(closure_1[2]).getRootSpan(activeSpan);
      const obj2 = captureElementFromEvent(closure_1[2]);
    }
    const captureElementFromEvent = rootSpan;
    const item = entries.forEach((interactionId) => {
      let obj = rootSpan(closure_1[3]);
      if (obj.isPerformanceEventTiming(interactionId)) {
        interactionId = interactionId.interactionId;
        if (null != interactionId) {
          if (!map.has(interactionId)) {
            if (interactionId.target) {
              let str = rootSpan(closure_1[2]).htmlTreeAsString(interactionId.target);
              const obj2 = rootSpan(closure_1[2]);
            } else {
              const _Math = Math;
              const rounded = Math.round(interactionId.startTime);
              const value = store.get(rounded);
              let num = -5;
              str = value;
              if (!value) {
                str = store.get(rounded + num);
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
            if (arr.length > 10) {
              map.delete(arr.shift());
            }
            const arr = arr.push(interactionId);
            obj = { span: rootSpan, elementName: str };
            const result = map.set(interactionId, obj);
          }
        }
      }
    });
  }
  const obj = captureElementFromEvent(dependencyMap[2]);
  const result = captureElementFromEvent(dependencyMap[3]).addPerformanceInstrumentationHandler("event", handleEntries);
  const obj2 = captureElementFromEvent(dependencyMap[3]);
  const result1 = captureElementFromEvent(dependencyMap[3]).addPerformanceInstrumentationHandler("first-input", handleEntries);
};
export const startTrackingINP = function startTrackingINP() {
  if (obj.getBrowserPerformanceAPI()) {
    if (obj2.browserPerformanceTimeOrigin()) {
      const callback = _trackINP();
      return () => {
        callback();
      };
    }
    const obj2 = callback(dependencyMap[2]);
  }
  return () => {

  };
};
