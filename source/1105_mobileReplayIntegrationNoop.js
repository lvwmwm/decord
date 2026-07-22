// Module ID: 1105
// Function ID: 12617
// Name: mobileReplayIntegrationNoop
// Dependencies: []

// Module 1105 (mobileReplayIntegrationNoop)
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
let closure_3 = "MobileReplay";
let closure_4 = {};
function mobileReplayIntegrationNoop() {
  return {
    name: closure_3,
    options: closure_4,
    getReplayId() {
      return null;
    }
  };
}
arg5.MOBILE_REPLAY_INTEGRATION_NAME = "MobileReplay";
arg5.mobileReplayIntegration = function mobileReplayIntegration() {
  function updateCachedReplayId(arg0, arg1, arg2, arg3) {
    let closure_1 = arg0;
  }
  function getCachedReplayId() {
    if (null !== closure_1) {
      return closure_1;
    } else {
      const NATIVE = first(closure_1[2]).NATIVE;
      const currentReplayId = NATIVE.getCurrentReplayId();
      if (currentReplayId) {
        closure_1 = currentReplayId;
      }
      return currentReplayId;
    }
  }
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const arg1 = first;
    let obj = arg1(closure_1[0]);
    if (obj.isExpoGo()) {
      const debug = arg1(closure_1[1]).debug;
      const _HermesInternal = HermesInternal;
      debug.warn("[Sentry] " + getCachedReplayId + " is not supported in Expo Go. Use EAS Build or `expo prebuild` to enable it.");
    }
    if (obj2.notMobileOs()) {
      const debug2 = arg1(closure_1[1]).debug;
      const _HermesInternal2 = HermesInternal;
      debug2.warn("[Sentry] " + getCachedReplayId + " is not supported on this platform.");
    }
    const obj2 = arg1(closure_1[0]);
    if (!obj3.isExpoGo()) {
      if (!obj4.notMobileOs()) {
        const _Object = Object;
        const _Object2 = Object;
        const merged = Object.assign(Object.assign({}, closure_4), first);
        if (tmp23) {
          merged.enableViewRendererV2 = first.enableExperimentalViewRenderer;
        }
        closure_1 = null;
        obj = {
          name: getCachedReplayId,
          setup(on) {
                  if (obj.hasHooks(on)) {
                    const NATIVE = first(currentReplayId[2]).NATIVE;
                    const currentReplayId = NATIVE.getCurrentReplayId();
                    on.on("createDsc", (replay_id) => {
                      if (!replay_id.replay_id) {
                        const tmp2 = callback();
                        if (tmp2) {
                          replay_id.replay_id = tmp2;
                        }
                      }
                    });
                    on.on("processMetric", (attributes) => {
                      const tmp = callback();
                      if (tmp) {
                        attributes.attributes = attributes.attributes || {};
                        attributes.attributes.replay_id = tmp;
                      }
                    });
                    on.on("beforeAddBreadcrumb", first(currentReplayId[5]).enrichXhrBreadcrumbsForMobileReplay);
                  }
                },
          processEvent(arg0, arg1) {
                  const first = arg0;
                  let closure_1 = arg1;
                  return updateCachedReplayId(this, undefined, undefined, function*() {
                    const exception = lib.exception;
                    let values;
                    if (null !== exception) {
                      if (undefined !== exception) {
                        values = exception.values;
                      }
                    }
                    if (values) {
                      if (lib.exception.values.length > 0) {
                        if (lib.beforeErrorSampling) {
                          if (false === lib.beforeErrorSampling(lib, closure_1)) {
                            const debug = lib(closure_1[1]).debug;
                            const _HermesInternal = HermesInternal;
                            debug.log("[Sentry] " + closure_3 + " not sent; beforeErrorSampling conditions not met for event " + lib.event_id + ".");
                            return lib;
                          }
                        }
                        const NATIVE = lib(closure_1[2]).NATIVE;
                        let obj = lib(closure_1[3]);
                        const tmp18 = yield NATIVE.captureReplay(obj.isHardCrash(closure_0));
                        if (tmp18) {
                          exception(tmp18);
                          const debug4 = lib(closure_1[1]).debug;
                          const _HermesInternal4 = HermesInternal;
                          debug4.log("[Sentry] " + closure_3 + " Captured recording replay " + tmp18 + " for event " + lib.event_id + ".");
                          lib.contexts = lib.contexts || {};
                          const _Object3 = Object;
                          const _Object4 = Object;
                          obj = { replay_id: tmp18 };
                          lib.contexts.replay = Object.assign(Object.assign({}, lib.contexts.replay), obj);
                          const tmp44 = lib;
                        } else {
                          const NATIVE2 = lib(closure_1[2]).NATIVE;
                          const currentReplayId = NATIVE2.getCurrentReplayId();
                          if (currentReplayId) {
                            tmp22(currentReplayId);
                            const debug3 = lib(closure_1[1]).debug;
                            const _HermesInternal3 = HermesInternal;
                            debug3.log("[Sentry] " + closure_3 + " assign already recording replay " + currentReplayId + " for event " + lib.event_id + ".");
                            lib.contexts = lib.contexts || {};
                            const _Object = Object;
                            const _Object2 = Object;
                            obj = { replay_id: currentReplayId };
                            lib.contexts.replay = Object.assign(Object.assign({}, lib.contexts.replay), obj);
                            const tmp34 = lib;
                          } else {
                            tmp22(null);
                            const debug2 = lib(closure_1[1]).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[Sentry] " + closure_3 + " not sampled for event " + lib.event_id + ".");
                          }
                        }
                        return lib;
                      }
                    }
                    return lib;
                  });
                },
          options: merged,
          getReplayId() {
                  return getCachedReplayId();
                }
        };
        return obj;
      }
      const obj4 = arg1(closure_1[0]);
    }
    return mobileReplayIntegrationNoop();
  }
  first = closure_4;
};
