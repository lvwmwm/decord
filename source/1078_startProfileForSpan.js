// Module ID: 1078
// Function ID: 12414
// Name: startProfileForSpan
// Dependencies: []
// Exports: startProfileForSpan

// Module 1078 (startProfileForSpan)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const startProfileForSpan = function startProfileForSpan(rootSpan) {
  const require = rootSpan;
  function onProfileHandler() {
    return _onProfileHandler(...arguments);
  }
  async function _onProfileHandler() {
    if (obj) {
      return obj.resume();
    } else if (callback) {
      if (closure_1) {
        if (closure_3) {
          if (callback(closure_1[3]).DEBUG_BUILD) {
            const debug = callback(closure_1[2]).debug;
            debug.log("[Profiling] profile for:", callback(closure_1[2]).spanToJSON(callback).description, "already exists, returning early");
            const obj2 = callback(closure_1[2]);
          }
        } else {
          const stopResult = closure_1.stop();
          return closure_1.stop().then((arg0) => {
            if (closure_4) {
              const WINDOW = callback(closure_1[4]).WINDOW;
              WINDOW.clearTimeout(closure_4);
              closure_4 = undefined;
            }
            if (callback(closure_1[3]).DEBUG_BUILD) {
              const debug = callback(closure_1[2]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Profiling] stopped profiling of span: " + callback(closure_1[2]).spanToJSON(callback).description);
              const obj = callback(closure_1[2]);
            }
            if (arg0) {
              const result = callback(closure_1[1]).addProfileToGlobalCache(closure_2, arg0);
              const obj3 = callback(closure_1[1]);
            } else if (callback(closure_1[3]).DEBUG_BUILD) {
              const debug2 = callback(closure_1[2]).debug;
              const _HermesInternal2 = HermesInternal;
              debug2.log("[Profiling] profiler returned null profile for: " + callback(closure_1[2]).spanToJSON(callback).description, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
              const obj2 = callback(closure_1[2]);
            }
          }).catch((arg0) => {
            if (callback(closure_1[3]).DEBUG_BUILD) {
              const debug = callback(closure_1[2]).debug;
              debug.log("[Profiling] error while stopping profiler:", arg0);
            }
          });
        }
      }
    }
  }
  let obj = require(dependencyMap[1]);
  if (obj.isAutomatedPageLoadSpan(rootSpan)) {
    const result = 1000 * require(dependencyMap[2]).timestampInSeconds();
    const obj2 = require(dependencyMap[2]);
  }
  const startJSSelfProfileResult = require(dependencyMap[1]).startJSSelfProfile();
  const dependencyMap = startJSSelfProfileResult;
  if (startJSSelfProfileResult) {
    if (require(dependencyMap[3]).DEBUG_BUILD) {
      const debug = require(dependencyMap[2]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Profiling] started profiling span: " + require(dependencyMap[2]).spanToJSON(rootSpan).description);
      const obj4 = require(dependencyMap[2]);
    }
    const uuid4Result = require(dependencyMap[2]).uuid4();
    let closure_2 = uuid4Result;
    let closure_3 = null;
    const obj5 = require(dependencyMap[2]);
    const currentScope = require(dependencyMap[2]).getCurrentScope();
    obj = { profile_id: uuid4Result, start_timestamp: result };
    currentScope.setContext("profile", obj);
    const WINDOW = require(dependencyMap[4]).WINDOW;
    const timeout = WINDOW.setTimeout(() => {
      if (arg0(startJSSelfProfileResult[3]).DEBUG_BUILD) {
        const debug = arg0(startJSSelfProfileResult[2]).debug;
        debug.log("[Profiling] max profile duration elapsed, stopping profiling for:", arg0(startJSSelfProfileResult[2]).spanToJSON(arg0).description);
        const obj = arg0(startJSSelfProfileResult[2]);
      }
      onProfileHandler();
    }, require(dependencyMap[1]).MAX_PROFILE_DURATION_MS);
    const end = rootSpan.end;
    let closure_5 = end.bind(rootSpan);
    rootSpan.end = function profilingWrappedSpanEnd() {
      if (arg0) {
        onProfileHandler().then(() => {
          callback();
        }, () => {
          callback();
        });
        let tmp2 = arg0;
        const promise = onProfileHandler();
      } else {
        tmp2 = callback();
      }
      return tmp2;
    };
    const obj6 = require(dependencyMap[2]);
  }
};
