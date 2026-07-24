// Module ID: 3892
// Function ID: 32219
// Name: useRive
// Dependencies: [57, 31, 3881]
// Exports: useRive

// Module 3892 (useRive)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
let useCallback;
let require = arg1;
({ useRef: closure_3, useCallback, useState: closure_4 } = result);

export const useRive = function useRive() {
  let obj = require(3881) /* c */;
  const cResult = obj.c(4);
  let tmp2 = callback2(null);
  require = tmp2;
  const tmp3 = callback(callback3(null), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  callback = callback2(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function t0(current) {
      let tmp2 = current;
      if (tmp2.current !== current) {
        tmp2.current = current;
        if (ref.current) {
          let _clearTimeout = clearTimeout;
          tmp2 = ref;
          clearTimeout(ref.current);
        }
        const promise = new Promise((arg0, arg1) => {
          let closure_0 = arg1;
          outer1_2.current = setTimeout(() => {
            const error = new Error("Rive view ready timeout");
            callback(error);
          }, 5000);
        });
        let awaitViewReadyResult;
        if (null != current) {
          awaitViewReadyResult = current.awaitViewReady();
        }
        const items = [awaitViewReadyResult, promise];
        const racePromise = Promise.race(items);
        const nextPromise = Promise.race(items).then((arg0) => {
          if (true === arg0) {
            outer1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            outer1_1(null);
          }
        });
        Promise.race(items).then((arg0) => {
          if (true === arg0) {
            outer1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            outer1_1(null);
          }
        }).catch((arg0) => {
          console.warn("Failed to initialize Rive view:", arg0);
          outer1_1(null);
        }).finally(() => {
          if (outer1_2.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(outer1_2.current);
            outer1_2.current = null;
          }
        });
        const catchPromise = Promise.race(items).then((arg0) => {
          if (true === arg0) {
            outer1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            outer1_1(null);
          }
        }).catch((arg0) => {
          console.warn("Failed to initialize Rive view:", arg0);
          outer1_1(null);
        });
      }
    }
    cResult[0] = t0;
    let first1 = t0;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    obj = { f: first1 };
    cResult[1] = obj;
    let tmp6 = obj;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== first) {
    obj = { riveRef: tmp2, riveViewRef: first, setHybridRef: tmp6 };
    cResult[2] = first;
    cResult[3] = obj;
    let tmp7 = obj;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
};
