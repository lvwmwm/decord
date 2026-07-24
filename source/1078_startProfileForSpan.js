// Module ID: 1078
// Function ID: 12416
// Name: startProfileForSpan
// Dependencies: [5, 1077, 794, 1048, 1004]
// Exports: startProfileForSpan

// Module 1078 (startProfileForSpan)
import asyncGeneratorStep from "asyncGeneratorStep";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const startProfileForSpan = function startProfileForSpan(rootSpan) {
  const _require = rootSpan;
  function onProfileHandler() {
    return _onProfileHandler(...arguments);
  }
  async function _onProfileHandler() {
    if (obj) {
      return obj.resume();
    } else if (outer2_0) {
      if (outer2_1) {
        if (outer2_3) {
          if (callback(startJSSelfProfileResult[3]).DEBUG_BUILD) {
            let debug = callback(startJSSelfProfileResult[2]).debug;
            debug.log("[Profiling] profile for:", callback(startJSSelfProfileResult[2]).spanToJSON(outer2_0).description, "already exists, returning early");
            let obj2 = callback(startJSSelfProfileResult[2]);
          }
        } else {
          const stopResult = outer2_1.stop();
          return outer2_1.stop().then((arg0) => {
            if (outer3_4) {
              const WINDOW = callback(startJSSelfProfileResult[4]).WINDOW;
              WINDOW.clearTimeout(outer3_4);
              outer3_4 = undefined;
            }
            if (callback(startJSSelfProfileResult[3]).DEBUG_BUILD) {
              const debug = callback(startJSSelfProfileResult[2]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Profiling] stopped profiling of span: " + callback(startJSSelfProfileResult[2]).spanToJSON(outer3_0).description);
              const obj = callback(startJSSelfProfileResult[2]);
            }
            if (arg0) {
              const outer3_3 = arg0;
              const result = callback(startJSSelfProfileResult[1]).addProfileToGlobalCache(outer3_2, arg0);
              const obj3 = callback(startJSSelfProfileResult[1]);
            } else if (callback(startJSSelfProfileResult[3]).DEBUG_BUILD) {
              const debug2 = callback(startJSSelfProfileResult[2]).debug;
              const _HermesInternal2 = HermesInternal;
              debug2.log("[Profiling] profiler returned null profile for: " + callback(startJSSelfProfileResult[2]).spanToJSON(outer3_0).description, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
              const obj2 = callback(startJSSelfProfileResult[2]);
            }
          }).catch((arg0) => {
            if (callback(startJSSelfProfileResult[3]).DEBUG_BUILD) {
              const debug = callback(startJSSelfProfileResult[2]).debug;
              debug.log("[Profiling] error while stopping profiler:", arg0);
            }
          });
        }
      }
    }
  }
  let obj = _require(1077);
  if (obj.isAutomatedPageLoadSpan(rootSpan)) {
    let result = 1000 * _require(794).timestampInSeconds();
    let obj2 = _require(794);
  }
  const startJSSelfProfileResult = _require(1077).startJSSelfProfile();
  const dependencyMap = startJSSelfProfileResult;
  if (startJSSelfProfileResult) {
    if (_require(1048).DEBUG_BUILD) {
      let debug = _require(794).debug;
      let _HermesInternal = HermesInternal;
      debug.log("[Profiling] started profiling span: " + _require(794).spanToJSON(rootSpan).description);
      const obj4 = _require(794);
    }
    const uuid4Result = _require(794).uuid4();
    const asyncGeneratorStep = uuid4Result;
    let c3 = null;
    const obj5 = _require(794);
    const currentScope = _require(794).getCurrentScope();
    obj = { profile_id: uuid4Result, start_timestamp: result };
    currentScope.setContext("profile", obj);
    let WINDOW = _require(1004).WINDOW;
    const timeout = WINDOW.setTimeout(() => {
      if (callback(startJSSelfProfileResult[3]).DEBUG_BUILD) {
        const debug = callback(startJSSelfProfileResult[2]).debug;
        debug.log("[Profiling] max profile duration elapsed, stopping profiling for:", callback(startJSSelfProfileResult[2]).spanToJSON(callback).description);
        const obj = callback(startJSSelfProfileResult[2]);
      }
      onProfileHandler();
    }, _require(1077).MAX_PROFILE_DURATION_MS);
    const end = rootSpan.end;
    let closure_5 = end.bind(rootSpan);
    rootSpan.end = function profilingWrappedSpanEnd() {
      if (closure_0) {
        onProfileHandler().then(() => {
          outer1_5();
        }, () => {
          outer1_5();
        });
        let tmp2 = closure_0;
        const promise = onProfileHandler();
      } else {
        tmp2 = callback2();
      }
      return tmp2;
    };
    const obj6 = _require(794);
  }
};
