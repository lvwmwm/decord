// Module ID: 1138
// Function ID: 12952
// Name: fetchNativeFrames
// Dependencies: [977, 1139, 794, 1098]

// Module 1138 (fetchNativeFrames)
const require = arg1;
const dependencyMap = arg6;
function fetchNativeFrames() {
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
    const NATIVE = outer1_0(outer1_1[0]).NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    nativeFrames.then((arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
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
        clearTimeout(closure_3);
        c2 = true;
        callback2(arg0);
      }
    });
  });
}
function isClose(arg0, arg1) {
  return Math.abs(arg0 - arg1) < 0.05;
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
const NativeFrames = "NativeFrames";
function nativeFramesIntegration() {
  const _require = null;
  let obj = { ttl: 60000 };
  asyncExpiringMap = new _require(asyncExpiringMap[1]).AsyncExpiringMap(obj);
  obj = { ttl: 2000 };
  const asyncExpiringMap1 = new _require(asyncExpiringMap[1]).AsyncExpiringMap(obj);
  function fetchStartFramesForSpan(spanContext) {
    const spanId = spanContext.spanContext().spanId;
    let str = "child";
    if (obj.isRootSpan(spanContext)) {
      str = "root";
    }
    let debug = _null(asyncExpiringMap[2]).debug;
    debug.log("[" + fetchStartFramesForSpan + "] Fetching frames for " + str + " span start (" + spanId + ").");
    obj = _null(asyncExpiringMap[3]);
    const result = asyncExpiringMap.set(spanId, new Promise((arg0) => {
      let closure_0 = arg0;
      const promise = outer2_5();
      outer2_5().then((arg0) => callback(arg0)).then(undefined, (arg0) => {
        const debug = callback(asyncExpiringMap[2]).debug;
        debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
        callback(null);
      });
    }));
  }
  function fetchEndFramesForSpan(arg0) {
    let closure_0 = arg0;
    return asyncExpiringMap1(undefined, undefined, undefined, function*() {
      let callback;
      let obj = callback(asyncExpiringMap[2]);
      const timestampInSecondsResult = obj.timestampInSeconds();
      callback = timestampInSecondsResult;
      const spanId = outer1_0.spanContext().spanId;
      if (outer2_1.has(spanId)) {
        if (obj2.isRootSpan(outer1_0)) {
          let debug = callback(asyncExpiringMap[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[" + fetchStartFramesForSpan + "] Fetch frames for root span end (" + spanId + ").");
          let promise = new Promise((arg0) => {
            let closure_0 = arg0;
            const promise = outer4_5();
            outer4_5().then((nativeFrames) => {
              callback({ timestamp: callback, nativeFrames });
            }).then(undefined, (arg0) => {
              const debug = callback(asyncExpiringMap[2]).debug;
              debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
              callback(null);
            });
          });
          const result = outer2_2.set(tmp2, promise);
        }
        const tmp21 = yield outer2_1.get(tmp2);
        if (tmp21) {
          const tmp30 = yield outer3_5();
          const diff = tmp30.totalFrames - tmp21.totalFrames;
          const diff1 = tmp30.slowFrames - tmp21.slowFrames;
          const diff2 = tmp30.frozenFrames - tmp21.frozenFrames;
          let tmp37 = tmp36;
          if (diff <= 0) {
            tmp37 = diff1 > 0;
          }
          let tmp39 = tmp37;
          if (!tmp37) {
            tmp39 = diff2 > 0;
          }
          if (tmp39) {
            const attr = outer1_0.setAttribute("frames.total", tmp33);
            const attr1 = outer1_0.setAttribute("frames.slow", diff1);
            const attr2 = outer1_0.setAttribute("frames.frozen", diff2);
            const debug3 = callback(asyncExpiringMap[2]).debug;
            const _HermesInternal3 = HermesInternal;
            debug3.log("[" + fetchStartFramesForSpan + "] Attached frame data to span " + tmp2 + ": total=" + diff + ", slow=" + diff1 + ", frozen=" + diff2);
          }
          if (!obj3.isRootSpan(outer1_0)) {
            obj = { timestamp: timestampInSecondsResult, nativeFrames: tmp30 };
            let closure_0 = obj;
          }
          obj3 = callback(asyncExpiringMap[3]);
        } else {
          const debug2 = callback(asyncExpiringMap[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("[" + fetchStartFramesForSpan + "] No start frames found for span " + tmp2 + ", skipping frame data.");
        }
        obj2 = callback(asyncExpiringMap[3]);
      }
    });
  }
  obj = {
    name: fetchStartFramesForSpan,
    setup(on) {
      if (_null(asyncExpiringMap[0]).NATIVE.enableNative) {
        const NATIVE = tmp(tmp2[0]).NATIVE;
        const result = NATIVE.enableNativeFramesTracking();
        on.on("spanStart", fetchStartFramesForSpan);
        on.on("spanEnd", fetchEndFramesForSpan);
      } else {
        const debug = tmp(tmp2[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("[" + fetchStartFramesForSpan + "] This is not available on the Web, Expo Go and other platforms without native modules.");
      }
    },
    processEvent(arg0) {
      let closure_0 = arg0;
      return asyncExpiringMap1(undefined, undefined, undefined, function*() {
        if ("transaction" === outer1_0.type) {
          if (outer1_0.transaction) {
            if (outer1_0.contexts) {
              if (outer1_0.contexts.trace) {
                if (outer1_0.timestamp) {
                  if (outer1_0.contexts.trace.span_id) {
                    const op = outer1_0.contexts.trace.op;
                    const span_id = outer1_0.contexts.trace.span_id;
                    const tmp8 = yield outer2_1.pop(span_id);
                    if (tmp8) {
                      const tmp16 = yield outer2_2.pop(span_id);
                      if (tmp16) {
                        if (outer3_6(tmp16.timestamp, outer1_0.timestamp)) {
                          const debug4 = lib(asyncExpiringMap[2]).debug;
                          const _HermesInternal4 = HermesInternal;
                          debug4.log("[" + fetchStartFramesForSpan + "] Using frames from root span end (spanId, " + span_id + ").");
                          let nativeFrames = tmp16.nativeFrames;
                        }
                        let obj = {};
                        obj = { value: nativeFrames.totalFrames - tmp8.totalFrames, unit: "none" };
                        obj.frames_total = obj;
                        obj = { value: nativeFrames.frozenFrames - tmp8.frozenFrames, unit: "none" };
                        obj.frames_frozen = obj;
                        const obj1 = { value: nativeFrames.slowFrames - tmp8.slowFrames, unit: "none" };
                        obj.frames_slow = obj1;
                        if (obj.frames_frozen.value <= 0) {
                          if (obj.frames_slow.value <= 0) {
                            if (obj.frames_total.value <= 0) {
                              const debug6 = lib(asyncExpiringMap[2]).debug;
                              const _HermesInternal6 = HermesInternal;
                              debug6.warn("[" + fetchStartFramesForSpan + "] Detected zero slow or frozen frames. Not adding measurements to spanId (" + span_id + ").");
                              let tmp52 = outer1_0;
                            }
                            return tmp52;
                          }
                        }
                        const debug5 = lib(asyncExpiringMap[2]).debug;
                        const _JSON = JSON;
                        const _HermesInternal5 = HermesInternal;
                        debug5.log("[" + fetchStartFramesForSpan + "] Adding measurements to " + op + " transaction " + outer1_0.transaction + ": " + JSON.stringify(obj, undefined, 2));
                        let measurements = outer1_0.measurements;
                        if (null === measurements) {
                          measurements = {};
                        }
                        outer1_0.measurements = Object.assign(Object.assign({}, measurements), obj);
                        tmp52 = outer1_0;
                        const tmp46 = outer1_0;
                      }
                      if (lib) {
                        if (outer3_6(lib.timestamp, outer1_0.timestamp)) {
                          const debug3 = lib(asyncExpiringMap[2]).debug;
                          const _HermesInternal3 = HermesInternal;
                          debug3.log("[" + fetchStartFramesForSpan + "] Using native frames from last child span end (spanId, " + span_id + ").");
                          nativeFrames = lib.nativeFrames;
                        }
                      }
                      const debug2 = lib(asyncExpiringMap[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.warn("[" + fetchStartFramesForSpan + "] Frames were collected within larger than margin of error delay for spanId (" + span_id + "). Dropping the inaccurate values.");
                      return outer1_0;
                    } else {
                      const debug = lib(asyncExpiringMap[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.warn("[" + fetchStartFramesForSpan + "] Start frames of transaction " + outer1_0.transaction + " (eventId, " + outer1_0.event_id + ") are missing, but the transaction already ended.");
                      return outer1_0;
                    }
                  }
                }
              }
            }
          }
        }
        return outer1_0;
      });
    }
  };
  return obj;
}
arg5.createNativeFramesIntegrations = function createNativeFramesIntegrations(enableNative2) {
  if (!enableNative2) {
    if (require(977) /* getRNSentryModule */.NATIVE.enableNative) {
      const NATIVE = require(977) /* getRNSentryModule */.NATIVE;
      const result = NATIVE.disableNativeFramesTracking();
    }
  }
  return nativeFramesIntegration();
};
arg5.nativeFramesIntegration = nativeFramesIntegration;
