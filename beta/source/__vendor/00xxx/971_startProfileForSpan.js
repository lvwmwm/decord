// Module ID: 971
// Function ID: 972
// Name: startProfileForSpan
// Dependencies: [5, 970, 686, 941, 897]
// Exports: startProfileForSpan

// Module 971 (startProfileForSpan)
import _mod941 from "module_941" /* 941 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const startProfileForSpan = function startProfileForSpan(rootSpan) {
  _require = rootSpan;
  function onProfileHandler() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_7 = async function _onProfileHandler(arg0, value) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          if (rootSpan) {
            if (dependencyMap) {
              if (React3) {
                if (v3(941).DEBUG_BUILD) {
                  let debug = tmp5(686).debug;
                  debug.log("[Profiling] profile for:", tmp5(686).spanToJSON(tmp13).description, "already exists, returning early");
                  const tmp5Result = tmp5(686);
                }
              } else {
                const stopResult = obj.stop();
                v3 = 3;
                const obj4 = {
                  value: obj.stop().then((result) => {
                                if (c4) {
                                  const WINDOW = c0(897).WINDOW;
                                  WINDOW.clearTimeout(c4);
                                  c4 = undefined;
                                }
                                if (c0(941).DEBUG_BUILD) {
                                  const debug = c0(686).debug;
                                  const _HermesInternal = HermesInternal;
                                  debug.log("[Profiling] stopped profiling of span: " + c0(686).spanToJSON(v3).description);
                                  const obj = c0(686);
                                }
                                if (result) {
                                  closure_3 = result;
                                  result = c0(970).addProfileToGlobalCache(closure_1_2, result);
                                  const obj3 = c0(970);
                                } else if (c0(941).DEBUG_BUILD) {
                                  const debug2 = c0(686).debug;
                                  const _HermesInternal2 = HermesInternal;
                                  debug2.log("[Profiling] profiler returned null profile for: " + c0(686).spanToJSON(v3).description, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                                  const obj2 = c0(686);
                                }
                              }).catch((error) => {
                                if (v3(dependencyMap[3]).DEBUG_BUILD) {
                                  const debug = v3(dependencyMap[2]).debug;
                                  debug.log("[Profiling] error while stopping profiler:", error);
                                }
                              }),
                  done: true
                };
                return obj4;
              }
            }
            obj = dependencyMap;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        v3 = tmp;
        throw tmp8;
      }
    }
  };
  if (obj.isAutomatedPageLoadSpan(rootSpan)) {
    let result = 1000 * tmp(686).timestampInSeconds();
    let tmpResult = tmp(686);
  }
  obj = require("module_970");
  const startJSSelfProfileResult = require("module_970").startJSSelfProfile();
  dependencyMap = startJSSelfProfileResult;
  if (startJSSelfProfileResult) {
    if (tmp(941).DEBUG_BUILD) {
      let debug = tmp(686).debug;
      let _HermesInternal = HermesInternal;
      debug.log("[Profiling] started profiling span: " + tmp(686).spanToJSON(rootSpan).description);
      const tmpResult6 = tmp(686);
    }
    const uuid4Result = tmp(686).uuid4();
    asyncGeneratorStep = uuid4Result;
    c3 = null;
    const tmpResult7 = tmp(686);
    const currentScope = tmp(686).getCurrentScope();
    let obj2 = { profile_id: uuid4Result, start_timestamp: result };
    currentScope.setContext("profile", obj2);
    let WINDOW = tmp(897).WINDOW;
    const timeout = WINDOW.setTimeout(() => {
      if (_mod941.DEBUG_BUILD) {
        const debug = tmp(686).debug;
        debug.log("[Profiling] max profile duration elapsed, stopping profiling for:", tmp(686).spanToJSON(closure_0).description);
        const tmpResult = tmp(686);
      }
      onProfileHandler();
    }, tmp(970).MAX_PROFILE_DURATION_MS);
    const end = rootSpan.end;
    closure_5 = end.bind(rootSpan);
    rootSpan.end = function profilingWrappedSpanEnd() {
      if (closure_0) {
        onProfileHandler().then(() => {
          closure_1_5();
        }, () => {
          closure_1_5();
        });
        let tmp3 = tmp;
        const promise = onProfileHandler();
      } else {
        tmp3 = closure_5();
      }
      return tmp3;
    };
    const tmpResult8 = tmp(686);
  }
};
