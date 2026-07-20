// Module ID: 1138
// Function ID: 12946
// Name: fetchNativeFrames
// Dependencies: []

// Module 1138 (fetchNativeFrames)
function fetchNativeFrames() {
  return new Promise((arg0, arg1) => {
    let closure_2 = false;
    const timeout = setTimeout(() => {
      if (!closure_2) {
        closure_2 = true;
        arg1("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = arg0(arg1[0]).NATIVE;
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
    arg1 = arg0;
    const arg6 = arg1;
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
let closure_3 = "NativeFrames";
function nativeFramesIntegration() {
  const callback = null;
  let obj = { ttl: 60000 };
  const asyncExpiringMap = new callback(arg6[1]).AsyncExpiringMap(obj);
  const arg6 = asyncExpiringMap;
  obj = { ttl: 2000 };
  const asyncExpiringMap1 = new callback(arg6[1]).AsyncExpiringMap(obj);
  function fetchStartFramesForSpan(spanContext) {
    const spanId = spanContext.spanContext().spanId;
    let str = "child";
    if (obj.isRootSpan(spanContext)) {
      str = "root";
    }
    const debug = _null(asyncExpiringMap[2]).debug;
    debug.log("[" + fetchStartFramesForSpan + "] Fetching frames for " + str + " span start (" + spanId + ").");
    const obj = _null(asyncExpiringMap[3]);
    const result = asyncExpiringMap.set(spanId, new Promise((arg0) => {
      const promise = callback();
      callback().then((arg0) => arg0(arg0)).then(undefined, (arg0) => {
        const debug = arg0(closure_1[2]).debug;
        debug.log("[" + closure_3 + "] Error while fetching native frames.", arg0);
        arg0(null);
      });
    }));
  }
  function fetchEndFramesForSpan(arg0) {
    let closure_0 = arg0;
    return asyncExpiringMap1(undefined, undefined, undefined, function*() {
      let obj;
      obj = obj(set[2]);
      const timestampInSecondsResult = obj.timestampInSeconds();
      obj = timestampInSecondsResult;
      const spanId = obj.spanContext().spanId;
      if (set.has(spanId)) {
        if (obj2.isRootSpan(obj)) {
          const debug = obj(set[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[" + closure_3 + "] Fetch frames for root span end (" + spanId + ").");
          const promise = new Promise((arg0) => {
            const promise = callback();
            callback().then((nativeFrames) => {
              nativeFrames({ timestamp: nativeFrames, nativeFrames });
            }).then(undefined, (arg0) => {
              const debug = arg0(closure_1[2]).debug;
              debug.log("[" + closure_3 + "] Error while fetching native frames.", arg0);
              arg0(null);
            });
          });
          const result = closure_2.set(tmp2, promise);
        }
        const tmp21 = yield closure_1.get(tmp2);
        if (tmp21) {
          const tmp30 = yield closure_5();
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
            const attr = obj.setAttribute("frames.total", tmp33);
            const attr1 = obj.setAttribute("frames.slow", diff1);
            const attr2 = obj.setAttribute("frames.frozen", diff2);
            const debug3 = obj(set[2]).debug;
            const _HermesInternal3 = HermesInternal;
            debug3.log("[" + closure_3 + "] Attached frame data to span " + tmp2 + ": total=" + diff + ", slow=" + diff1 + ", frozen=" + diff2);
          }
          if (!obj3.isRootSpan(obj)) {
            obj = { timestamp: timestampInSecondsResult, nativeFrames: tmp30 };
          }
          const obj3 = obj(set[3]);
        } else {
          const debug2 = obj(set[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("[" + closure_3 + "] No start frames found for span " + tmp2 + ", skipping frame data.");
        }
        const obj2 = obj(set[3]);
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
        if ("transaction" === lib.type) {
          if (lib.transaction) {
            if (lib.contexts) {
              if (lib.contexts.trace) {
                if (lib.timestamp) {
                  if (lib.contexts.trace.span_id) {
                    const op = lib.contexts.trace.op;
                    const span_id = lib.contexts.trace.span_id;
                    const tmp8 = yield closure_1.pop(span_id);
                    if (tmp8) {
                      const tmp16 = yield closure_2.pop(span_id);
                      if (tmp16) {
                        if (callback(tmp16.timestamp, lib.timestamp)) {
                          const debug4 = lib(closure_1[2]).debug;
                          const _HermesInternal4 = HermesInternal;
                          debug4.log("[" + closure_3 + "] Using frames from root span end (spanId, " + span_id + ").");
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
                              const debug6 = lib(closure_1[2]).debug;
                              const _HermesInternal6 = HermesInternal;
                              debug6.warn("[" + closure_3 + "] Detected zero slow or frozen frames. Not adding measurements to spanId (" + span_id + ").");
                              let tmp52 = lib;
                            }
                            return tmp52;
                          }
                        }
                        const debug5 = lib(closure_1[2]).debug;
                        const _JSON = JSON;
                        const _HermesInternal5 = HermesInternal;
                        debug5.log("[" + closure_3 + "] Adding measurements to " + op + " transaction " + lib.transaction + ": " + JSON.stringify(obj, undefined, 2));
                        let measurements = lib.measurements;
                        if (null === measurements) {
                          measurements = {};
                        }
                        lib.measurements = Object.assign(Object.assign({}, measurements), obj);
                        tmp52 = lib;
                        const tmp46 = lib;
                      }
                      if (lib) {
                        if (callback(lib.timestamp, lib.timestamp)) {
                          const debug3 = lib(closure_1[2]).debug;
                          const _HermesInternal3 = HermesInternal;
                          debug3.log("[" + closure_3 + "] Using native frames from last child span end (spanId, " + span_id + ").");
                          nativeFrames = lib.nativeFrames;
                        }
                      }
                      const debug2 = lib(closure_1[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.warn("[" + closure_3 + "] Frames were collected within larger than margin of error delay for spanId (" + span_id + "). Dropping the inaccurate values.");
                      return lib;
                    } else {
                      const debug = lib(closure_1[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.warn("[" + closure_3 + "] Start frames of transaction " + lib.transaction + " (eventId, " + lib.event_id + ") are missing, but the transaction already ended.");
                      return lib;
                    }
                  }
                }
              }
            }
          }
        }
        return lib;
      });
    }
  };
  return obj;
}
arg5.createNativeFramesIntegrations = function createNativeFramesIntegrations(enableNative2) {
  if (!enableNative2) {
    if (arg1(arg6[0]).NATIVE.enableNative) {
      const NATIVE = arg1(arg6[0]).NATIVE;
      const result = NATIVE.disableNativeFramesTracking();
    }
  }
  return nativeFramesIntegration();
};
arg5.nativeFramesIntegration = nativeFramesIntegration;
