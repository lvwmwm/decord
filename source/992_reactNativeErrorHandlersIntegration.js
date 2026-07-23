// Module ID: 992
// Function ID: 10646
// Name: reactNativeErrorHandlersIntegration
// Dependencies: [978, 793, 794, 790, 993]

// Module 992 (reactNativeErrorHandlersIntegration)
const require = arg1;
const dependencyMap = arg6;
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
let closure_3 = {
  onUnhandled(id, originalException) {
    let obj = require(794) /* registerSpanErrorInstrumentation */;
    obj = { data: obj, originalException };
    obj = { id };
    let syntheticError;
    if (!obj4.isErrorLike(originalException)) {
      syntheticError = require(790) /* createSyntheticError */.createSyntheticError();
      const obj5 = require(790) /* createSyntheticError */;
    }
    obj.syntheticException = syntheticError;
    obj.mechanism = { handled: true, type: "onunhandledrejection" };
    obj.captureException(originalException, obj);
  },
  onHandled(displayId, error) {

  }
};
arg5.reactNativeErrorHandlersIntegration = function reactNativeErrorHandlersIntegration(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {};
    let obj = {
      name: "ReactNativeErrorHandlers",
      setupOnce() {
          (function setup(onunhandledrejection) {
            if (onunhandledrejection.onunhandledrejection) {
              (function setupUnhandledRejectionsTracking(patchGlobalPromise) {
                let obj = callback(outer3_1[0]);
                if (obj.isHermesEnabled()) {
                  let _HermesInternal = callback(outer3_1[1]).RN_GLOBAL_OBJ.HermesInternal;
                  let prop;
                  if (null !== _HermesInternal) {
                    if (undefined !== tmp3) {
                      prop = _HermesInternal.enablePromiseRejectionTracker;
                    }
                  }
                  if (prop) {
                    _HermesInternal = undefined;
                    if (null !== callback(outer3_1[1]).RN_GLOBAL_OBJ) {
                      if (undefined !== callback(outer3_1[1]).RN_GLOBAL_OBJ) {
                        _HermesInternal = callback(outer3_1[1]).RN_GLOBAL_OBJ.HermesInternal;
                      }
                    }
                    let hasPromise;
                    if (null !== _HermesInternal) {
                      if (undefined !== tmp14) {
                        hasPromise = tmp14.hasPromise;
                      }
                    }
                    let callResult;
                    if (null !== hasPromise) {
                      if (undefined !== obj2) {
                        callResult = obj2.call(_HermesInternal);
                      }
                    }
                    if (callResult) {
                      const debug3 = callback(outer3_1[2]).debug;
                      debug3.log("Using Hermes native promise rejection tracking");
                      const _HermesInternal2 = callback(outer3_1[1]).RN_GLOBAL_OBJ.HermesInternal;
                      obj = { allRejections: true, onUnhandled: outer3_3.onUnhandled, onHandled: outer3_3.onHandled };
                      const result = _HermesInternal2.enablePromiseRejectionTracker(obj);
                      const debug4 = callback(outer3_1[2]).debug;
                      debug4.log("Unhandled promise rejections will be caught by Sentry.");
                    }
                  }
                }
                if (obj3.isWeb()) {
                  const debug2 = callback(outer3_1[2]).debug;
                  debug2.log("Using Browser JS promise rejection tracking for React Native Web");
                  const result1 = callback(outer3_1[2]).addGlobalUnhandledRejectionInstrumentationHandler((originalException) => {
                    let obj = callback(outer4_1[2]);
                    obj = { originalException };
                    let syntheticError;
                    if (!obj3.isErrorLike(originalException)) {
                      syntheticError = callback(outer4_1[3]).createSyntheticError();
                      const obj4 = callback(outer4_1[3]);
                    }
                    obj.syntheticException = syntheticError;
                    obj.mechanism = { handled: false, type: "onunhandledrejection" };
                    obj.captureException(originalException, obj);
                  });
                  const obj9 = callback(outer3_1[2]);
                } else if (patchGlobalPromise) {
                  let tmp21Result = tmp21(tmp22[4]);
                  tmp21Result.polyfillPromise();
                  tmp21Result = tmp21(tmp22[4]);
                  const result2 = tmp21Result.requireRejectionTracking();
                  obj = { allRejections: true, onUnhandled: outer3_3.onUnhandled, onHandled: outer3_3.onHandled };
                  result2.enable(obj);
                  tmp21(tmp22[4]).checkPromiseAndWarn();
                  const tmp21Result1 = tmp21(tmp22[4]);
                } else {
                  const debug = tmp21(tmp22[2]).debug;
                  debug.log("Unhandled promise rejections will not be caught by Sentry.");
                }
              })(onunhandledrejection.patchGlobalPromise);
            }
            if (onunhandledrejection.onerror) {
              (function setupErrorUtilsGlobalHandler() {
                const self = this;
                let c1 = false;
                const _ErrorUtils = callback(outer3_1[1]).RN_GLOBAL_OBJ.ErrorUtils;
                if (_ErrorUtils) {
                  let callResult;
                  if (null !== _ErrorUtils.getGlobalHandler) {
                    if (undefined !== getGlobalHandler) {
                      callResult = getGlobalHandler.call(_ErrorUtils);
                    }
                  }
                  let closure_2 = callResult;
                  _ErrorUtils.setGlobalHandler((arg0, arg1) => {
                    let closure_0 = arg0;
                    let closure_1 = arg1;
                    return outer4_2(closure_0, undefined, undefined, /* F10663 */ function*() { ... });
                  });
                } else {
                  let debug = callback(outer3_1[2]).debug;
                  debug.warn("ErrorUtils not found. Can be caused by different environment for example react-native-web.");
                }
              })();
            }
          })(Object.assign({ onerror: true, onunhandledrejection: true, patchGlobalPromise: true }, closure_0));
        }
    };
    return obj;
  }
};
