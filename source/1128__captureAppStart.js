// Module ID: 1128
// Function ID: 12855
// Name: _captureAppStart
// Dependencies: []
// Exports: _clearRootComponentCreationTimestampMs, _setRootComponentCreationTimestampMs, appStartIntegration, captureAppStart

// Module 1128 (_captureAppStart)
function _captureAppStart(isManual) {
  const dependencyMap = isManual.isManual;
  return fn(this, undefined, undefined, function*() {
    let integrationByName;
    let obj = integrationByName(closure_1[1]);
    const client = obj.getClient();
    if (client) {
      let closure_6 = closure_1;
      let tmp9 = null;
      const result = 1000 * integrationByName(closure_1[1]).timestampInSeconds();
      if (integrationByName(closure_1[2]).NATIVE.enableNative) {
        const NATIVE = integrationByName(closure_1[2]).NATIVE;
        const tmp12 = yield NATIVE.fetchNativeFrames();
        tmp9 = tmp12;
        const debug2 = integrationByName(closure_1[1]).debug;
        debug2.log("[AppStart] Captured end frames for app start.", tmp12);
      }
      while (true) {
        let tmp16 = callback;
        obj = { timestampMs: result, endFrames: tmp9 };
        let tmp17 = callback(obj);
        let tmp18 = closure_4;
        integrationByName = client.getIntegrationByName(closure_4);
        if (null === integrationByName) {
          break;
        } else {
          let tmp21 = integrationByName;
          if (undefined === integrationByName) {
            break;
          } else {
            let tmp22 = integrationByName;
            let result1 = integrationByName.captureStandaloneAppStart();
            // break
          }
        }
        let tmp23 = yield result1;
      }
      const obj3 = integrationByName(closure_1[1]);
    } else {
      const debug = integrationByName(closure_1[1]).debug;
      debug.warn("[AppStart] Could not capture App Start, missing client.");
    }
  });
}
function setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != timestampMs) {
    timestampMs = timestampMs.timestampMs;
  }
  if (timestampMs) {
    const debug = arg1(dependencyMap[1]).debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (closure_7) {
    const debug2 = arg1(dependencyMap[1]).debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  closure_7 = arg0;
  let closure_8 = true;
}
function setSpanDurationAsMeasurementOnTransactionEvent(measurements, arg1, timestamp) {
  if (timestamp.timestamp) {
    if (timestamp.start_timestamp) {
      measurements.measurements = measurements.measurements || {};
      const obj = { value: 1000 * (timestamp.timestamp - timestamp.start_timestamp), unit: "millisecond" };
      measurements.measurements[arg1] = obj;
    }
  }
  const debug = arg1(dependencyMap[1]).debug;
  debug.warn("Span is missing start or end timestamp. Cam not set measurement on transaction event.");
}
let closure_2 = importDefault(dependencyMap[0]);
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const dependencyMap = arg1;
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
let closure_4 = "AppStart";
let closure_5;
let closure_6 = false;
let closure_7;
let closure_8 = false;
function _setAppStartEndData(arg0) {
  if (closure_5) {
    const debug = arg1(dependencyMap[1]).debug;
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
  let closure_8 = false;
};
export { _setAppStartEndData };
export function _clearRootComponentCreationTimestampMs() {
  let closure_7;
}
export const appStartIntegration = function appStartIntegration() {
  function attachAppStartToTransactionEvent(arg0) {
    let closure_0 = arg0;
    return callback2(this, undefined, undefined, function*() {
      if (!closure_3) {
        let warnResult2 = lib;
        const contexts = lib.contexts;
        let trace;
        if (null !== contexts) {
          if (undefined !== contexts) {
            trace = contexts.trace;
          }
        }
        if (trace) {
          if (!lib) {
            if (closure_5) {
              if (closure_5 !== lib.contexts.trace.span_id) {
                const debug3 = lib(contexts[1]).debug;
                debug3.warn("[AppStart] First started active root span id does not match the transaction event span id. Can not attached app start.");
              }
            } else {
              const debug2 = lib(contexts[1]).debug;
              debug2.warn("[AppStart] No first started active root span id recorded. Can not attach app start.");
            }
          }
          const NATIVE = lib(contexts[2]).NATIVE;
          const tmp21 = yield NATIVE.fetchNativeAppStart();
          if (tmp21) {
            if (tmp21.has_fetched) {
              warnResult2 = lib;
              warnResult2 = contexts;
              const debug17 = lib(contexts[1]).debug;
              warnResult2 = debug17.warn("[AppStart] Measured app start metrics were already reported from the native layer.");
            } else {
              const app_start_timestamp_ms = tmp21.app_start_timestamp_ms;
              if (app_start_timestamp_ms) {
                let timestampMs;
                if (null != closure_5) {
                  timestampMs = closure_5.timestampMs;
                }
                if (!timestampMs) {
                  let obj = lib(contexts[6]);
                  timestampMs = obj.getBundleStartTimestampMs();
                }
                if (timestampMs) {
                  if (lib.start_timestamp) {
                    if (app_start_timestamp_ms >= 1000 * lib.start_timestamp - 60000) {
                      const diff = timestampMs - app_start_timestamp_ms;
                      if (diff >= 60000) {
                        warnResult2 = lib;
                        warnResult2 = contexts;
                        const debug16 = lib(contexts[1]).debug;
                        warnResult2 = debug16.warn("[AppStart] App start duration is over a minute long, not adding app start span.");
                      } else if (diff < 0) {
                        warnResult2 = lib;
                        warnResult2 = contexts;
                        const debug15 = lib(contexts[1]).debug;
                        warnResult2 = debug15.warn("[AppStart] Last recorded app start end timestamp is before the app start timestamp.", "This is usually caused by missing `Sentry.wrap(RootComponent)` call.");
                      } else {
                        closure_3 = true;
                        warnResult2 = lib;
                        let data = lib.contexts.trace.data;
                        if (!data) {
                          data = {};
                        }
                        lib.contexts.trace.data = data;
                        lib.contexts.trace.data[lib(contexts[7]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = lib(contexts[5]).UI_LOAD;
                        lib.contexts.trace.op = lib(contexts[5]).UI_LOAD;
                        const tmp48 = lib(contexts[8]);
                        const tmp49 = closure_6 ? tmp48.SPAN_ORIGIN_MANUAL_APP_START : tmp48.SPAN_ORIGIN_AUTO_APP_START;
                        lib.contexts.trace.data[lib(contexts[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = tmp49;
                        lib.contexts.trace.origin = tmp49;
                        const result = app_start_timestamp_ms / 1000;
                        lib.start_timestamp = result;
                        lib.spans = lib.spans || [];
                        const spans = lib.spans;
                        const found = spans.find((op) => "ui.load.initial_display" === op.op);
                        if (found) {
                          found.start_timestamp = result;
                          callback2(lib, "time_to_initial_display", found);
                        }
                        const found1 = spans.find((op) => "ui.load.full_display" === op.op);
                        if (found1) {
                          found1.start_timestamp = result;
                          callback2(lib, "time_to_full_display", found1);
                        }
                        const result1 = timestampMs / 1000;
                        let timestamp = lib.timestamp;
                        if (timestamp) {
                          timestamp = lib.timestamp < result1;
                        }
                        if (timestamp) {
                          const debug8 = lib(contexts[1]).debug;
                          debug8.log("[AppStart] Transaction event timestamp is before app start end. Adjusting transaction event timestamp.");
                          lib.timestamp = result1;
                        }
                        if ("cold" === tmp21.type) {
                          let APP_START_WARM = lib(contexts[5]).APP_START_COLD;
                        } else {
                          APP_START_WARM = lib(contexts[5]).APP_START_WARM;
                        }
                        let obj2 = lib(contexts[6]);
                        obj = { op: APP_START_WARM };
                        let str12 = "Warm Start";
                        if ("cold" === tmp21.type) {
                          str12 = "Cold Start";
                        }
                        obj.description = str12;
                        obj.start_timestamp = result;
                        obj.timestamp = result1;
                        obj.trace_id = lib.contexts.trace.trace_id;
                        obj.parent_span_id = lib.contexts.trace.span_id;
                        obj.origin = tmp49;
                        const spanJSON = obj2.createSpanJSON(obj);
                        let endFrames;
                        if (null != closure_5) {
                          endFrames = closure_5.endFrames;
                        }
                        if (endFrames) {
                          endFrames = closure_5.endFrames;
                          if (endFrames.totalFrames <= 0) {
                            if (endFrames.slowFrames <= 0) {
                              if (endFrames.totalFrames <= 0) {
                                const debug10 = lib(contexts[1]).debug;
                                const _HermesInternal = HermesInternal;
                                debug10.warn("[AppStart] Detected zero slow or frozen frames. Not adding measurements to spanId (" + spanJSON.span_id + ").");
                              }
                            }
                          }
                          spanJSON.data = spanJSON.data || {};
                          ({ totalFrames: tmp77.data.frames.total, slowFrames: tmp77.data.frames.slow, frozenFrames: tmp77.data.frames.frozen } = endFrames);
                          const debug9 = lib(contexts[1]).debug;
                          obj = { spanId: spanJSON.span_id };
                          ({ totalFrames: obj6.total, slowFrames: obj6.slow, frozenFrames: obj6.frozen } = endFrames);
                          obj.frameData = {};
                          debug9.log("[AppStart] Attached frame data to span.", obj);
                          const obj1 = {};
                        }
                        const bundleStartTimestampMs = lib(contexts[6]).getBundleStartTimestampMs();
                        let childSpanJSON;
                        if (bundleStartTimestampMs) {
                          const result2 = bundleStartTimestampMs / 1000;
                          if (result2 < spanJSON.start_timestamp) {
                            warnResult2 = lib;
                            warnResult2 = contexts;
                            const debug12 = lib(contexts[1]).debug;
                            warnResult2 = debug12.warn("Bundle start timestamp is before the app start span start timestamp. Skipping JS execution span.");
                          } else {
                            warnResult2 = lib;
                            warnResult2 = contexts;
                            if (tmp89) {
                              obj2 = { description: "JS Bundle Execution Before React Root", start_timestamp: result2, timestamp: tmp89 / 1000 };
                              const tmp99 = lib(contexts[8]);
                              obj2.origin = closure_8 ? tmp99.SPAN_ORIGIN_MANUAL_APP_START : tmp99.SPAN_ORIGIN_AUTO_APP_START;
                              childSpanJSON = warnResult2(warnResult2[6]).createChildSpanJSON(spanJSON, obj2);
                              const warnResult2Result = warnResult2(warnResult2[6]);
                            } else {
                              const debug11 = warnResult2(warnResult2[1]).debug;
                              debug11.warn("Missing the root component first constructor call timestamp.");
                              const obj3 = { description: "JS Bundle Execution Start", start_timestamp: result2, timestamp: result2, origin: warnResult2(warnResult2[8]).SPAN_ORIGIN_AUTO_APP_START };
                              childSpanJSON = warnResult2(warnResult2[6]).createChildSpanJSON(spanJSON, obj3);
                              const warnResult2Result1 = warnResult2(warnResult2[6]);
                            }
                          }
                        }
                        const items = [spanJSON];
                        warnResult2 = callback;
                        if (childSpanJSON) {
                          const items1 = [childSpanJSON];
                          let items2 = items1;
                        } else {
                          items2 = [];
                        }
                        warnResult2 = callback;
                        warnResult2 = warnResult2(items2);
                        warnResult2 = items.concat(warnResult2, callback(function convertNativeSpansToSpanJSON(spanJSON, spans) {
                          const found = spans.filter((start_timestamp_ms) => start_timestamp_ms.start_timestamp_ms / 1000 >= start_timestamp_ms.start_timestamp);
                          return found.map((description) => {
                            let SPAN_ORIGIN_AUTO_APP_START = description;
                            if ("UIKit init" === description.description) {
                              let obj = description(closure_1[10]);
                              obj = 6;
                              const bundleStartTimestampMs = description(closure_1[6]).getBundleStartTimestampMs();
                              if (!bundleStartTimestampMs) {
                                obj = { description: "UIKit Init", start_timestamp: SPAN_ORIGIN_AUTO_APP_START.start_timestamp_ms / 1000, timestamp: SPAN_ORIGIN_AUTO_APP_START.end_timestamp_ms / 1000, origin: description(closure_1[8]).SPAN_ORIGIN_AUTO_APP_START };
                                let childSpanJSON = description(closure_1[obj]).createChildSpanJSON(tmp3, obj);
                                obj.setMainThreadInfo(childSpanJSON);
                                const obj4 = description(closure_1[obj]);
                              }
                              const obj3 = description(closure_1[6]);
                              obj = { description: "UIKit Init to JS Exec Start", start_timestamp: SPAN_ORIGIN_AUTO_APP_START.start_timestamp_ms / 1000, timestamp: bundleStartTimestampMs / 1000 };
                              SPAN_ORIGIN_AUTO_APP_START = description(closure_1[8]).SPAN_ORIGIN_AUTO_APP_START;
                              obj.origin = SPAN_ORIGIN_AUTO_APP_START;
                              childSpanJSON = description(closure_1[obj]).createChildSpanJSON(tmp3, obj);
                              const obj6 = description(closure_1[obj]);
                            } else {
                              const obj7 = description(closure_1[10]);
                              const obj1 = { description: SPAN_ORIGIN_AUTO_APP_START.description, start_timestamp: SPAN_ORIGIN_AUTO_APP_START.start_timestamp_ms / 1000, timestamp: SPAN_ORIGIN_AUTO_APP_START.end_timestamp_ms / 1000, origin: description(closure_1[8]).SPAN_ORIGIN_AUTO_APP_START };
                              return obj7.setMainThreadInfo(description(closure_1[6]).createChildSpanJSON(description, obj1));
                            }
                          });
                        }(spanJSON, tmp21.spans)));
                        const push = spans.push;
                        warnResult2 = push.apply(spans, callback(warnResult2));
                        warnResult2 = lib;
                        warnResult2 = contexts;
                        const debug13 = lib(contexts[1]).debug;
                        warnResult2 = globalThis;
                        const _JSON = JSON;
                        warnResult2 = debug13.log("[AppStart] Added app start spans to transaction event.", JSON.stringify(warnResult2, undefined, 2));
                        if ("cold" === tmp21.type) {
                          warnResult2 = lib;
                          warnResult2 = contexts;
                          let APP_START_WARM2 = lib(contexts[9]).APP_START_COLD;
                        } else {
                          warnResult2 = lib;
                          warnResult2 = contexts;
                          APP_START_WARM2 = lib(contexts[9]).APP_START_WARM;
                        }
                        const obj4 = { value: diff, unit: "millisecond" };
                        let measurements = lib.measurements;
                        warnResult2 = lib;
                        if (!measurements) {
                          measurements = {};
                        }
                        warnResult2.measurements = measurements;
                        warnResult2 = lib;
                        lib.measurements[APP_START_WARM2] = obj4;
                        warnResult2 = lib;
                        warnResult2 = contexts;
                        const debug14 = lib(contexts[1]).debug;
                        const _JSON2 = JSON;
                        warnResult2 = debug14.log("[AppStart] Added app start measurement to transaction event.", JSON.stringify(obj4, undefined, 2));
                        const obj7 = lib(contexts[6]);
                        const tmp50 = lib;
                      }
                    }
                  }
                  const debug7 = lib(contexts[1]).debug;
                  debug7.warn("[AppStart] App start timestamp is too far in the past to be used for app start span.");
                } else {
                  const debug6 = lib(contexts[1]).debug;
                  debug6.warn("[AppStart] Javascript failed to record app start end. `_setAppStartEndData` was not called nor could the bundle start be found.");
                }
              } else {
                const debug5 = lib(contexts[1]).debug;
                debug5.warn("[AppStart] App start timestamp could not be loaded from the native layer.");
              }
            }
          } else {
            const debug4 = lib(contexts[1]).debug;
            debug4.warn("[AppStart] Failed to retrieve the app start metrics from the native layer.");
          }
        } else {
          const debug = lib(contexts[1]).debug;
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
    let closure_1;
    let closure_2 = true;
    let closure_3 = false;
    let closure_4 = false;
    let closure_5;
    function recordFirstStartedActiveRootSpanId(spanContext) {
      if (!closure_5) {
        if (obj.isRootSpan(spanContext)) {
          setFirstStartedActiveRootSpanId(spanContext.spanContext().spanId);
        }
        const obj = callback(closure_1[4]);
      }
    }
    function setFirstStartedActiveRootSpanId(spanId) {
      let closure_5 = spanId;
      const debug = callback(closure_1[1]).debug;
      debug.log("[AppStart] First started active root span id recorded.", closure_5);
    }
    let closure_7 = setFirstStartedActiveRootSpanId;
    const obj = {
      name: closure_4,
      setup(getOptions) {
          let closure_1 = getOptions;
          if (!getOptions.getOptions().enableAppStartTracking) {
            let closure_2 = false;
            const debug = callback(closure_1[1]).debug;
            debug.warn("[AppStart] App start tracking is disabled.");
          }
          getOptions.on("spanStart", recordFirstStartedActiveRootSpanId);
        },
      afterAllSetup(client) {
          if (!closure_4) {
            closure_4 = true;
            const appRegistryIntegration = callback(closure_1[3]).getAppRegistryIntegration(client);
            if (!tmp5) {
              appRegistryIntegration.onRunApplication(() => {
                const debug = callback(closure_1[1]).debug;
                const log = debug.log;
                if (closure_3) {
                  log("[AppStartIntegration] Resetting app start data flushed flag based on runApplication call.");
                  closure_3 = false;
                  let closure_5;
                } else {
                  log("[AppStartIntegration] Waiting for initial app start was flush, before updating based on runApplication call.");
                }
              });
            }
            const obj = callback(closure_1[3]);
            const tmp5 = null === appRegistryIntegration || undefined === appRegistryIntegration;
          }
        },
      processEvent(arg0) {
          let closure_0 = arg0;
          return callback2(undefined, undefined, undefined, function*() {
            let tmp = !closure_2;
            if (closure_2) {
              tmp = type;
            }
            if (!tmp) {
              tmp = "transaction" !== type.type;
            }
            if (tmp) {
              return type;
            } else {
              return yield closure_8(closure_0);
            }
          });
        },
      captureStandaloneAppStart() {
          return callback2(this, undefined, undefined, function*() {
            if (closure_1) {
              const debug = callback(closure_1[1]).debug;
              const log = debug.log;
              if (callback) {
                log("[AppStart] App start tracking standalone root span (transaction).");
                let endFrames;
                if (null != closure_5) {
                  endFrames = closure_5.endFrames;
                }
                if (!endFrames) {
                  if (callback(closure_1[2]).NATIVE.enableNative) {
                    const NATIVE = callback(closure_1[2]).NATIVE;
                    const tmp16 = yield NATIVE.fetchNativeFrames();
                    const debug2 = callback(closure_1[1]).debug;
                    debug2.log("[AppStart] Captured end frames for standalone app start.", tmp16);
                    let timestampMs;
                    if (null != closure_5) {
                      timestampMs = closure_5.timestampMs;
                    }
                    let result = timestampMs;
                    if (!timestampMs) {
                      let obj = callback(closure_1[1]);
                      result = 1000 * obj.timestampInSeconds();
                    }
                    obj = { timestampMs: result, endFrames: tmp16 };
                    callback2(obj);
                  }
                }
                while (true) {
                  let tmp30 = callback;
                  let tmp31 = closure_1;
                  let obj3 = callback(closure_1[1]);
                  obj = {};
                  let num4 = 5;
                  obj.op = callback(closure_1[5]).UI_LOAD;
                  let startInactiveSpanResult = obj3.startInactiveSpan(obj);
                  if (startInactiveSpanResult instanceof callback(closure_1[1]).SentryNonRecordingSpan) {
                    break;
                  } else {
                    let tmp33 = callback;
                    let tmp34 = closure_1;
                    let num5 = 4;
                    let obj5 = callback(closure_1[4]);
                    let obj6 = callback(closure_1[1]);
                    let setEndTimeValueResult = obj5.setEndTimeValue(startInactiveSpanResult, obj6.timestampInSeconds());
                    let tmp36 = closure_1;
                    let str5 = "spanEnd";
                    let emitResult = closure_1.emit("spanEnd", startInactiveSpanResult);
                    let obj7 = callback(closure_1[4]);
                    let result1 = obj7.convertSpanToTransaction(startInactiveSpanResult);
                    if (result1) {
                      let tmp42 = closure_8;
                      let tmp43 = yield closure_8(result1);
                      if (!result1.spans) {
                        break;
                      } else {
                        let num6 = 0;
                        if (0 === result1.spans.length) {
                          break;
                        } else {
                          let tmp44 = callback;
                          let tmp45 = closure_1;
                          let obj8 = callback(closure_1[1]);
                          let scope = obj8.getCapturedScopesOnSpan(startInactiveSpanResult).scope;
                          if (!scope) {
                            let tmp46 = callback;
                            let tmp47 = closure_1;
                            let obj9 = callback(closure_1[1]);
                            scope = obj9.getCurrentScope();
                          }
                          let captureEventResult = scope.captureEvent(result1);
                          // break
                        }
                      }
                    } else {
                      let tmp39 = callback;
                      let tmp40 = closure_1;
                      let debug3 = callback(closure_1[1]).debug;
                      let str6 = "[AppStart] Failed to convert App Start span to transaction.";
                      let warnResult = debug3.warn("[AppStart] Failed to convert App Start span to transaction.");
                      // break
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
