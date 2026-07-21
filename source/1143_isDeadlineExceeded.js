// Module ID: 1143
// Function ID: 13022
// Name: isDeadlineExceeded
// Dependencies: []
// Exports: timeToDisplayIntegration

// Module 1143 (isDeadlineExceeded)
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
let closure_4 = "TimeToDisplay";
function isDeadlineExceeded(arg0) {
  return arg0 > 30000;
}

export const INTEGRATION_NAME = "TimeToDisplay";
export const timeToDisplayIntegration = function timeToDisplayIntegration() {
  let closure_0 = false;
  return {
    name: closure_4,
    afterAllSetup(getIntegrationByName) {
      const reactNavigationIntegration = callback(closure_1[1]).getReactNavigationIntegration(getIntegrationByName);
      let prop;
      if (null !== reactNavigationIntegration) {
        if (undefined !== reactNavigationIntegration) {
          prop = reactNavigationIntegration.options.enableTimeToInitialDisplayForPreloadedRoutes;
        }
      }
      const callback = null !== prop && undefined !== prop && prop;
    },
    processEvent(arg0) {
      let closure_0 = arg0;
      return callback2(undefined, undefined, undefined, function*() {
        if ("transaction" !== lib.type) {
          return lib;
        } else {
          const contexts = lib.contexts;
          let trace;
          if (null !== contexts) {
            if (undefined !== contexts) {
              trace = contexts.trace;
            }
          }
          let span_id;
          if (null !== trace) {
            if (undefined !== trace) {
              span_id = trace.span_id;
            }
          }
          if (span_id) {
            let start_timestamp = lib.start_timestamp;
            if (start_timestamp) {
              let spans = lib.spans;
              if (!spans) {
                spans = [];
              }
              lib.spans = spans;
              let measurements = lib.measurements;
              if (!measurements) {
                measurements = {};
              }
              lib.measurements = measurements;
              let obj = { event: lib, rootSpanId: span_id, transactionStartTimestampSeconds: start_timestamp, enableTimeToInitialDisplayForPreloadedRoutes: lib };
              const tmp20 = yield function addTimeToInitialDisplay(arg0) {
                ({ event: closure_1, rootSpanId: closure_2, transactionStartTimestampSeconds: closure_3, enableTimeToInitialDisplayForPreloadedRoutes: closure_4 } = arg0);
                return callback(this, undefined, undefined, function*() {
                  let concat;
                  const NATIVE = spans(closure_1[3]).NATIVE;
                  let str7Result = globalThis;
                  const tmp3 = yield NATIVE.popTimeToDisplayFor("ttid-" + closure_2);
                  let spans = closure_1.spans;
                  if (!spans) {
                    spans = [];
                  }
                  closure_1.spans = spans;
                  spans = closure_1.spans;
                  let found;
                  if (null !== spans) {
                    if (concat !== spans) {
                      found = spans.find(() => { ... });
                    }
                  }
                  if (found) {
                    if (concat === found.status) {
                      if (!tmp3) {
                        const debug = spans(closure_1[2]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[" + closure_4 + "] Ttid span already exists and is ok.", found);
                        return found;
                      }
                    }
                  }
                  if (!tmp3) {
                    const debug2 = spans(closure_1[2]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log("[" + closure_4 + "] No manual ttid end timestamp found for span " + callback + ".");
                    let obj = { event: closure_1, rootSpanId: callback, transactionStartTimestampSeconds: closure_3, enableTimeToInitialDisplayForPreloadedRoutes: closure_4 };
                    function addAutomaticTimeToInitialDisplay() { ... }(obj);
                  }
                  let str7 = null == found;
                  let status;
                  if (!str7) {
                    status = found.status;
                  }
                  if (!status) {
                    obj = { op: spans(closure_1[4]).UI_LOAD_INITIAL_DISPLAY, description: "Time To Initial Display", start_timestamp: closure_3, timestamp: tmp3, origin: spans(closure_1[6]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY, parent_span_id: callback, data: callback({}, spans(closure_1[7]).SPAN_THREAD_NAME, spans(closure_1[7]).SPAN_THREAD_NAME_JAVASCRIPT) };
                    let spanJSON = spans(closure_1[5]).createSpanJSON(obj);
                    const debug3 = spans(closure_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[" + closure_4 + "] Added ttid span to transaction.", spanJSON);
                    const spans1 = closure_1.spans;
                    spans1.push(spanJSON);
                    const obj2 = spans(closure_1[5]);
                  } else {
                    str7 = "ok";
                  }
                  found.status = str7;
                  found.timestamp = tmp3;
                  const debug4 = spans(closure_1[2]).debug;
                  str7 = debug4.log;
                  concat = str7Result.HermesInternal.concat;
                  str7Result = str7(concat(closure_4, "] Updated existing ttid span."), found);
                  spanJSON = found;
                });
              }(obj);
              obj = { event: lib, rootSpanId: span_id, transactionStartTimestampSeconds: start_timestamp, ttidSpan: tmp20 };
              const tmp22 = yield function addTimeToFullDisplay(arg0) {
                ({ event: closure_1, rootSpanId: closure_2, transactionStartTimestampSeconds: closure_3, ttidSpan: closure_4 } = arg0);
                return callback(this, undefined, undefined, function*() {
                  const NATIVE = spans(closure_1[3]).NATIVE;
                  const tmp = yield NATIVE.popTimeToDisplayFor("ttfd-" + closure_2);
                  if (closure_4) {
                    if (tmp) {
                      let spans = closure_1.spans;
                      if (!spans) {
                        spans = [];
                      }
                      closure_1.spans = spans;
                      spans = closure_1.spans;
                      let found;
                      if (null !== spans) {
                        if (undefined !== spans) {
                          found = spans.find(() => { ... });
                        }
                      }
                      let timestamp = closure_4.timestamp;
                      if (timestamp) {
                        timestamp = tmp < closure_4.timestamp;
                      }
                      if (timestamp) {
                        timestamp = closure_4.timestamp;
                      }
                      let timestamp2 = tmp;
                      if (timestamp) {
                        timestamp2 = closure_4.timestamp;
                      }
                      let status;
                      const result = 1000 * (timestamp2 - closure_3);
                      if (null != found) {
                        status = found.status;
                      }
                      if (status) {
                        if ("ok" !== found.status) {
                          found.status = "ok";
                          found.timestamp = timestamp2;
                          const debug2 = spans(closure_1[2]).debug;
                          const _HermesInternal2 = HermesInternal;
                          debug2.log("[" + closure_4 + "] Updated existing ttfd span.", found);
                          let spanJSON = found;
                        }
                        return spanJSON;
                      }
                      let obj = spans(closure_1[5]);
                      obj = {};
                      let str2 = "ok";
                      if (callback2(result)) {
                        str2 = "deadline_exceeded";
                      }
                      obj.status = str2;
                      obj.op = spans(closure_1[4]).UI_LOAD_FULL_DISPLAY;
                      obj.description = "Time To Full Display";
                      obj.start_timestamp = closure_3;
                      obj.timestamp = timestamp2;
                      obj.origin = spans(closure_1[6]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY;
                      obj.parent_span_id = callback;
                      obj.data = callback({}, spans(closure_1[7]).SPAN_THREAD_NAME, spans(closure_1[7]).SPAN_THREAD_NAME_JAVASCRIPT);
                      spanJSON = obj.createSpanJSON(obj);
                      const debug = spans(closure_1[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[" + closure_4 + "] Added ttfd span to transaction.", spanJSON);
                      const spans1 = closure_1.spans;
                      spans1.push(spanJSON);
                      const tmp2 = closure_1;
                    }
                  }
                });
              }(obj);
              start_timestamp = undefined;
              if (null != tmp20) {
                start_timestamp = tmp20.start_timestamp;
              }
              if (start_timestamp) {
                let timestamp;
                if (null != tmp20) {
                  timestamp = tmp20.timestamp;
                }
                start_timestamp = timestamp;
              }
              if (start_timestamp) {
                const obj1 = { value: 1000 * (tmp20.timestamp - tmp20.start_timestamp), unit: "millisecond" };
                lib.measurements.time_to_initial_display = obj1;
              }
              let start_timestamp1;
              if (null != tmp22) {
                start_timestamp1 = tmp22.start_timestamp;
              }
              if (start_timestamp1) {
                let timestamp1;
                if (null != tmp22) {
                  timestamp1 = tmp22.timestamp;
                }
                if (timestamp1) {
                  const result = 1000 * (tmp22.timestamp - tmp22.start_timestamp);
                  measurements = lib.measurements;
                  if (callback(result)) {
                    if (measurements.time_to_initial_display) {
                      lib.measurements.time_to_full_display = lib.measurements.time_to_initial_display;
                    }
                  } else {
                    const obj2 = { value: result, unit: "millisecond" };
                    measurements.time_to_full_display = obj2;
                  }
                }
              }
              let timestamp2;
              if (null != tmp20) {
                timestamp2 = tmp20.timestamp;
              }
              let num6 = -1;
              if (null !== timestamp2) {
                num6 = -1;
                if (undefined !== timestamp2) {
                  num6 = timestamp2;
                }
              }
              let timestamp3;
              if (null != tmp22) {
                timestamp3 = tmp22.timestamp;
              }
              let num7 = -1;
              if (null !== timestamp3) {
                num7 = -1;
                if (undefined !== timestamp3) {
                  num7 = timestamp3;
                }
              }
              timestamp = lib.timestamp;
              let num8 = -1;
              if (null !== timestamp) {
                num8 = -1;
                if (undefined !== timestamp) {
                  num8 = timestamp;
                }
              }
              const bound = Math.max(num6, num7, num8);
              if (-1 !== bound) {
                lib.timestamp = bound;
              }
              return lib;
            } else {
              const debug2 = lib(closure_1[2]).debug;
              const _HermesInternal2 = HermesInternal;
              debug2.warn("[" + closure_4 + "] No transaction start timestamp found in transaction.");
              return lib;
            }
          } else {
            const debug = lib(closure_1[2]).debug;
            const _HermesInternal = HermesInternal;
            debug.warn("[" + closure_4 + "] No root span id found in transaction.");
            return lib;
          }
        }
      });
    }
  };
};
