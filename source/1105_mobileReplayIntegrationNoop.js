// Module ID: 1105
// Function ID: 12619
// Name: mobileReplayIntegrationNoop
// Dependencies: [978, 794, 977, 989, 1106, 1107]

// Module 1105 (mobileReplayIntegrationNoop)
const require = arg1;
let dependencyMap = arg6;
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
const MobileReplay = "MobileReplay";
let closure_4 = { maskAllText: true, maskAllImages: true, maskAllVectors: true, enableExperimentalViewRenderer: false, enableViewRendererV2: true, enableFastViewRendering: false, screenshotStrategy: "pixelCopy" };
function mobileReplayIntegrationNoop() {
  return {
    name: MobileReplay,
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
    if (null !== currentReplayId) {
      return currentReplayId;
    } else {
      const NATIVE = first(_null[2]).NATIVE;
      currentReplayId = NATIVE.getCurrentReplayId();
      return currentReplayId;
    }
  }
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let obj = first(978);
    if (obj.isExpoGo()) {
      let debug = first(794).debug;
      let _HermesInternal = HermesInternal;
      debug.warn("[Sentry] " + getCachedReplayId + " is not supported in Expo Go. Use EAS Build or `expo prebuild` to enable it.");
    }
    if (obj2.notMobileOs()) {
      let debug2 = first(794).debug;
      let _HermesInternal2 = HermesInternal;
      debug2.warn("[Sentry] " + getCachedReplayId + " is not supported on this platform.");
    }
    obj2 = first(978);
    if (!obj3.isExpoGo()) {
      if (!obj4.notMobileOs()) {
        let _Object = Object;
        let _Object2 = Object;
        const merged = Object.assign(Object.assign({}, closure_4), first);
        if (tmp23) {
          merged.enableViewRendererV2 = first.enableExperimentalViewRenderer;
        }
        const dependencyMap = null;
        obj = {
          name: getCachedReplayId,
          setup(on) {
                  if (obj.hasHooks(on)) {
                    const NATIVE = first(_null[2]).NATIVE;
                    const currentReplayId = NATIVE.getCurrentReplayId();
                    on.on("createDsc", (replay_id) => {
                      if (!replay_id.replay_id) {
                        const tmp2 = outer1_3();
                        if (tmp2) {
                          replay_id.replay_id = tmp2;
                        }
                      }
                    });
                    on.on("processMetric", (attributes) => {
                      const tmp = outer1_3();
                      if (tmp) {
                        attributes.attributes = attributes.attributes || {};
                        attributes.attributes.replay_id = tmp;
                      }
                    });
                    on.on("beforeAddBreadcrumb", first(_null[5]).enrichXhrBreadcrumbsForMobileReplay);
                  }
                },
          processEvent(arg0, arg1) {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  return updateCachedReplayId(this, undefined, undefined, function*() {
                    const exception = outer1_0.exception;
                    const outer1_2 = exception;
                    let values;
                    if (null !== exception) {
                      if (undefined !== outer1_2) {
                        values = outer1_2.values;
                      }
                    }
                    if (values) {
                      if (outer1_0.exception.values.length > 0) {
                        if (closure_0.beforeErrorSampling) {
                          if (false === closure_0.beforeErrorSampling(outer1_0, outer1_1)) {
                            const debug = first(794).debug;
                            const _HermesInternal = HermesInternal;
                            debug.log("[Sentry] " + getCachedReplayId + " not sent; beforeErrorSampling conditions not met for event " + outer1_0.event_id + ".");
                            return outer1_0;
                          }
                        }
                        const NATIVE = first(977).NATIVE;
                        let obj = first(989);
                        const tmp18 = yield NATIVE.captureReplay(obj.isHardCrash(outer1_0));
                        if (tmp18) {
                          outer2_2(tmp18);
                          const debug4 = first(794).debug;
                          const _HermesInternal4 = HermesInternal;
                          debug4.log("[Sentry] " + getCachedReplayId + " Captured recording replay " + tmp18 + " for event " + outer1_0.event_id + ".");
                          outer1_0.contexts = outer1_0.contexts || {};
                          const _Object3 = Object;
                          const _Object4 = Object;
                          obj = { replay_id: tmp18 };
                          outer1_0.contexts.replay = Object.assign(Object.assign({}, outer1_0.contexts.replay), obj);
                          const tmp44 = outer1_0;
                        } else {
                          const NATIVE2 = first(977).NATIVE;
                          const currentReplayId = NATIVE2.getCurrentReplayId();
                          if (currentReplayId) {
                            tmp22(currentReplayId);
                            const debug3 = first(794).debug;
                            const _HermesInternal3 = HermesInternal;
                            debug3.log("[Sentry] " + getCachedReplayId + " assign already recording replay " + currentReplayId + " for event " + outer1_0.event_id + ".");
                            outer1_0.contexts = outer1_0.contexts || {};
                            const _Object = Object;
                            const _Object2 = Object;
                            obj = { replay_id: currentReplayId };
                            outer1_0.contexts.replay = Object.assign(Object.assign({}, outer1_0.contexts.replay), obj);
                            const tmp34 = outer1_0;
                          } else {
                            tmp22(null);
                            const debug2 = first(794).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[Sentry] " + getCachedReplayId + " not sampled for event " + outer1_0.event_id + ".");
                          }
                        }
                        return outer1_0;
                      }
                    }
                    return outer1_0;
                  });
                },
          options: merged,
          getReplayId() {
                  return getCachedReplayId();
                }
        };
        return obj;
      }
      obj4 = first(978);
    }
    return mobileReplayIntegrationNoop();
  }
  first = closure_4;
};
