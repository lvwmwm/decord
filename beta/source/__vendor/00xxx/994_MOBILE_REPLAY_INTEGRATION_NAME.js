// Module ID: 994
// Function ID: 995
// Name: MOBILE_REPLAY_INTEGRATION_NAME
// Dependencies: [867, 682, 866, 878, 995, 996]
// Exports: mobileReplayIntegration

// Module 994 (MOBILE_REPLAY_INTEGRATION_NAME)
import _mod995 from "module_995" /* 995 */;

const require = globalThis.__r;
let _require, c4, c5, closure_0;

let tmp;
const _mod866 = tmp(866);
const enrichXhrBreadcrumbsForMobileReplay = tmp(996);
const MobileReplay = "MobileReplay";
const options = { maskAllText: true, maskAllImages: true, maskAllVectors: true, enableExperimentalViewRenderer: false, enableViewRendererV2: true, enableFastViewRendering: false, screenshotStrategy: "pixelCopy" };
function mobileReplayIntegrationNoop() {

}

export const MOBILE_REPLAY_INTEGRATION_NAME = "MobileReplay";
export const mobileReplayIntegration = () => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = options;
  }
  _require = tmp;
  let currentReplayId;
  function updateCachedReplayId(arg0) {
    currentReplayId = arg0;
  }
  const tmp2 = _require;
  const tmp3 = currentReplayId;
  let obj = require("module_867");
  if (obj.isExpoGo()) {
    let debug = tmp2(tmp3[1]).debug;
    const tmp4 = MobileReplay;
    let _HermesInternal = HermesInternal;
    debug.warn("[Sentry] " + MobileReplay + " is not supported in Expo Go. Use EAS Build or `expo prebuild` to enable it.");
  }
  const tmp2Result = tmp2(tmp3[0]);
  if (tmp2Result.notMobileOs()) {
    let debug2 = tmp2(tmp3[1]).debug;
    let tmp7 = MobileReplay;
    let _HermesInternal2 = HermesInternal;
    debug2.warn("[Sentry] " + MobileReplay + " is not supported on this platform.");
  }
  const tmp2Result3 = tmp2(tmp3[0]);
  if (!tmp2Result3.isExpoGo()) {
    const tmp2Result4 = tmp2(tmp3[0]);
    if (!tmp2Result4.notMobileOs()) {
      let _Object = Object;
      let _Object2 = Object;
      const merged = Object.assign(Object.assign({}, options), tmp);
      const tmp13 = undefined === tmp.enableViewRendererV2 && undefined !== tmp.enableExperimentalViewRenderer;
      if (tmp13) {
        merged.enableViewRendererV2 = tmp.enableExperimentalViewRenderer;
      }
      currentReplayId = null;
      let obj2 = {
        name: MobileReplay,
        setup(on) {
              let tmp = require;
              const obj = _mod995;
              if (obj.hasHooks(on)) {
                let NATIVE = _mod866.NATIVE;
                currentReplayId = NATIVE.getCurrentReplayId();
                on.on("createDsc", (replay_id) => {
                  if (!replay_id.replay_id) {
                    let tmp = currentReplayId;
                    if (null === currentReplayId) {
                      const NATIVE = closure_0(currentReplayId[2]).NATIVE;
                      currentReplayId = NATIVE.getCurrentReplayId();
                      tmp = currentReplayId && currentReplayId;
                    }
                    if (tmp) {
                      replay_id.replay_id = tmp;
                    }
                  }
                });
                on.on("processMetric", (attributes) => {
                  let tmp = currentReplayId;
                  if (null === currentReplayId) {
                    const NATIVE = closure_0(currentReplayId[2]).NATIVE;
                    currentReplayId = NATIVE.getCurrentReplayId();
                    tmp = currentReplayId && currentReplayId;
                  }
                  if (tmp) {
                    attributes.attributes = attributes.attributes || {};
                    attributes.attributes.replay_id = tmp;
                  }
                });
                on.on("beforeAddBreadcrumb", enrichXhrBreadcrumbsForMobileReplay.enrichXhrBreadcrumbsForMobileReplay);
              }
            },
        processEvent(arg0, arg1) {
              closure_0 = arg0;
              let closure_1 = arg1;
              return updateCachedReplayId(this, undefined, undefined, function*(arg0, value) {
                let closure_2;
                let obj9;
                if (c5 === 2) {
                  c5 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  let c3;
                  try {
                    let replay_id;
                    c5 = 2;
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        replay_id = undefined;
                        const exception = replay_id.exception;
                        let values;
                        if (null !== exception) {
                          if (undefined !== exception) {
                            values = exception.values;
                          }
                        }
                        if (values) {
                          if (replay_id.exception.values.length > 0) {
                            const obj8 = replay_id;
                            if (replay_id.beforeErrorSampling) {
                              c3 = 1;
                              if (false === obj8.beforeErrorSampling(replay_id, replay_id)) {
                                const debug5 = replay_id(replay_id[1]).debug;
                                const _HermesInternal5 = HermesInternal;
                                debug5.log("[Sentry] " + MobileReplay + " not sent; beforeErrorSampling conditions not met for event " + replay_id.event_id + ".");
                                c3 = 0;
                                c5 = 3;
                                const obj3 = { value: replay_id, done: true };
                                return obj3;
                              } else {
                                c3 = 0;
                              }
                            }
                          }
                        }
                        c5 = 3;
                        const obj4 = { value: replay_id, done: true };
                        return obj4;
                      }
                    } else if (1 === c4) {
                      c3 = 0;
                      const debug4 = replay_id(replay_id[1]).debug;
                      const _HermesInternal4 = HermesInternal;
                      debug4.error("[Sentry] " + MobileReplay + " beforeErrorSampling callback threw an error, proceeding with replay capture", tmp75);
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      replay_id = value;
                      if (replay_id) {
                        tmp75(replay_id);
                        const debug3 = replay_id(replay_id[1]).debug;
                        const _HermesInternal3 = HermesInternal;
                        debug3.log("[Sentry] " + MobileReplay + " Captured recording replay " + replay_id + " for event " + closure_129_0.event_id + ".");
                        let contexts = closure_129_0.contexts;
                        const tmp43 = closure_129_0;
                        if (!contexts) {
                          contexts = {};
                        }
                        tmp43.contexts = contexts;
                        const _Object3 = Object;
                        const _Object4 = Object;
                        const obj6 = { replay_id };
                        closure_129_0.contexts.replay = Object.assign(Object.assign({}, closure_129_0.contexts.replay), obj6);
                      } else {
                        const NATIVE = replay_id(replay_id[2]).NATIVE;
                        replay_id = NATIVE.getCurrentReplayId();
                        const tmp7 = replay_id;
                        if (tmp7) {
                          tmp75(replay_id);
                          const debug2 = replay_id(replay_id[1]).debug;
                          const _HermesInternal2 = HermesInternal;
                          debug2.log("[Sentry] " + MobileReplay + " assign already recording replay " + replay_id + " for event " + closure_129_0.event_id + ".");
                          let contexts1 = closure_129_0.contexts;
                          const tmp27 = closure_129_0;
                          if (!contexts1) {
                            contexts1 = {};
                          }
                          tmp27.contexts = contexts1;
                          const _Object = Object;
                          const _Object2 = Object;
                          const obj7 = { replay_id };
                          closure_129_0.contexts.replay = Object.assign(Object.assign({}, closure_129_0.contexts.replay), obj7);
                        } else {
                          tmp75(null);
                          const debug = replay_id(replay_id[1]).debug;
                          const _HermesInternal = HermesInternal;
                          debug.log("[Sentry] " + MobileReplay + " not sampled for event " + closure_129_0.event_id + ".");
                        }
                      }
                      c5 = 3;
                      const obj10 = { value: closure_129_0, done: true };
                      return obj10;
                    }
                    const NATIVE2 = replay_id(replay_id[2]).NATIVE;
                    const captureReplay = NATIVE2.captureReplay;
                    c4 = 2;
                    c5 = 1;
                    const obj11 = { value: captureReplay(obj9.isHardCrash(closure_129_0)), done: false };
                    obj9 = replay_id(replay_id[3]);
                    return obj11;
                  } catch (tmp75) {
                    if (0 === c3) {
                      c5 = 3;
                      throw tmp75;
                    } else {
                      c4 = 1;
                    }
                  }
                }
              });
            },
        options: merged,
        getReplayId() {
              let tmp = currentReplayId;
              if (null === currentReplayId) {
                const NATIVE = _mod866.NATIVE;
                currentReplayId = NATIVE.getCurrentReplayId();
                tmp = currentReplayId && currentReplayId;
              }
              return tmp;
            }
      };
      return obj2;
    }
  }
  if (typeof mobileReplayIntegrationNoop === "function") {
    let obj3 = {
      name: MobileReplay,
      options,
      getReplayId() {
          return null;
        }
    };
    return obj3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
