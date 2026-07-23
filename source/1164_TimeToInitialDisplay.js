// Module ID: 1164
// Function ID: 13210
// Name: TimeToInitialDisplay
// Dependencies: [57, 31, 794, 1165, 1134, 1132, 977]
// Exports: createTimeToFullDisplay, createTimeToInitialDisplay, updateInitialDisplaySpan

// Module 1164 (TimeToInitialDisplay)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useState } from "result";

let require = arg1;
class TimeToInitialDisplay {
  constructor(arg0) {
    obj = require("registerSpanErrorInstrumentation");
    activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      tmp2 = WeakMap;
      flag = true;
      result = WeakMap.set(activeSpan, true);
    }
    span_id = activeSpan;
    if (activeSpan) {
      tmp4 = closure_0;
      tmp5 = closure_1;
      obj2 = require("registerSpanErrorInstrumentation");
      span_id = obj2.spanToJSON(activeSpan).span_id;
    }
    obj = { initialDisplay: global.record };
    obj.parentSpanId = span_id;
    return result.createElement(TimeToDisplay, obj, global.children);
  }
}
class TimeToFullDisplay {
  constructor(arg0) {
    obj = require("registerSpanErrorInstrumentation");
    activeSpan = obj.getActiveSpan();
    span_id = activeSpan;
    if (activeSpan) {
      tmp2 = closure_0;
      tmp3 = closure_1;
      obj2 = require("registerSpanErrorInstrumentation");
      span_id = obj2.spanToJSON(activeSpan).span_id;
    }
    obj = { fullDisplay: global.record };
    obj.parentSpanId = span_id;
    return result.createElement(TimeToDisplay, obj, global.children);
  }
}
function TimeToDisplay(initialDisplay) {
  let obj = require(1165) /* _isNativeReflectConstruct */;
  obj = { initialDisplay: initialDisplay.initialDisplay, fullDisplay: initialDisplay.fullDisplay, parentSpanId: initialDisplay.parentSpanId };
  return <>{React.createElement(obj.getRNSentryOnDrawReporter(), { initialDisplay: arg0.initialDisplay, fullDisplay: arg0.fullDisplay, parentSpanId: arg0.parentSpanId })}{arg0.children}</>;
}
function startTimeToInitialDisplaySpan(isAutoInstrumented) {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const activeSpan = obj.getActiveSpan();
  const obj2 = require(794) /* registerSpanErrorInstrumentation */;
  if (activeSpan) {
    const spanDescendants = obj2.getSpanDescendants(activeSpan);
    const found = spanDescendants.find((arg0) => "ui.load.initial_display" === startInactiveSpanResult(outer1_1[2]).spanToJSON(arg0).op);
    const obj3 = require(794) /* registerSpanErrorInstrumentation */;
    if (found) {
      const debug2 = obj3.debug;
      debug2.log("[TimeToDisplay] Found existing ui.load.initial_display span.");
      return found;
    } else {
      const _Object = Object;
      obj = { op: "ui.load.initial_display", name: "Time To Initial Display", startTime: tmp4(794).spanToJSON(activeSpan).start_timestamp };
      const startInactiveSpanResult = obj3.startInactiveSpan(Object.assign(obj, isAutoInstrumented));
      require = startInactiveSpanResult;
      if (startInactiveSpanResult) {
        captureStartFramesForSpan(startInactiveSpanResult.spanContext().spanId).catch((arg0) => {
          const debug = startInactiveSpanResult(outer1_1[2]).debug;
          debug.log("[TimeToDisplay] Failed to capture start frames for initial display span (" + startInactiveSpanResult.spanContext().spanId + ").", arg0);
        });
        isAutoInstrumented = undefined;
        if (null != isAutoInstrumented) {
          isAutoInstrumented = isAutoInstrumented.isAutoInstrumented;
        }
        if (isAutoInstrumented) {
          const attr = startInactiveSpanResult.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, require(1134).SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
        } else {
          const result = weakMap.set(activeSpan, true);
          const attr1 = startInactiveSpanResult.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, require(1134).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
        }
        return startInactiveSpanResult;
      }
      const tmp4Result = tmp4(794);
    }
    tmp4 = require;
  } else {
    let debug = obj2.debug;
    debug.warn("[TimeToDisplay] No active span found to attach ui.load.initial_display to.");
  }
}
function startTimeToFullDisplaySpan(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const activeSpan = found(794).getActiveSpan();
    const obj3 = found(794);
    if (activeSpan) {
      const spanDescendants = obj3.getSpanDescendants(activeSpan);
      found = spanDescendants.find((arg0) => "ui.load.initial_display" === found(startInactiveSpanResult[2]).spanToJSON(arg0).op);
      if (found) {
        const found1 = spanDescendants.find((arg0) => "ui.load.full_display" === found(startInactiveSpanResult[2]).spanToJSON(arg0).op);
        const obj4 = found(794);
        if (found1) {
          const debug3 = obj4.debug;
          debug3.log("[TimeToDisplay] Found existing ui.load.full_display span.");
          return found1;
        } else {
          const _Object = Object;
          let obj = { op: "ui.load.full_display", name: "Time To Full Display", startTime: tmp12(794).spanToJSON(found).start_timestamp };
          const startInactiveSpanResult = obj4.startInactiveSpan(Object.assign(obj, first));
          const dependencyMap = startInactiveSpanResult;
          if (startInactiveSpanResult) {
            captureStartFramesForSpan(startInactiveSpanResult.spanContext().spanId).catch((arg0) => {
              const debug = found(startInactiveSpanResult[2]).debug;
              debug.log("[TimeToDisplay] Failed to capture start frames for full display span (" + startInactiveSpanResult.spanContext().spanId + ").", arg0);
            });
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => {
              let obj = found(startInactiveSpanResult[2]);
              if (!obj.spanToJSON(startInactiveSpanResult).timestamp) {
                obj = { code: found(startInactiveSpanResult[2]).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
                startInactiveSpanResult.setStatus(obj);
                const promise = outer1_17(startInactiveSpanResult);
                outer1_17(startInactiveSpanResult).then(() => {
                  const debug = found(startInactiveSpanResult[2]).debug;
                  debug.log("[TimeToDisplay] span " + outer1_1.spanContext().spanId + " updated with frame data.");
                  outer1_1.end(found(startInactiveSpanResult[2]).spanToJSON(outer1_0).timestamp);
                  const obj = found(startInactiveSpanResult[2]);
                  const result = found(startInactiveSpanResult[5]).setSpanDurationAsMeasurement("time_to_full_display", outer1_1);
                }).catch(() => {
                  const debug = found(startInactiveSpanResult[2]).debug;
                  debug.warn("[TimeToDisplay] Failed to capture end frames for full display span (" + outer1_1.spanContext().spanId + ").");
                  outer1_1.end(found(startInactiveSpanResult[2]).spanToJSON(outer1_0).timestamp);
                  const obj = found(startInactiveSpanResult[2]);
                  const result = found(startInactiveSpanResult[5]).setSpanDurationAsMeasurement("time_to_full_display", outer1_1);
                });
                let debug = found(startInactiveSpanResult[2]).debug;
                debug.warn("[TimeToDisplay] Full display span deadline_exceeded.");
                const nextPromise = outer1_17(startInactiveSpanResult).then(() => {
                  const debug = found(startInactiveSpanResult[2]).debug;
                  debug.log("[TimeToDisplay] span " + outer1_1.spanContext().spanId + " updated with frame data.");
                  outer1_1.end(found(startInactiveSpanResult[2]).spanToJSON(outer1_0).timestamp);
                  const obj = found(startInactiveSpanResult[2]);
                  const result = found(startInactiveSpanResult[5]).setSpanDurationAsMeasurement("time_to_full_display", outer1_1);
                });
              }
            }, first.timeoutMs);
            let promise = captureStartFramesForSpan(startInactiveSpanResult.spanContext().spanId);
            found(794).fill(startInactiveSpanResult, "end", (arg0) => {
              let closure_0 = arg0;
              return (arg0) => {
                clearTimeout(outer1_2);
                callback.call(outer1_1, arg0);
              };
            });
            let isAutoInstrumented;
            if (null != first) {
              isAutoInstrumented = first.isAutoInstrumented;
            }
            const setAttribute = startInactiveSpanResult.setAttribute;
            const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = found(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
            const tmp24 = found(1134);
            if (isAutoInstrumented) {
              const attr = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp24.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
            } else {
              const attr1 = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp24.SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
            }
            return startInactiveSpanResult;
          }
          const tmp12Result = tmp12(794);
        }
        tmp12 = found;
      } else {
        const debug2 = found(794).debug;
        debug2.warn("[TimeToDisplay] No initial display span found to attach ui.load.full_display to.");
      }
    } else {
      let debug = obj3.debug;
      debug.warn("[TimeToDisplay] No active span found to attach ui.load.full_display to.");
    }
  }
  first = { timeoutMs: 30000 };
}
function updateFullDisplaySpan(arg0, arg1) {
  let found = arg1;
  const _require = arg0;
  let obj = _require(timestamp[2]);
  const activeSpan = obj.getActiveSpan();
  if (activeSpan) {
    if (!found) {
      const spanDescendants = _require(timestamp[2]).getSpanDescendants(activeSpan);
      found = spanDescendants.find((arg0) => "ui.load.initial_display" === callback(timestamp[2]).spanToJSON(arg0).op);
      const obj3 = _require(timestamp[2]);
    }
    timestamp = found;
    if (found) {
      timestamp = _require(timestamp[2]).spanToJSON(found).timestamp;
      const obj4 = _require(timestamp[2]);
    }
    if (timestamp) {
      obj = { isAutoInstrumented: true };
      const tmp16 = startTimeToFullDisplaySpan(obj);
      let _slicedToArray = tmp16;
      const obj6 = _require(timestamp[2]);
      if (tmp16) {
        const spanToJSONResult = obj6.spanToJSON(tmp16);
        if (spanToJSONResult.timestamp) {
          const debug4 = _require(timestamp[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug4.warn("[TimeToDisplay] " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") span already ended.");
        } else {
          const promise = captureEndFramesAndAttachToSpan(tmp16);
          captureEndFramesAndAttachToSpan(tmp16).then(() => {
            if (timestamp > callback) {
              const debug = callback(timestamp[2]).debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            tmp16.end(timestamp > callback ? timestamp : callback);
            tmp16.setStatus({ code: callback(timestamp[2]).SPAN_STATUS_OK });
            const debug2 = callback(timestamp[2]).debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: callback(timestamp[2]).SPAN_STATUS_OK };
            const tmp = timestamp > callback ? timestamp : callback;
            const result = callback(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp16);
          }).catch((arg0) => {
            const debug = callback(timestamp[2]).debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for full display span.", arg0);
            tmp16.end(timestamp > callback ? timestamp : callback);
            tmp16.setStatus({ code: callback(timestamp[2]).SPAN_STATUS_OK });
            const obj = { code: callback(timestamp[2]).SPAN_STATUS_OK };
            const result = callback(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp16);
          });
          const nextPromise = captureEndFramesAndAttachToSpan(tmp16).then(() => {
            if (timestamp > callback) {
              const debug = callback(timestamp[2]).debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            tmp16.end(timestamp > callback ? timestamp : callback);
            tmp16.setStatus({ code: callback(timestamp[2]).SPAN_STATUS_OK });
            const debug2 = callback(timestamp[2]).debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: callback(timestamp[2]).SPAN_STATUS_OK };
            const tmp = timestamp > callback ? timestamp : callback;
            const result = callback(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp16);
          });
        }
      } else {
        const debug3 = obj6.debug;
        debug3.warn("[TimeToDisplay] No TimeToFullDisplay span found or created, possibly performance is disabled.");
      }
    } else {
      let result = weakMap1.set(activeSpan, true);
      let debug2 = _require(timestamp[2]).debug;
      const _HermesInternal = HermesInternal;
      debug2.warn("[TimeToDisplay] Full display called before initial display for active span (" + activeSpan.spanContext().spanId + ").");
    }
  } else {
    let debug = _require(timestamp[2]).debug;
    debug.warn("[TimeToDisplay] No active span found to update ui.load.full_display in.");
  }
}
function createTimeToDisplay(arg0) {
  let dependencyMap;
  let require;
  ({ useFocusEffect: require, Component: dependencyMap } = arg0);
  class TimeToDisplayWrapper {
    constructor(arg0) {
      tmp = outer1_2(outer1_4(false), 2);
      record = tmp[0];
      c0 = tmp[1];
      tmp2 = c0(() => {
        callback(true);
        return () => {
          outer1_0(false);
        };
      });
      obj = {};
      tmp3 = outer1_3;
      tmp4 = Component;
      if (record) {
        record = arg0.record;
      }
      obj.record = record;
      return outer1_3.createElement(tmp4, Object.assign({}, arg0, obj));
    }
  }
  TimeToDisplayWrapper.displayName = "TimeToDisplayWrapper";
  return TimeToDisplayWrapper;
}
function captureStartFramesForSpan(spanId) {
  let closure_0 = spanId;
  return fn(this, undefined, undefined, function*() {
    if (callback(outer2_1[6]).NATIVE.enableNative) {
      const tmp2 = yield outer2_18();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (outer3_8.get(outer2_0)) {
          outer3_8.delete(outer2_0);
          const debug = callback(outer3_1[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + outer2_0 + " after timeout.");
        }
      }, 60000);
      if (!outer2_8.has(outer1_0)) {
        const obj = { startFrames: null, endFrames: null, cleanupTimeout: timerId };
        const result = outer2_8.set(outer1_0, obj);
      }
      const value = outer2_8.get(outer1_0);
      if (value) {
        value.startFrames = tmp2;
        value.cleanupTimeout = timerId;
        const debug2 = callback(outer2_1[2]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[TimeToDisplay] Captured start frames for span " + outer1_0 + ".", tmp2);
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId);
        let debug = callback(outer2_1[2]).debug;
        let _HermesInternal = HermesInternal;
        debug.log("[TimeToDisplay] Span " + outer1_0 + " already ended, discarding start frames.");
      }
    }
  });
}
function captureEndFramesAndAttachToSpan(span) {
  let closure_0 = span;
  return fn(this, undefined, undefined, function*() {
    if (callback(outer2_1[6]).NATIVE.enableNative) {
      const spanId = outer1_0.spanContext().spanId;
      const value = outer2_8.get(spanId);
      let startFrames;
      if (null != value) {
        startFrames = tmp5.startFrames;
      }
      if (startFrames) {
        const tmp15 = yield outer2_18();
        tmp5.endFrames = tmp15;
        let obj = outer1_0;
        startFrames = tmp5.startFrames;
        const diff = tmp15.totalFrames - startFrames.totalFrames;
        const diff1 = tmp15.slowFrames - startFrames.slowFrames;
        const diff2 = tmp15.frozenFrames - startFrames.frozenFrames;
        if (diff <= 0) {
          if (diff1 <= 0) {
            if (diff2 <= 0) {
              const debug3 = callback(outer2_1[2]).debug;
              const _HermesInternal2 = HermesInternal;
              debug3.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + obj.spanContext().spanId + ").");
            }
            const debug4 = callback(outer2_1[2]).debug;
            const _HermesInternal3 = HermesInternal;
            debug4.log("[TimeToDisplay] Captured and attached end frames for span " + tmp2 + ".", tmp15);
            while (true) {
              let tmp35 = value;
              if (!tmp5.cleanupTimeout) {
                break;
              } else {
                let tmp36 = globalThis;
                let _clearTimeout = clearTimeout;
                let tmp37 = value;
                let clearTimeoutResult = clearTimeout(tmp5.cleanupTimeout);
                break;
              }
              let tmp39 = outer2_8;
              let tmp40 = spanId;
              let deleteResult = outer2_8.delete(tmp2);
            }
          }
        }
        const attr = obj.setAttribute("frames.total", diff);
        const attr1 = obj.setAttribute("frames.slow", diff1);
        const attr2 = obj.setAttribute("frames.frozen", diff2);
        const debug2 = callback(outer2_1[2]).debug;
        obj = {};
        obj.spanId = obj.spanContext().spanId;
        obj = { total: diff, slow: diff1, frozen: diff2 };
        obj.frameData = obj;
        debug2.log("[TimeToDisplay] Attached frame data to span.", obj);
      } else {
        const debug = callback(outer2_1[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[TimeToDisplay] No start frames found for span " + tmp2 + ", skipping frame data collection.");
      }
    }
  });
}
function fetchNativeFramesWithTimeout() {
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c2 = false;
    const timeout = setTimeout(() => {
      if (!c2) {
        c2 = true;
        callback2("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = outer1_0(outer1_1[6]).NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    nativeFrames.then((arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(result);
        c2 = true;
        if (arg0) {
          callback(arg0);
        } else {
          callback2("Native frames response is null.");
        }
      }
    }).then(undefined, (arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(result);
        c2 = true;
        callback2(arg0);
      }
    });
  });
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let result = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let iter = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          callback(iter.value);
        } else {
          (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value).then(fulfilled, iter);
          const promise = (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      step(iter.next());
    });
    return _Promise;
  };
}
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
const map = new Map();

export const manualInitialDisplaySpans = weakMap;
export { TimeToInitialDisplay };
export { TimeToFullDisplay };
export { startTimeToInitialDisplaySpan };
export { startTimeToFullDisplaySpan };
export const updateInitialDisplaySpan = function updateInitialDisplaySpan(arg0) {
  const _require = arg0;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    let activeSpan = obj.activeSpan;
    if (undefined === activeSpan) {
      activeSpan = _require(activeSpan[2]).getActiveSpan();
      let obj2 = _require(activeSpan[2]);
    }
    let span = obj.span;
    if (undefined === span) {
      span = startTimeToInitialDisplaySpan();
    }
    const obj3 = _require(activeSpan[2]);
    if (span) {
      if (activeSpan) {
        if (obj3.spanToJSON(span).parent_span_id === tmp4Result.spanToJSON(activeSpan).span_id) {
          if (obj5.spanToJSON(span).timestamp) {
            const debug4 = _require(activeSpan[2]).debug;
            let _HermesInternal = HermesInternal;
            debug4.warn("[TimeToDisplay] " + _require(activeSpan[2]).spanToJSON(span).description + " span already ended.");
            const obj6 = _require(activeSpan[2]);
          } else {
            const promise = captureEndFramesAndAttachToSpan(span);
            captureEndFramesAndAttachToSpan(span).then(() => {
              span.end(callback);
              span.setStatus({ code: callback(activeSpan[2]).SPAN_STATUS_OK });
              const debug = callback(activeSpan[2]).debug;
              const obj = { code: callback(activeSpan[2]).SPAN_STATUS_OK };
              debug.log("[TimeToDisplay] " + callback(activeSpan[2]).spanToJSON(span).description + " span updated with end timestamp and frame data.");
              if (outer1_7.has(activeSpan)) {
                outer1_7.delete(activeSpan);
                const debug2 = callback(activeSpan[2]).debug;
                const _HermesInternal = HermesInternal;
                debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
                outer1_14(callback, span);
              }
              const obj2 = callback(activeSpan[2]);
              const result = callback(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
            }).catch((arg0) => {
              const debug = callback(activeSpan[2]).debug;
              debug.log("[TimeToDisplay] Failed to capture frame data for initial display span.", arg0);
              span.end(callback);
              span.setStatus({ code: callback(activeSpan[2]).SPAN_STATUS_OK });
              if (outer1_7.has(activeSpan)) {
                outer1_7.delete(activeSpan);
                const debug2 = callback(activeSpan[2]).debug;
                const _HermesInternal = HermesInternal;
                debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
                outer1_14(callback, span);
              }
              const obj = { code: callback(activeSpan[2]).SPAN_STATUS_OK };
              const result = callback(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
            });
            const nextPromise = captureEndFramesAndAttachToSpan(span).then(() => {
              span.end(callback);
              span.setStatus({ code: callback(activeSpan[2]).SPAN_STATUS_OK });
              const debug = callback(activeSpan[2]).debug;
              const obj = { code: callback(activeSpan[2]).SPAN_STATUS_OK };
              debug.log("[TimeToDisplay] " + callback(activeSpan[2]).spanToJSON(span).description + " span updated with end timestamp and frame data.");
              if (outer1_7.has(activeSpan)) {
                outer1_7.delete(activeSpan);
                const debug2 = callback(activeSpan[2]).debug;
                const _HermesInternal = HermesInternal;
                debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
                outer1_14(callback, span);
              }
              const obj2 = callback(activeSpan[2]);
              const result = callback(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
            });
          }
          obj5 = _require(activeSpan[2]);
        } else {
          const debug3 = _require(activeSpan[2]).debug;
          debug3.warn("[TimeToDisplay] Initial display span is not a child of current active span.");
        }
        tmp4Result = _require(activeSpan[2]);
      } else {
        let debug2 = obj3.debug;
        debug2.warn("[TimeToDisplay] No active span found to attach ui.load.initial_display to.");
      }
    } else {
      let debug = obj3.debug;
      debug.warn("[TimeToDisplay] No span found or created, possibly performance is disabled.");
    }
  }
  obj = {};
};
export const createTimeToFullDisplay = function createTimeToFullDisplay(useFocusEffect) {
  return createTimeToDisplay({ useFocusEffect: useFocusEffect.useFocusEffect, Component: TimeToFullDisplay });
};
export const createTimeToInitialDisplay = function createTimeToInitialDisplay(useFocusEffect) {
  return createTimeToDisplay({ useFocusEffect: useFocusEffect.useFocusEffect, Component: TimeToInitialDisplay });
};
