// Module ID: 1143
// Function ID: 13023
// Name: isDeadlineExceeded
// Dependencies: [77, 1144, 794, 977, 1131, 1132, 1134, 1136, 1145, 1133]
// Exports: timeToDisplayIntegration

// Module 1143 (isDeadlineExceeded)
import _defineProperty from "_defineProperty";

const require = arg1;
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
const TimeToDisplay = "TimeToDisplay";
function isDeadlineExceeded(arg0) {
  return arg0 > 30000;
}

export const INTEGRATION_NAME = "TimeToDisplay";
export const timeToDisplayIntegration = function timeToDisplayIntegration() {
  let c0 = false;
  return {
    name: TimeToDisplay,
    afterAllSetup(getIntegrationByName) {
      const reactNavigationIntegration = callback(outer1_1[1]).getReactNavigationIntegration(getIntegrationByName);
      let prop;
      if (null !== reactNavigationIntegration) {
        if (undefined !== reactNavigationIntegration) {
          prop = reactNavigationIntegration.options.enableTimeToInitialDisplayForPreloadedRoutes;
        }
      }
      let closure_0 = null !== prop && undefined !== prop && prop;
    },
    processEvent(arg0) {
      let closure_0 = arg0;
      return outer1_3(undefined, undefined, undefined, function*() {
        if ("transaction" !== outer1_0.type) {
          return outer1_0;
        } else {
          let contexts = outer1_0.contexts;
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
            let start_timestamp = outer1_0.start_timestamp;
            if (start_timestamp) {
              let spans = outer1_0.spans;
              if (!spans) {
                spans = [];
              }
              outer1_0.spans = spans;
              let measurements = outer1_0.measurements;
              if (!measurements) {
                measurements = {};
              }
              outer1_0.measurements = measurements;
              let obj = { event: outer1_0, rootSpanId: span_id, transactionStartTimestampSeconds: start_timestamp, enableTimeToInitialDisplayForPreloadedRoutes: closure_0 };
              const tmp20 = yield (function addTimeToInitialDisplay(arg0) {
                let closure_1;
                let _defineProperty;
                let closure_3;
                let closure_4;
                ({ event: closure_1, rootSpanId: _defineProperty, transactionStartTimestampSeconds: closure_3, enableTimeToInitialDisplayForPreloadedRoutes: closure_4 } = arg0);
                return outer4_3(this, undefined, undefined, function*() {
                  let concat;
                  let NATIVE = callback(outer6_1[3]).NATIVE;
                  let str7Result = globalThis;
                  const tmp3 = yield NATIVE.popTimeToDisplayFor("ttid-" + outer1_2);
                  let spans = outer1_1.spans;
                  if (!spans) {
                    spans = [];
                  }
                  outer1_1.spans = spans;
                  spans = outer1_1.spans;
                  let outer1_0 = spans;
                  let found;
                  if (null !== spans) {
                    if (concat !== outer1_0) {
                      found = outer1_0.find(() => { ... });
                    }
                  }
                  if (found) {
                    if (concat === found.status) {
                      if (!tmp3) {
                        let debug = callback(outer6_1[2]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[" + outer6_4 + "] Ttid span already exists and is ok.", found);
                        return found;
                      }
                    }
                  }
                  if (!tmp3) {
                    let debug2 = callback(outer6_1[2]).debug;
                    let _HermesInternal2 = HermesInternal;
                    debug2.log("[" + outer6_4 + "] No manual ttid end timestamp found for span " + outer1_2 + ".");
                    let obj = { event: outer1_1, rootSpanId: outer1_2, transactionStartTimestampSeconds: outer1_3, enableTimeToInitialDisplayForPreloadedRoutes: outer1_4 };
                    (function addAutomaticTimeToInitialDisplay() { ... })(obj);
                  }
                  let str7 = null == found;
                  let status;
                  if (!str7) {
                    status = found.status;
                  }
                  if (!status) {
                    obj = { op: callback(outer6_1[4]).UI_LOAD_INITIAL_DISPLAY, description: "Time To Initial Display", start_timestamp: outer1_3, timestamp: tmp3, origin: callback(outer6_1[6]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY, parent_span_id: outer1_2, data: outer6_2({}, callback(outer6_1[7]).SPAN_THREAD_NAME, callback(outer6_1[7]).SPAN_THREAD_NAME_JAVASCRIPT) };
                    let spanJSON = callback(outer6_1[5]).createSpanJSON(obj);
                    const debug3 = callback(outer6_1[2]).debug;
                    let _HermesInternal3 = HermesInternal;
                    debug3.log("[" + outer6_4 + "] Added ttid span to transaction.", spanJSON);
                    const spans1 = outer1_1.spans;
                    spans1.push(spanJSON);
                    let obj2 = callback(outer6_1[5]);
                  } else {
                    str7 = "ok";
                  }
                  found.status = str7;
                  found.timestamp = tmp3;
                  const debug4 = callback(outer6_1[2]).debug;
                  str7 = debug4.log;
                  concat = str7Result.HermesInternal.concat;
                  str7Result = str7(concat(outer6_4, "] Updated existing ttid span."), found);
                  spanJSON = found;
                });
              })(obj);
              obj = { event: outer1_0, rootSpanId: span_id, transactionStartTimestampSeconds: start_timestamp, ttidSpan: tmp20 };
              const tmp22 = yield (function addTimeToFullDisplay(arg0) {
                let closure_1;
                let _defineProperty;
                let closure_3;
                let closure_4;
                ({ event: closure_1, rootSpanId: _defineProperty, transactionStartTimestampSeconds: closure_3, ttidSpan: closure_4 } = arg0);
                return outer4_3(this, undefined, undefined, function*() {
                  const NATIVE = callback(outer6_1[3]).NATIVE;
                  const tmp = yield NATIVE.popTimeToDisplayFor("ttfd-" + outer1_2);
                  if (outer1_4) {
                    if (tmp) {
                      let spans = outer1_1.spans;
                      if (!spans) {
                        spans = [];
                      }
                      outer1_1.spans = spans;
                      spans = outer1_1.spans;
                      const outer1_0 = spans;
                      let found;
                      if (null !== spans) {
                        if (undefined !== outer1_0) {
                          found = outer1_0.find(() => { ... });
                        }
                      }
                      let timestamp = outer1_4.timestamp;
                      if (timestamp) {
                        timestamp = tmp < outer1_4.timestamp;
                      }
                      if (timestamp) {
                        timestamp = outer1_4.timestamp;
                      }
                      let timestamp2 = tmp;
                      if (timestamp) {
                        timestamp2 = outer1_4.timestamp;
                      }
                      let status;
                      const result = 1000 * (timestamp2 - outer1_3);
                      if (null != found) {
                        status = found.status;
                      }
                      if (status) {
                        if ("ok" !== found.status) {
                          found.status = "ok";
                          found.timestamp = timestamp2;
                          const debug2 = callback(outer6_1[2]).debug;
                          const _HermesInternal2 = HermesInternal;
                          debug2.log("[" + outer6_4 + "] Updated existing ttfd span.", found);
                          let spanJSON = found;
                        }
                        return spanJSON;
                      }
                      let obj = callback(outer6_1[5]);
                      obj = {};
                      let str2 = "ok";
                      if (outer6_5(result)) {
                        str2 = "deadline_exceeded";
                      }
                      obj.status = str2;
                      obj.op = callback(outer6_1[4]).UI_LOAD_FULL_DISPLAY;
                      obj.description = "Time To Full Display";
                      obj.start_timestamp = outer1_3;
                      obj.timestamp = timestamp2;
                      obj.origin = callback(outer6_1[6]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY;
                      obj.parent_span_id = outer1_2;
                      obj.data = outer6_2({}, callback(outer6_1[7]).SPAN_THREAD_NAME, callback(outer6_1[7]).SPAN_THREAD_NAME_JAVASCRIPT);
                      spanJSON = obj.createSpanJSON(obj);
                      const debug = callback(outer6_1[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[" + outer6_4 + "] Added ttfd span to transaction.", spanJSON);
                      const spans1 = outer1_1.spans;
                      spans1.push(spanJSON);
                      const tmp2 = outer1_1;
                    }
                  }
                });
              })(obj);
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
                outer1_0.measurements.time_to_initial_display = obj1;
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
                  let result = 1000 * (tmp22.timestamp - tmp22.start_timestamp);
                  measurements = outer1_0.measurements;
                  if (outer3_5(result)) {
                    if (measurements.time_to_initial_display) {
                      outer1_0.measurements.time_to_full_display = outer1_0.measurements.time_to_initial_display;
                    }
                  } else {
                    let obj2 = { value: result, unit: "millisecond" };
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
              timestamp = outer1_0.timestamp;
              let num8 = -1;
              if (null !== timestamp) {
                num8 = -1;
                if (undefined !== timestamp) {
                  num8 = timestamp;
                }
              }
              const bound = Math.max(num6, num7, num8);
              if (-1 !== bound) {
                outer1_0.timestamp = bound;
              }
              return outer1_0;
            } else {
              let debug2 = callback(outer3_1[2]).debug;
              let _HermesInternal2 = HermesInternal;
              debug2.warn("[" + outer3_4 + "] No transaction start timestamp found in transaction.");
              return outer1_0;
            }
          } else {
            let debug = callback(outer3_1[2]).debug;
            let _HermesInternal = HermesInternal;
            debug.warn("[" + outer3_4 + "] No root span id found in transaction.");
            return outer1_0;
          }
        }
      });
    }
  };
};
