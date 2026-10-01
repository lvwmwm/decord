// Module ID: 881
// Function ID: 882
// Name: reactNativeErrorHandlersIntegration
// Dependencies: [867, 681, 682, 678, 882]
// Exports: reactNativeErrorHandlersIntegration

// Module 881 (reactNativeErrorHandlersIntegration)
import _mod678 from "module_678" /* 678 */;
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 681 */;
import _mod682 from "module_682" /* 682 */;

let c2, c3;

let obj = {
  onUnhandled(id, originalException) {
    let obj2;
    let syntheticError;
    obj = { data: obj2, originalException, syntheticException: syntheticError, mechanism: { handled: true, type: "onunhandledrejection" } };
    obj2 = { id };
    const captureException = _mod682.captureException;
    _mod682;
    syntheticError = undefined;
    const obj3 = _mod678;
    if (!obj3.isErrorLike(originalException)) {
      const tmpResult = _mod678;
      syntheticError = tmpResult.createSyntheticError();
    }
    captureException(originalException, obj);
  },
  onHandled(displayId) {

  }
};

export const reactNativeErrorHandlersIntegration = () => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = {
    name: "ReactNativeErrorHandlers",
    setupOnce() {
      function setupUnhandledRejectionsTracking(patchGlobalPromise) {
        function attachUnhandledRejectionHandler() {
          obj = closure_1_0(closure_1_1[4]);
          const result = obj.requireRejectionTracking();
          const obj2 = { allRejections: true, onUnhandled: closure_1_3.onUnhandled, onHandled: closure_1_3.onHandled };
          result.enable(obj2);
        }
        try {
          let tmp = closure_1_0;
          let tmp2 = closure_1_0;
          obj = closure_1_0(closure_1_1[0]);
          if (obj.isHermesEnabled()) {
            const _HermesInternal = tmp2(tmp4[1]).RN_GLOBAL_OBJ.HermesInternal;
            let prop;
            if (null !== _HermesInternal) {
              if (undefined !== tmp7) {
                prop = _HermesInternal.enablePromiseRejectionTracker;
              }
            }
            if (prop) {
              let _HermesInternal1;
              if (null !== tmp2(closure_1_1[1]).RN_GLOBAL_OBJ) {
                if (undefined !== tmp2(closure_1_1[1]).RN_GLOBAL_OBJ) {
                  _HermesInternal1 = tmp2(tmp4[1]).RN_GLOBAL_OBJ.HermesInternal;
                }
              }
              let hasPromise;
              if (null !== _HermesInternal1) {
                if (undefined !== _HermesInternal1) {
                  hasPromise = tmp18.hasPromise;
                }
              }
              let obj2 = hasPromise;
              let callResult;
              if (null !== hasPromise) {
                if (undefined !== obj2) {
                  callResult = obj2.call(_HermesInternal1);
                }
              }
              if (callResult) {
                const debug3 = tmp2(tmp4[2]).debug;
                debug3.log("Using Hermes native promise rejection tracking");
                const _HermesInternal2 = tmp2(tmp4[1]).RN_GLOBAL_OBJ.HermesInternal;
                const obj3 = { allRejections: true, onUnhandled: null, onHandled: null };
                ({ onUnhandled: obj7.onUnhandled, onHandled: obj7.onHandled } = closure_1_3);
                let result = _HermesInternal2.enablePromiseRejectionTracker(obj3);
                const debug4 = tmp2(tmp4[2]).debug;
                debug4.log("Unhandled promise rejections will be caught by Sentry.");
              }
            }
          }
          const tmp2Result = tmp2(closure_1_1[0]);
          if (tmp2Result.isWeb()) {
            const debug2 = tmp2(tmp4[2]).debug;
            debug2.log("Using Browser JS promise rejection tracking for React Native Web");
            const tmp2Result4 = tmp2(closure_1_1[2]);
            const result1 = tmp2Result4.addGlobalUnhandledRejectionInstrumentationHandler((originalException) => {
              let syntheticError;
              obj = { originalException, syntheticException: syntheticError, mechanism: { handled: false, type: "onunhandledrejection" } };
              const captureException = closure_1_0(closure_1_1[2]).captureException;
              closure_1_0(closure_1_1[2]);
              syntheticError = undefined;
              const obj2 = closure_1_0(closure_1_1[3]);
              const tmp = closure_1_0;
              const tmp2 = closure_1_1;
              if (!obj2.isErrorLike(originalException)) {
                const tmpResult = tmp(tmp2[3]);
                syntheticError = tmpResult.createSyntheticError();
              }
              captureException(originalException, obj);
            });
          } else {
            const tmp29 = patchGlobalPromise;
            if (tmp29) {
              const tmp2Result5 = tmp2(closure_1_1[4]);
              tmp2Result5.polyfillPromise();
              attachUnhandledRejectionHandler();
              const tmp2Result6 = tmp2(closure_1_1[4]);
              tmp2Result6.checkPromiseAndWarn();
            } else {
              const debug = tmp2(tmp4[2]).debug;
              debug.log("Unhandled promise rejections will not be caught by Sentry.");
            }
          }
        } catch (err) {
          const debug5 = closure_1_0(closure_1_1[2]).debug;
          debug5.warn("Failed to set up promise rejection tracking. Unhandled promise rejections will not be caught by Sentry.See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
        }
      }
      const merged = Object.assign({ onerror: true, onunhandledrejection: true, patchGlobalPromise: true }, obj);
      if (merged.onunhandledrejection) {
        let tmp2 = setupUnhandledRejectionsTracking(merged.patchGlobalPromise);
      }
      if (merged.onerror) {
        let c0 = false;
        let tmp3 = require;
        const tmp4 = dependencyMap;
        const _ErrorUtils = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.ErrorUtils;
        if (_ErrorUtils) {
          let callResult;
          if (null !== _ErrorUtils.getGlobalHandler) {
            if (undefined !== _ErrorUtils.getGlobalHandler) {
              callResult = getGlobalHandler.call(_ErrorUtils);
            }
          }
          _ErrorUtils.setGlobalHandler((arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            return closure_1_2(undefined, undefined, undefined, function*(arg0, value) {
              let currentScope;
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  let client;
                  let obj7;
                  let closure_2;
                  c3 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      let c1 = 0;
                      c0 = tmp;
                      client = undefined;
                      obj7 = undefined;
                      closure_2 = undefined;
                      const tmp47 = closure_1;
                      if (tmp47) {
                        const tmp22 = c0;
                        if (tmp22) {
                          const debug2 = originalException(closure_1[2]).debug;
                          debug2.log("Encountered multiple fatals in a row. The latest:", originalException);
                          c3 = 3;
                          const obj6 = { value: undefined, done: true };
                          return obj6;
                        } else {
                          c0 = true;
                        }
                      }
                      const obj4 = originalException(closure_1[2]);
                      client = obj4.getClient();
                      if (client) {
                        obj7 = { originalException, attachments: currentScope.getScopeData().attachments };
                        const obj8 = originalException(closure_1[2]);
                        currentScope = obj8.getCurrentScope();
                        c2 = 1;
                        c3 = 1;
                        const obj9 = { value: client.eventFromException(originalException, obj7), done: false };
                        return obj9;
                      } else {
                        let debug = originalException(closure_1[2]).debug;
                        const errorResult = debug.error("Sentry client is missing, the error event might be lost.", originalException);
                        c1(originalException, closure_1);
                        c3 = 3;
                        const obj10 = { value: undefined, done: true };
                        return obj10;
                      }
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj11 = { value, done: true };
                    return obj11;
                  } else {
                    closure_2 = value;
                    if (closure_129_1) {
                      closure_2.level = "fatal";
                      const obj2 = originalException(closure_1[2]);
                      const result = obj2.addExceptionMechanism(closure_2, { handled: false, type: "onerror" });
                    } else {
                      closure_2.level = "error";
                      obj = originalException(closure_1[2]);
                      const result1 = obj.addExceptionMechanism(closure_2, { handled: true, type: "generic" });
                    }
                    client.captureEvent(closure_2, obj7);
                    const flush = client.flush;
                    const num3 = client.getOptions().shutdownTimeout || 2000;
                    const flushResult = flush(num3);
                    flushResult.then(() => {
                      c1(originalException, closure_1_1);
                    }, (arg0) => {
                      const debug = originalException(closure_1_1[2]).debug;
                      debug.error("[ReactNativeErrorHandlers] Error while flushing the event cache after uncaught error.", arg0);
                    });
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp39) {
                  c3 = 3;
                  throw tmp39;
                }
              }
            });
          });
        } else {
          let debug = tmp3(682).debug;
          debug.warn("ErrorUtils not found. Can be caused by different environment for example react-native-web.");
        }
      }
    }
  };
  return obj2;
};
