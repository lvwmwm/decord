// Module ID: 1128
// Function ID: 12856
// Name: _captureAppStart
// Dependencies: [65, 794, 977, 1129, 1098, 1131, 1132, 1133, 1134, 1135, 1136]
// Exports: _clearRootComponentCreationTimestampMs, _setRootComponentCreationTimestampMs, appStartIntegration, captureAppStart

// Module 1128 (_captureAppStart)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function _captureAppStart(isManual) {
  isManual = isManual.isManual;
  return fn(this, undefined, undefined, function*() {
    let obj = outer2_0(isManual[1]);
    const client = obj.getClient();
    if (client) {
      const outer2_6 = outer1_1;
      let tmp9 = null;
      const result = 1000 * outer2_0(isManual[1]).timestampInSeconds();
      if (outer2_0(isManual[2]).NATIVE.enableNative) {
        const NATIVE = outer2_0(isManual[2]).NATIVE;
        const tmp12 = yield NATIVE.fetchNativeFrames();
        tmp9 = tmp12;
        const debug2 = outer2_0(isManual[1]).debug;
        debug2.log("[AppStart] Captured end frames for app start.", tmp12);
      }
      while (true) {
        let tmp16 = outer2_9;
        obj = { timestampMs: result, endFrames: tmp9 };
        let tmp17 = outer2_9(obj);
        let tmp18 = outer2_4;
        let integrationByName = client.getIntegrationByName(outer2_4);
        let outer1_0 = integrationByName;
        if (null === integrationByName) {
          break;
        } else {
          let tmp21 = outer1_0;
          if (undefined === outer1_0) {
            break;
          } else {
            let tmp22 = outer1_0;
            let result1 = outer1_0.captureStandaloneAppStart();
            break;
          }
        }
        let tmp23 = yield result1;
      }
      const obj3 = outer2_0(isManual[1]);
    } else {
      const debug = outer2_0(isManual[1]).debug;
      debug.warn("[AppStart] Could not capture App Start, missing client.");
    }
  });
}
function setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != _undefined) {
    timestampMs = _undefined.timestampMs;
  }
  if (timestampMs) {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (closure_7) {
    const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  closure_7 = arg0;
  let c8 = true;
}
function setSpanDurationAsMeasurementOnTransactionEvent(measurements, arg1, timestamp) {
  if (timestamp.timestamp) {
    if (timestamp.start_timestamp) {
      measurements.measurements = measurements.measurements || {};
      const obj = { value: 1000 * (timestamp.timestamp - timestamp.start_timestamp), unit: "millisecond" };
      measurements.measurements[arg1] = obj;
    }
  }
  const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
  debug.warn("Span is missing start or end timestamp. Cam not set measurement on transaction event.");
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
    let closure_3 = arg3;
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
const AppStart = "AppStart";
let c5;
let c6 = false;
let c7;
let c8 = false;
function _setAppStartEndData(arg0) {
  if (closure_5) {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("Overwriting already set app start end data.");
  }
  closure_5 = arg0;
}

export const captureAppStart = function captureAppStart() {
  return _captureAppStart({ isManual: true });
};
export { _captureAppStart };
export { setRootComponentCreationTimestampMs };
export const _setRootComponentCreationTimestampMs = function _setRootComponentCreationTimestampMs(arg0) {
  setRootComponentCreationTimestampMs(arg0);
  let c8 = false;
};
export { _setAppStartEndData };
export function _clearRootComponentCreationTimestampMs() {
  let c7;
}
export const appStartIntegration = function appStartIntegration() {
  function attachAppStartToTransactionEvent(arg0) {
    let closure_0 = arg0;
    return callback2(this, undefined, undefined, function*() {
      if (!outer2_3) {
        let warnResult2 = outer1_0;
        const contexts = outer1_0.contexts;
        const outer1_1 = contexts;
        let trace;
        if (null !== contexts) {
          if (undefined !== outer1_1) {
            trace = outer1_1.trace;
          }
        }
        if (trace) {
          if (!callback) {
            if (outer2_5) {
              if (outer2_5 !== outer1_0.contexts.trace.span_id) {
                const debug3 = callback(794).debug;
                debug3.warn("[AppStart] First started active root span id does not match the transaction event span id. Can not attached app start.");
              }
            } else {
              const debug2 = callback(794).debug;
              debug2.warn("[AppStart] No first started active root span id recorded. Can not attach app start.");
            }
          }
          const NATIVE = callback(977).NATIVE;
          const tmp21 = yield NATIVE.fetchNativeAppStart();
          if (tmp21) {
            if (tmp21.has_fetched) {
              warnResult2 = callback;
              warnResult2 = dependencyMap;
              const debug17 = callback(794).debug;
              warnResult2 = debug17.warn("[AppStart] Measured app start metrics were already reported from the native layer.");
            } else {
              const app_start_timestamp_ms = tmp21.app_start_timestamp_ms;
              if (app_start_timestamp_ms) {
                let timestampMs;
                if (null != c5) {
                  timestampMs = c5.timestampMs;
                }
                if (!timestampMs) {
                  let obj = callback(1132);
                  timestampMs = obj.getBundleStartTimestampMs();
                }
                if (timestampMs) {
                  if (outer1_0.start_timestamp) {
                    if (app_start_timestamp_ms >= 1000 * outer1_0.start_timestamp - 60000) {
                      const diff = timestampMs - app_start_timestamp_ms;
                      if (diff >= 60000) {
                        warnResult2 = callback;
                        warnResult2 = dependencyMap;
                        const debug16 = callback(794).debug;
                        warnResult2 = debug16.warn("[AppStart] App start duration is over a minute long, not adding app start span.");
                      } else if (diff < 0) {
                        warnResult2 = callback;
                        warnResult2 = dependencyMap;
                        const debug15 = callback(794).debug;
                        warnResult2 = debug15.warn("[AppStart] Last recorded app start end timestamp is before the app start timestamp.", "This is usually caused by missing `Sentry.wrap(RootComponent)` call.");
                      } else {
                        outer2_3 = true;
                        warnResult2 = outer1_0;
                        let data = outer1_0.contexts.trace.data;
                        if (!data) {
                          data = {};
                        }
                        outer1_0.contexts.trace.data = data;
                        outer1_0.contexts.trace.data[callback(1133).SEMANTIC_ATTRIBUTE_SENTRY_OP] = callback(1131).UI_LOAD;
                        outer1_0.contexts.trace.op = callback(1131).UI_LOAD;
                        const tmp48 = callback(1134);
                        const tmp49 = recordFirstStartedActiveRootSpanId ? tmp48.SPAN_ORIGIN_MANUAL_APP_START : tmp48.SPAN_ORIGIN_AUTO_APP_START;
                        outer1_0.contexts.trace.data[callback(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = tmp49;
                        outer1_0.contexts.trace.origin = tmp49;
                        const result = app_start_timestamp_ms / 1000;
                        outer1_0.start_timestamp = result;
                        outer1_0.spans = outer1_0.spans || [];
                        const spans = outer1_0.spans;
                        let found = spans.find((op) => "ui.load.initial_display" === op.op);
                        if (found) {
                          found.start_timestamp = result;
                          outer3_12(outer1_0, "time_to_initial_display", found);
                        }
                        const found1 = spans.find((op) => "ui.load.full_display" === op.op);
                        if (found1) {
                          found1.start_timestamp = result;
                          outer3_12(outer1_0, "time_to_full_display", found1);
                        }
                        const result1 = timestampMs / 1000;
                        let timestamp = outer1_0.timestamp;
                        if (timestamp) {
                          timestamp = outer1_0.timestamp < result1;
                        }
                        if (timestamp) {
                          const debug8 = callback(794).debug;
                          debug8.log("[AppStart] Transaction event timestamp is before app start end. Adjusting transaction event timestamp.");
                          outer1_0.timestamp = result1;
                        }
                        if ("cold" === tmp21.type) {
                          let APP_START_WARM = callback(1131).APP_START_COLD;
                        } else {
                          APP_START_WARM = callback(1131).APP_START_WARM;
                        }
                        let obj2 = callback(1132);
                        obj = { op: APP_START_WARM };
                        let str12 = "Warm Start";
                        if ("cold" === tmp21.type) {
                          str12 = "Cold Start";
                        }
                        obj.description = str12;
                        obj.start_timestamp = result;
                        obj.timestamp = result1;
                        obj.trace_id = outer1_0.contexts.trace.trace_id;
                        obj.parent_span_id = outer1_0.contexts.trace.span_id;
                        obj.origin = tmp49;
                        const spanJSON = obj2.createSpanJSON(obj);
                        let endFrames;
                        if (null != c5) {
                          endFrames = c5.endFrames;
                        }
                        if (endFrames) {
                          endFrames = c5.endFrames;
                          if (endFrames.totalFrames <= 0) {
                            if (endFrames.slowFrames <= 0) {
                              if (endFrames.totalFrames <= 0) {
                                const debug10 = callback(794).debug;
                                const _HermesInternal = HermesInternal;
                                debug10.warn("[AppStart] Detected zero slow or frozen frames. Not adding measurements to spanId (" + spanJSON.span_id + ").");
                              }
                            }
                          }
                          spanJSON.data = spanJSON.data || {};
                          ({ totalFrames: tmp77.data["frames.total"], slowFrames: tmp77.data["frames.slow"], frozenFrames: tmp77.data["frames.frozen"] } = endFrames);
                          const debug9 = callback(794).debug;
                          obj = { spanId: spanJSON.span_id };
                          ({ totalFrames: obj6.total, slowFrames: obj6.slow, frozenFrames: obj6.frozen } = endFrames);
                          obj.frameData = {};
                          debug9.log("[AppStart] Attached frame data to span.", obj);
                          let obj1 = {};
                        }
                        let bundleStartTimestampMs = callback(1132).getBundleStartTimestampMs();
                        let childSpanJSON;
                        if (bundleStartTimestampMs) {
                          const result2 = bundleStartTimestampMs / 1000;
                          if (result2 < spanJSON.start_timestamp) {
                            warnResult2 = callback;
                            warnResult2 = dependencyMap;
                            const debug12 = callback(794).debug;
                            warnResult2 = debug12.warn("Bundle start timestamp is before the app start span start timestamp. Skipping JS execution span.");
                          } else {
                            warnResult2 = callback;
                            warnResult2 = dependencyMap;
                            if (tmp89) {
                              obj2 = { description: "JS Bundle Execution Before React Root", start_timestamp: result2, timestamp: tmp89 / 1000 };
                              const tmp99 = callback(1134);
                              obj2.origin = attachAppStartToTransactionEvent ? tmp99.SPAN_ORIGIN_MANUAL_APP_START : tmp99.SPAN_ORIGIN_AUTO_APP_START;
                              childSpanJSON = warnResult2(1132).createChildSpanJSON(spanJSON, obj2);
                              const warnResult2Result = warnResult2(1132);
                            } else {
                              const debug11 = warnResult2(794).debug;
                              debug11.warn("Missing the root component first constructor call timestamp.");
                              let obj3 = { description: "JS Bundle Execution Start", start_timestamp: result2, timestamp: result2, origin: warnResult2(1134).SPAN_ORIGIN_AUTO_APP_START };
                              childSpanJSON = warnResult2(1132).createChildSpanJSON(spanJSON, obj3);
                              const warnResult2Result1 = warnResult2(1132);
                            }
                          }
                        }
                        const items = [spanJSON];
                        warnResult2 = callback2;
                        if (childSpanJSON) {
                          const items1 = [childSpanJSON];
                          let items2 = items1;
                        } else {
                          items2 = [];
                        }
                        warnResult2 = callback2;
                        warnResult2 = warnResult2(items2);
                        warnResult2 = items.concat(warnResult2, callback2((function convertNativeSpansToSpanJSON(spanJSON, spans) {
                          let closure_0 = spanJSON;
                          const found = spans.filter((start_timestamp_ms) => start_timestamp_ms.start_timestamp_ms / 1000 >= spanJSON.start_timestamp);
                          return found.map((description) => {
                            let SPAN_ORIGIN_AUTO_APP_START = description;
                            if ("UIKit init" === description.description) {
                              let obj = spanJSON(1136);
                              obj = 6;
                              const bundleStartTimestampMs = spanJSON(1132).getBundleStartTimestampMs();
                              if (!bundleStartTimestampMs) {
                                obj = { description: "UIKit Init", start_timestamp: SPAN_ORIGIN_AUTO_APP_START.start_timestamp_ms / 1000, timestamp: SPAN_ORIGIN_AUTO_APP_START.end_timestamp_ms / 1000, origin: spanJSON(1134).SPAN_ORIGIN_AUTO_APP_START };
                                let childSpanJSON = spanJSON(dependencyMap[obj]).createChildSpanJSON(tmp3, obj);
                                obj.setMainThreadInfo(childSpanJSON);
                                const obj4 = spanJSON(dependencyMap[obj]);
                              }
                              const obj3 = spanJSON(1132);
                              obj = { description: "UIKit Init to JS Exec Start", start_timestamp: SPAN_ORIGIN_AUTO_APP_START.start_timestamp_ms / 1000, timestamp: bundleStartTimestampMs / 1000 };
                              SPAN_ORIGIN_AUTO_APP_START = spanJSON(1134).SPAN_ORIGIN_AUTO_APP_START;
                              obj.origin = SPAN_ORIGIN_AUTO_APP_START;
                              childSpanJSON = spanJSON(dependencyMap[obj]).createChildSpanJSON(tmp3, obj);
                              const obj6 = spanJSON(dependencyMap[obj]);
                            } else {
                              const obj7 = spanJSON(1136);
                              const obj1 = { description: SPAN_ORIGIN_AUTO_APP_START.description, start_timestamp: SPAN_ORIGIN_AUTO_APP_START.start_timestamp_ms / 1000, timestamp: SPAN_ORIGIN_AUTO_APP_START.end_timestamp_ms / 1000, origin: spanJSON(1134).SPAN_ORIGIN_AUTO_APP_START };
                              return obj7.setMainThreadInfo(spanJSON(1132).createChildSpanJSON(spanJSON, obj1));
                            }
                          });
                        })(spanJSON, tmp21.spans)));
                        const push = spans.push;
                        warnResult2 = push.apply(spans, callback2(warnResult2));
                        warnResult2 = callback;
                        warnResult2 = dependencyMap;
                        const debug13 = callback(794).debug;
                        warnResult2 = globalThis;
                        const _JSON = JSON;
                        warnResult2 = debug13.log("[AppStart] Added app start spans to transaction event.", JSON.stringify(warnResult2, undefined, 2));
                        if ("cold" === tmp21.type) {
                          warnResult2 = callback;
                          warnResult2 = dependencyMap;
                          let APP_START_WARM2 = callback(1135).APP_START_COLD;
                        } else {
                          warnResult2 = callback;
                          warnResult2 = dependencyMap;
                          APP_START_WARM2 = callback(1135).APP_START_WARM;
                        }
                        let obj4 = { value: diff, unit: "millisecond" };
                        let measurements = outer1_0.measurements;
                        warnResult2 = outer1_0;
                        if (!measurements) {
                          measurements = {};
                        }
                        warnResult2.measurements = measurements;
                        warnResult2 = outer1_0;
                        outer1_0.measurements[APP_START_WARM2] = obj4;
                        warnResult2 = callback;
                        warnResult2 = dependencyMap;
                        const debug14 = callback(794).debug;
                        const _JSON2 = JSON;
                        warnResult2 = debug14.log("[AppStart] Added app start measurement to transaction event.", JSON.stringify(obj4, undefined, 2));
                        let obj7 = callback(1132);
                        const tmp50 = outer1_0;
                      }
                    }
                  }
                  const debug7 = callback(794).debug;
                  debug7.warn("[AppStart] App start timestamp is too far in the past to be used for app start span.");
                } else {
                  const debug6 = callback(794).debug;
                  debug6.warn("[AppStart] Javascript failed to record app start end. `_setAppStartEndData` was not called nor could the bundle start be found.");
                }
              } else {
                const debug5 = callback(794).debug;
                debug5.warn("[AppStart] App start timestamp could not be loaded from the native layer.");
              }
            }
          } else {
            const debug4 = callback(794).debug;
            debug4.warn("[AppStart] Failed to retrieve the app start metrics from the native layer.");
          }
        } else {
          const debug = callback(794).debug;
          debug.warn("[AppStart] Transaction event is missing trace context. Can not attach app start.");
        }
      }
    });
  }
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const standalone = {}.standalone;
    let closure_0 = undefined !== standalone && standalone;
    let c1;
    let c2 = true;
    let c3 = false;
    let c4 = false;
    let c5;
    function recordFirstStartedActiveRootSpanId(spanContext) {
      if (!c5) {
        if (obj.isRootSpan(spanContext)) {
          setFirstStartedActiveRootSpanId(spanContext.spanContext().spanId);
        }
        obj = callback(_undefined[4]);
      }
    }
    function setFirstStartedActiveRootSpanId(spanId) {
      let closure_5 = spanId;
      const debug = callback(_undefined[1]).debug;
      debug.log("[AppStart] First started active root span id recorded.", closure_5);
    }
    let obj = {
      name: c4,
      setup(getOptions) {
          let closure_1 = getOptions;
          if (!getOptions.getOptions().enableAppStartTracking) {
            let c2 = false;
            const debug = callback(_undefined[1]).debug;
            debug.warn("[AppStart] App start tracking is disabled.");
          }
          getOptions.on("spanStart", recordFirstStartedActiveRootSpanId);
        },
      afterAllSetup(client) {
          if (!c4) {
            c4 = true;
            const appRegistryIntegration = callback(_undefined[3]).getAppRegistryIntegration(client);
            if (!tmp5) {
              appRegistryIntegration.onRunApplication(() => {
                const debug = callback(table[1]).debug;
                const log = debug.log;
                if (outer1_3) {
                  log("[AppStartIntegration] Resetting app start data flushed flag based on runApplication call.");
                  outer1_3 = false;
                  let outer1_5;
                } else {
                  log("[AppStartIntegration] Waiting for initial app start was flush, before updating based on runApplication call.");
                }
              });
            }
            const obj = callback(_undefined[3]);
            tmp5 = null === appRegistryIntegration || undefined === appRegistryIntegration;
          }
        },
      processEvent(arg0) {
          let closure_0 = arg0;
          return callback2(undefined, undefined, undefined, function*() {
            let tmp = !outer2_2;
            if (outer2_2) {
              tmp = closure_0;
            }
            if (!tmp) {
              tmp = "transaction" !== outer1_0.type;
            }
            if (tmp) {
              return outer1_0;
            } else {
              return yield outer2_8(outer1_0);
            }
          });
        },
      captureStandaloneAppStart() {
          return callback2(this, undefined, undefined, function*() {
            if (outer2_1) {
              const debug = callback(794).debug;
              const log = debug.log;
              if (outer2_0) {
                log("[AppStart] App start tracking standalone root span (transaction).");
                let endFrames;
                if (null != c5) {
                  endFrames = c5.endFrames;
                }
                if (!endFrames) {
                  if (callback(977).NATIVE.enableNative) {
                    const NATIVE = callback(977).NATIVE;
                    const tmp16 = yield NATIVE.fetchNativeFrames();
                    const debug2 = callback(794).debug;
                    debug2.log("[AppStart] Captured end frames for standalone app start.", tmp16);
                    let timestampMs;
                    if (null != c5) {
                      timestampMs = c5.timestampMs;
                    }
                    let result = timestampMs;
                    if (!timestampMs) {
                      let obj = callback(794);
                      result = 1000 * obj.timestampInSeconds();
                    }
                    obj = { timestampMs: result, endFrames: tmp16 };
                    outer3_9(obj);
                  }
                }
                while (true) {
                  let tmp30 = callback;
                  let tmp31 = dependencyMap;
                  let obj3 = callback(794);
                  obj = { forceTransaction: true, name: "App Start" };
                  let num4 = 5;
                  obj.op = callback(1131).UI_LOAD;
                  let startInactiveSpanResult = obj3.startInactiveSpan(obj);
                  if (startInactiveSpanResult instanceof callback(794).SentryNonRecordingSpan) {
                    break;
                  } else {
                    let tmp33 = callback;
                    let tmp34 = dependencyMap;
                    let num5 = 4;
                    let obj5 = callback(1098);
                    let obj6 = callback(794);
                    let setEndTimeValueResult = obj5.setEndTimeValue(startInactiveSpanResult, obj6.timestampInSeconds());
                    let tmp36 = outer2_1;
                    let str5 = "spanEnd";
                    let emitResult = outer2_1.emit("spanEnd", startInactiveSpanResult);
                    let obj7 = callback(1098);
                    let result1 = obj7.convertSpanToTransaction(startInactiveSpanResult);
                    if (result1) {
                      let tmp42 = outer2_8;
                      let tmp43 = yield outer2_8(result1);
                      if (!result1.spans) {
                        break;
                      } else {
                        let num6 = 0;
                        if (0 === result1.spans.length) {
                          break;
                        } else {
                          let tmp44 = callback;
                          let tmp45 = dependencyMap;
                          let obj8 = callback(794);
                          let scope = obj8.getCapturedScopesOnSpan(startInactiveSpanResult).scope;
                          if (!scope) {
                            let tmp46 = callback;
                            let tmp47 = dependencyMap;
                            let obj9 = callback(794);
                            scope = obj9.getCurrentScope();
                          }
                          let captureEventResult = scope.captureEvent(result1);
                          break;
                        }
                      }
                    } else {
                      let tmp39 = callback;
                      let tmp40 = dependencyMap;
                      let debug3 = callback(794).debug;
                      let str6 = "[AppStart] Failed to convert App Start span to transaction.";
                      let warnResult = debug3.warn("[AppStart] Failed to convert App Start span to transaction.");
                      break;
                    }
                    break;
                  }
                  break;
                }
              } else {
                log("[AppStart] App start tracking is enabled. App start will be added to the first transaction as a child span.");
              }
            } else {
              const _console = console;
              console.warn("[AppStart] Could not capture App Start, missing client, call `Sentry.init` first.");
            }
          });
        },
      setFirstStartedActiveRootSpanId
    };
    return obj;
  }
};
