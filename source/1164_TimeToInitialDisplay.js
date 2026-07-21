// Module ID: 1164
// Function ID: 13209
// Name: TimeToInitialDisplay
// Dependencies: []
// Exports: createTimeToFullDisplay, createTimeToInitialDisplay, updateInitialDisplaySpan

// Module 1164 (TimeToInitialDisplay)
class TimeToInitialDisplay {
  constructor(arg0) {
    obj = arg1(dependencyMap[2]);
    activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      tmp2 = WeakMap;
      flag = true;
      result = WeakMap.set(activeSpan, true);
    }
    span_id = activeSpan;
    if (activeSpan) {
      tmp4 = arg1;
      tmp5 = dependencyMap;
      obj2 = arg1(dependencyMap[2]);
      span_id = obj2.spanToJSON(activeSpan).span_id;
    }
    obj = { initialDisplay: global.record };
    obj.parentSpanId = span_id;
    return importAll.createElement(TimeToDisplay, obj, global.children);
  }
}
class TimeToFullDisplay {
  constructor(arg0) {
    obj = arg1(dependencyMap[2]);
    activeSpan = obj.getActiveSpan();
    span_id = activeSpan;
    if (activeSpan) {
      tmp2 = arg1;
      tmp3 = dependencyMap;
      obj2 = arg1(dependencyMap[2]);
      span_id = obj2.spanToJSON(activeSpan).span_id;
    }
    obj = { fullDisplay: global.record };
    obj.parentSpanId = span_id;
    return importAll.createElement(TimeToDisplay, obj, global.children);
  }
}
function TimeToDisplay(initialDisplay) {
  let obj = arg1(dependencyMap[3]);
  obj = { initialDisplay: initialDisplay.initialDisplay, fullDisplay: initialDisplay.fullDisplay, parentSpanId: initialDisplay.parentSpanId };
  return <>{React.createElement(obj.getRNSentryOnDrawReporter(), obj)}{arg0.children}</>;
}
function startTimeToInitialDisplaySpan(isAutoInstrumented) {
  let obj = arg1(dependencyMap[2]);
  const activeSpan = obj.getActiveSpan();
  const obj2 = arg1(dependencyMap[2]);
  if (activeSpan) {
    const spanDescendants = obj2.getSpanDescendants(activeSpan);
    const found = spanDescendants.find((arg0) => "ui.load.initial_display" === startInactiveSpanResult(closure_1[2]).spanToJSON(arg0).op);
    const obj3 = arg1(dependencyMap[2]);
    if (found) {
      const debug2 = obj3.debug;
      debug2.log("[TimeToDisplay] Found existing ui.load.initial_display span.");
      return found;
    } else {
      const _Object = Object;
      obj = { 1641015498: true, 611078649: true, startTime: tmp4(tmp5[2]).spanToJSON(activeSpan).start_timestamp };
      const startInactiveSpanResult = obj3.startInactiveSpan(Object.assign(obj, isAutoInstrumented));
      const arg1 = startInactiveSpanResult;
      if (startInactiveSpanResult) {
        captureStartFramesForSpan(startInactiveSpanResult.spanContext().spanId).catch((arg0) => {
          const debug = startInactiveSpanResult(closure_1[2]).debug;
          debug.log("[TimeToDisplay] Failed to capture start frames for initial display span (" + startInactiveSpanResult.spanContext().spanId + ").", arg0);
        });
        isAutoInstrumented = undefined;
        if (null != isAutoInstrumented) {
          isAutoInstrumented = isAutoInstrumented.isAutoInstrumented;
        }
        if (isAutoInstrumented) {
          const attr = startInactiveSpanResult.setAttribute(arg1(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg1(dependencyMap[4]).SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
        } else {
          const result = weakMap.set(activeSpan, true);
          const attr1 = startInactiveSpanResult.setAttribute(arg1(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg1(dependencyMap[4]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
        }
        return startInactiveSpanResult;
      }
      const tmp4Result = tmp4(tmp5[2]);
    }
    const tmp4 = arg1;
    const tmp5 = dependencyMap;
  } else {
    const debug = obj2.debug;
    debug.warn("[TimeToDisplay] No active span found to attach ui.load.initial_display to.");
  }
}
function startTimeToFullDisplaySpan(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const activeSpan = arg1(dependencyMap[2]).getActiveSpan();
    const obj3 = arg1(dependencyMap[2]);
    if (activeSpan) {
      const spanDescendants = obj3.getSpanDescendants(activeSpan);
      const found = spanDescendants.find((arg0) => "ui.load.initial_display" === found(startInactiveSpanResult[2]).spanToJSON(arg0).op);
      const arg1 = found;
      if (found) {
        const found1 = spanDescendants.find((arg0) => "ui.load.full_display" === found(startInactiveSpanResult[2]).spanToJSON(arg0).op);
        const obj4 = arg1(dependencyMap[2]);
        if (found1) {
          const debug3 = obj4.debug;
          debug3.log("[TimeToDisplay] Found existing ui.load.full_display span.");
          return found1;
        } else {
          const _Object = Object;
          const obj = { 1641015498: "channelId", 611078649: "toString", startTime: tmp12(tmp13[2]).spanToJSON(found).start_timestamp };
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
                const promise = callback(startInactiveSpanResult);
                callback(startInactiveSpanResult).then(() => {
                  const debug = callback(closure_1[2]).debug;
                  debug.log("[TimeToDisplay] span " + closure_1.spanContext().spanId + " updated with frame data.");
                  closure_1.end(callback(closure_1[2]).spanToJSON(callback).timestamp);
                  const obj = callback(closure_1[2]);
                  const result = callback(closure_1[5]).setSpanDurationAsMeasurement("time_to_full_display", closure_1);
                }).catch(() => {
                  const debug = callback(closure_1[2]).debug;
                  debug.warn("[TimeToDisplay] Failed to capture end frames for full display span (" + closure_1.spanContext().spanId + ").");
                  closure_1.end(callback(closure_1[2]).spanToJSON(callback).timestamp);
                  const obj = callback(closure_1[2]);
                  const result = callback(closure_1[5]).setSpanDurationAsMeasurement("time_to_full_display", closure_1);
                });
                const debug = found(startInactiveSpanResult[2]).debug;
                debug.warn("[TimeToDisplay] Full display span deadline_exceeded.");
                const nextPromise = callback(startInactiveSpanResult).then(() => {
                  const debug = callback(closure_1[2]).debug;
                  debug.log("[TimeToDisplay] span " + closure_1.spanContext().spanId + " updated with frame data.");
                  closure_1.end(callback(closure_1[2]).spanToJSON(callback).timestamp);
                  const obj = callback(closure_1[2]);
                  const result = callback(closure_1[5]).setSpanDurationAsMeasurement("time_to_full_display", closure_1);
                });
              }
            }, first.timeoutMs);
            const promise = captureStartFramesForSpan(startInactiveSpanResult.spanContext().spanId);
            arg1(dependencyMap[2]).fill(startInactiveSpanResult, "end", (arg0) => {
              const found = arg0;
              return (arg0) => {
                clearTimeout(closure_2);
                arg0.call(closure_1, arg0);
              };
            });
            let isAutoInstrumented;
            if (null != first) {
              isAutoInstrumented = first.isAutoInstrumented;
            }
            const setAttribute = startInactiveSpanResult.setAttribute;
            const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = arg1(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
            const tmp24 = arg1(dependencyMap[4]);
            if (isAutoInstrumented) {
              const attr = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp24.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
            } else {
              const attr1 = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp24.SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
            }
            return startInactiveSpanResult;
          }
          const tmp12Result = tmp12(tmp13[2]);
        }
        const tmp12 = arg1;
        const tmp13 = dependencyMap;
      } else {
        const debug2 = arg1(dependencyMap[2]).debug;
        debug2.warn("[TimeToDisplay] No initial display span found to attach ui.load.full_display to.");
      }
    } else {
      const debug = obj3.debug;
      debug.warn("[TimeToDisplay] No active span found to attach ui.load.full_display to.");
    }
  }
  first = { timeoutMs: 30000 };
}
function updateFullDisplaySpan(arg0, arg1) {
  let found = arg1;
  arg1 = arg0;
  let obj = arg1(dependencyMap[2]);
  const activeSpan = obj.getActiveSpan();
  if (activeSpan) {
    if (!found) {
      const spanDescendants = arg1(dependencyMap[2]).getSpanDescendants(activeSpan);
      found = spanDescendants.find((arg0) => "ui.load.initial_display" === arg0(timestamp[2]).spanToJSON(arg0).op);
      const obj3 = arg1(dependencyMap[2]);
    }
    let timestamp = found;
    if (found) {
      timestamp = arg1(dependencyMap[2]).spanToJSON(found).timestamp;
      const obj4 = arg1(dependencyMap[2]);
    }
    const dependencyMap = timestamp;
    if (timestamp) {
      obj = { isAutoInstrumented: true };
      const tmp16 = startTimeToFullDisplaySpan(obj);
      let closure_2 = tmp16;
      const obj6 = arg1(dependencyMap[2]);
      if (tmp16) {
        const spanToJSONResult = obj6.spanToJSON(tmp16);
        let closure_3 = spanToJSONResult;
        if (spanToJSONResult.timestamp) {
          const debug4 = arg1(dependencyMap[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug4.warn("[TimeToDisplay] " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") span already ended.");
        } else {
          const promise = captureEndFramesAndAttachToSpan(tmp16);
          captureEndFramesAndAttachToSpan(tmp16).then(() => {
            if (timestamp > arg0) {
              const debug = arg0(timestamp[2]).debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            tmp16.end(timestamp > arg0 ? timestamp : arg0);
            tmp16.setStatus({ code: arg0(timestamp[2]).SPAN_STATUS_OK });
            const debug2 = arg0(timestamp[2]).debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: arg0(timestamp[2]).SPAN_STATUS_OK };
            const tmp = timestamp > arg0 ? timestamp : arg0;
            const result = arg0(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp16);
          }).catch((arg0) => {
            const debug = arg0(timestamp[2]).debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for full display span.", arg0);
            tmp16.end(timestamp > arg0 ? timestamp : arg0);
            tmp16.setStatus({ code: arg0(timestamp[2]).SPAN_STATUS_OK });
            const obj = { code: arg0(timestamp[2]).SPAN_STATUS_OK };
            const result = arg0(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp16);
          });
          const nextPromise = captureEndFramesAndAttachToSpan(tmp16).then(() => {
            if (timestamp > arg0) {
              const debug = arg0(timestamp[2]).debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            tmp16.end(timestamp > arg0 ? timestamp : arg0);
            tmp16.setStatus({ code: arg0(timestamp[2]).SPAN_STATUS_OK });
            const debug2 = arg0(timestamp[2]).debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: arg0(timestamp[2]).SPAN_STATUS_OK };
            const tmp = timestamp > arg0 ? timestamp : arg0;
            const result = arg0(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp16);
          });
        }
      } else {
        const debug3 = obj6.debug;
        debug3.warn("[TimeToDisplay] No TimeToFullDisplay span found or created, possibly performance is disabled.");
      }
    } else {
      const result = weakMap1.set(activeSpan, true);
      const debug2 = arg1(dependencyMap[2]).debug;
      const _HermesInternal = HermesInternal;
      debug2.warn("[TimeToDisplay] Full display called before initial display for active span (" + activeSpan.spanContext().spanId + ").");
    }
  } else {
    const debug = arg1(dependencyMap[2]).debug;
    debug.warn("[TimeToDisplay] No active span found to update ui.load.full_display in.");
  }
}
function createTimeToDisplay(arg0) {
  ({ useFocusEffect: closure_0, Component: closure_1 } = arg0);
  class TimeToDisplayWrapper {
    constructor(arg0) {
      tmp = closure_2(closure_4(false), 2);
      record = tmp[0];
      closure_0 = tmp[1];
      tmp2 = closure_0(() => {
        callback(true);
        return () => {
          callback(false);
        };
      });
      obj = {};
      tmp3 = closure_3;
      tmp4 = Component;
      if (record) {
        record = arg0.record;
      }
      obj.record = record;
      return closure_3.createElement(tmp4, Object.assign({}, arg0, obj));
    }
  }
  TimeToDisplayWrapper.displayName = "TimeToDisplayWrapper";
  return TimeToDisplayWrapper;
}
function captureStartFramesForSpan(spanId) {
  const arg1 = spanId;
  return fn(this, undefined, undefined, function*() {
    if (callback(closure_1[6]).NATIVE.enableNative) {
      const tmp2 = yield closure_18();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (map.get(callback)) {
          map.delete(callback);
          const debug = callback(closure_1[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + callback + " after timeout.");
        }
      }, 60000);
      if (!store.has(callback)) {
        const obj = { "Null": "o", "Null": "o", cleanupTimeout: timerId };
        const result = store.set(callback, obj);
      }
      const value = store.get(callback);
      if (value) {
        value.startFrames = tmp2;
        value.cleanupTimeout = timerId;
        const debug2 = callback(closure_1[2]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[TimeToDisplay] Captured start frames for span " + callback + ".", tmp2);
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId);
        const debug = callback(closure_1[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[TimeToDisplay] Span " + callback + " already ended, discarding start frames.");
      }
    }
  });
}
function captureEndFramesAndAttachToSpan(span) {
  const arg1 = span;
  return fn(this, undefined, undefined, function*() {
    if (lib(closure_1[6]).NATIVE.enableNative) {
      const spanId = lib.spanContext().spanId;
      const value = map.get(spanId);
      let startFrames;
      if (null != value) {
        startFrames = tmp5.startFrames;
      }
      if (startFrames) {
        const tmp15 = yield closure_18();
        tmp5.endFrames = tmp15;
        let obj = lib;
        startFrames = tmp5.startFrames;
        const diff = tmp15.totalFrames - startFrames.totalFrames;
        const diff1 = tmp15.slowFrames - startFrames.slowFrames;
        const diff2 = tmp15.frozenFrames - startFrames.frozenFrames;
        if (diff <= 0) {
          if (diff1 <= 0) {
            if (diff2 <= 0) {
              const debug3 = lib(closure_1[2]).debug;
              const _HermesInternal2 = HermesInternal;
              debug3.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + obj.spanContext().spanId + ").");
            }
            const debug4 = lib(closure_1[2]).debug;
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
                // break
              }
              let tmp39 = map;
              let tmp40 = spanId;
              let deleteResult = map.delete(tmp2);
            }
          }
        }
        const attr = obj.setAttribute("frames.total", diff);
        const attr1 = obj.setAttribute("frames.slow", diff1);
        const attr2 = obj.setAttribute("frames.frozen", diff2);
        const debug2 = lib(closure_1[2]).debug;
        obj = {};
        obj.spanId = obj.spanContext().spanId;
        obj = { total: diff, slow: diff1, frozen: diff2 };
        obj.frameData = obj;
        debug2.log("[TimeToDisplay] Attached frame data to span.", obj);
      } else {
        const debug = lib(closure_1[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[TimeToDisplay] No start frames found for span " + tmp2 + ", skipping frame data collection.");
      }
    }
  });
}
function fetchNativeFramesWithTimeout() {
  return new Promise((arg0, arg1) => {
    let closure_2 = false;
    const timeout = setTimeout(() => {
      if (!closure_2) {
        closure_2 = true;
        arg1("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = arg0(arg1[6]).NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    nativeFrames.then((arg0) => {
      if (!closure_2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        closure_2 = true;
        if (arg0) {
          arg0(arg0);
        } else {
          arg1("Native frames response is null.");
        }
      }
    }).then(undefined, (arg0) => {
      if (!closure_2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        closure_2 = true;
        arg1(arg0);
      }
    });
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const useState = arg1(dependencyMap[1]).useState;
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const dependencyMap = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
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
  const arg1 = arg0;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    let activeSpan = obj.activeSpan;
    if (undefined === activeSpan) {
      activeSpan = arg1(dependencyMap[2]).getActiveSpan();
      const obj2 = arg1(dependencyMap[2]);
    }
    const dependencyMap = activeSpan;
    let span = obj.span;
    if (undefined === span) {
      span = startTimeToInitialDisplaySpan();
    }
    let closure_2 = span;
    const obj3 = arg1(dependencyMap[2]);
    if (span) {
      if (activeSpan) {
        if (obj3.spanToJSON(span).parent_span_id === tmp4Result.spanToJSON(activeSpan).span_id) {
          if (obj5.spanToJSON(span).timestamp) {
            const debug4 = arg1(dependencyMap[2]).debug;
            const _HermesInternal = HermesInternal;
            debug4.warn("[TimeToDisplay] " + arg1(dependencyMap[2]).spanToJSON(span).description + " span already ended.");
            const obj6 = arg1(dependencyMap[2]);
          } else {
            const promise = captureEndFramesAndAttachToSpan(span);
            captureEndFramesAndAttachToSpan(span).then(() => {
              span.end(arg0);
              span.setStatus({ code: arg0(activeSpan[2]).SPAN_STATUS_OK });
              const debug = arg0(activeSpan[2]).debug;
              const obj = { code: arg0(activeSpan[2]).SPAN_STATUS_OK };
              debug.log("[TimeToDisplay] " + arg0(activeSpan[2]).spanToJSON(span).description + " span updated with end timestamp and frame data.");
              if (set.has(activeSpan)) {
                set.delete(activeSpan);
                const debug2 = arg0(activeSpan[2]).debug;
                const _HermesInternal = HermesInternal;
                debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
                callback(arg0, span);
              }
              const obj2 = arg0(activeSpan[2]);
              const result = arg0(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
            }).catch((arg0) => {
              const debug = arg0(activeSpan[2]).debug;
              debug.log("[TimeToDisplay] Failed to capture frame data for initial display span.", arg0);
              span.end(arg0);
              span.setStatus({ code: arg0(activeSpan[2]).SPAN_STATUS_OK });
              if (set.has(activeSpan)) {
                set.delete(activeSpan);
                const debug2 = arg0(activeSpan[2]).debug;
                const _HermesInternal = HermesInternal;
                debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
                callback(arg0, span);
              }
              const obj = { code: arg0(activeSpan[2]).SPAN_STATUS_OK };
              const result = arg0(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
            });
            const nextPromise = captureEndFramesAndAttachToSpan(span).then(() => {
              span.end(arg0);
              span.setStatus({ code: arg0(activeSpan[2]).SPAN_STATUS_OK });
              const debug = arg0(activeSpan[2]).debug;
              const obj = { code: arg0(activeSpan[2]).SPAN_STATUS_OK };
              debug.log("[TimeToDisplay] " + arg0(activeSpan[2]).spanToJSON(span).description + " span updated with end timestamp and frame data.");
              if (set.has(activeSpan)) {
                set.delete(activeSpan);
                const debug2 = arg0(activeSpan[2]).debug;
                const _HermesInternal = HermesInternal;
                debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
                callback(arg0, span);
              }
              const obj2 = arg0(activeSpan[2]);
              const result = arg0(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
            });
          }
          const obj5 = arg1(dependencyMap[2]);
        } else {
          const debug3 = arg1(dependencyMap[2]).debug;
          debug3.warn("[TimeToDisplay] Initial display span is not a child of current active span.");
        }
        const tmp4Result = arg1(dependencyMap[2]);
      } else {
        const debug2 = obj3.debug;
        debug2.warn("[TimeToDisplay] No active span found to attach ui.load.initial_display to.");
      }
    } else {
      const debug = obj3.debug;
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
