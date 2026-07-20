// Module ID: 992
// Function ID: 10641
// Name: reactNativeErrorHandlersIntegration
// Dependencies: []

// Module 992 (reactNativeErrorHandlersIntegration)
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
let closure_3 = {
  onUnhandled(id, originalException) {
    let obj = originalException(arg6[2]);
    obj = { data: obj, originalException };
    obj = { id };
    let syntheticError;
    if (!obj4.isErrorLike(originalException)) {
      syntheticError = originalException(arg6[3]).createSyntheticError();
      const obj5 = originalException(arg6[3]);
    }
    obj.syntheticException = syntheticError;
    obj.mechanism = {};
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
    const obj = {
      name: "ReactNativeErrorHandlers",
      setupOnce() {
          function setup(onunhandledrejection) {
            if (onunhandledrejection.onunhandledrejection) {
              function setupUnhandledRejectionsTracking(patchGlobalPromise) {
                let obj = callback(closure_1[0]);
                if (obj.isHermesEnabled()) {
                  let _HermesInternal = callback(closure_1[1]).RN_GLOBAL_OBJ.HermesInternal;
                  let prop;
                  if (null !== _HermesInternal) {
                    if (undefined !== tmp3) {
                      prop = _HermesInternal.enablePromiseRejectionTracker;
                    }
                  }
                  if (prop) {
                    _HermesInternal = undefined;
                    if (null !== callback(closure_1[1]).RN_GLOBAL_OBJ) {
                      if (undefined !== callback(closure_1[1]).RN_GLOBAL_OBJ) {
                        _HermesInternal = callback(closure_1[1]).RN_GLOBAL_OBJ.HermesInternal;
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
                      const debug3 = callback(closure_1[2]).debug;
                      debug3.log("Using Hermes native promise rejection tracking");
                      const _HermesInternal2 = callback(closure_1[1]).RN_GLOBAL_OBJ.HermesInternal;
                      obj = { allRejections: true, onUnhandled: closure_3.onUnhandled, onHandled: closure_3.onHandled };
                      const result = _HermesInternal2.enablePromiseRejectionTracker(obj);
                      const debug4 = callback(closure_1[2]).debug;
                      debug4.log("Unhandled promise rejections will be caught by Sentry.");
                    }
                  }
                }
                if (obj3.isWeb()) {
                  const debug2 = callback(closure_1[2]).debug;
                  debug2.log("Using Browser JS promise rejection tracking for React Native Web");
                  const result1 = callback(closure_1[2]).addGlobalUnhandledRejectionInstrumentationHandler((originalException) => {
                    let obj = callback(closure_1[2]);
                    obj = { originalException };
                    let syntheticError;
                    if (!obj3.isErrorLike(originalException)) {
                      syntheticError = callback(closure_1[3]).createSyntheticError();
                      const obj4 = callback(closure_1[3]);
                    }
                    obj.syntheticException = syntheticError;
                    obj.mechanism = { alignItems: false, justifyContent: false };
                    obj.captureException(originalException, obj);
                  });
                  const obj9 = callback(closure_1[2]);
                } else if (patchGlobalPromise) {
                  let tmp21Result = tmp21(tmp22[4]);
                  tmp21Result.polyfillPromise();
                  tmp21Result = tmp21(tmp22[4]);
                  const result2 = tmp21Result.requireRejectionTracking();
                  obj = { allRejections: true, onUnhandled: closure_3.onUnhandled, onHandled: closure_3.onHandled };
                  result2.enable(obj);
                  tmp21(tmp22[4]).checkPromiseAndWarn();
                  const tmp21Result1 = tmp21(tmp22[4]);
                } else {
                  const debug = tmp21(tmp22[2]).debug;
                  debug.log("Unhandled promise rejections will not be caught by Sentry.");
                }
              }(onunhandledrejection.patchGlobalPromise);
            }
            if (onunhandledrejection.onerror) {
              function setupErrorUtilsGlobalHandler() {
                const self = this;
                let closure_1 = false;
                const _ErrorUtils = self(closure_1[1]).RN_GLOBAL_OBJ.ErrorUtils;
                if (_ErrorUtils) {
                  let callResult;
                  if (null !== _ErrorUtils.getGlobalHandler) {
                    if (undefined !== getGlobalHandler) {
                      callResult = getGlobalHandler.call(_ErrorUtils);
                    }
                  }
                  _ErrorUtils.setGlobalHandler((arg0, arg1) => {
                    const self = arg0;
                    let closure_1 = arg1;
                    return callResult(self, undefined, undefined, /* F10658 */ function*() { ... });
                  });
                } else {
                  const debug = self(closure_1[2]).debug;
                  debug.warn("ErrorUtils not found. Can be caused by different environment for example react-native-web.");
                }
              }();
            }
          }(Object.assign({}, closure_0));
        }
    };
    return obj;
  }
};
