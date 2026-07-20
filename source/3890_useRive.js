// Module ID: 3890
// Function ID: 32206
// Name: useRive
// Dependencies: []
// Exports: useRive

// Module 3890 (useRive)
let useCallback;
let closure_2 = importDefault(dependencyMap[0]);
({ useRef: closure_3, useCallback, useState: closure_4 } = arg1(dependencyMap[1]));

export const useRive = function useRive() {
  let obj = arg1(closure_1[2]);
  const cResult = obj.c(4);
  const tmp2 = callback2(null);
  const arg1 = tmp2;
  const tmp3 = callback(callback3(null), 2);
  const first = tmp3[0];
  closure_1 = tmp3[1];
  const callback = callback2(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function t0(current) {
      let tmp2 = current;
      if (tmp2.current !== current) {
        tmp2.current = current;
        if (ref.current) {
          const _clearTimeout = clearTimeout;
          tmp2 = ref;
          clearTimeout(ref.current);
        }
        const promise = new Promise((arg0, arg1) => {
          arg0 = arg1;
          closure_2.current = setTimeout(() => {
            const error = new Error("Rive view ready timeout");
            arg1(error);
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
            callback(arg0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            callback(null);
          }
        });
        Promise.race(items).then((arg0) => {
          if (true === arg0) {
            callback(arg0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            callback(null);
          }
        }).catch((arg0) => {
          console.warn("Failed to initialize Rive view:", arg0);
          callback(null);
        }).finally(() => {
          if (ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
        });
        const catchPromise = Promise.race(items).then((arg0) => {
          if (true === arg0) {
            callback(arg0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            callback(null);
          }
        }).catch((arg0) => {
          console.warn("Failed to initialize Rive view:", arg0);
          callback(null);
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
