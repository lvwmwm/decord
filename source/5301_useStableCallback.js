// Module ID: 5301
// Function ID: 45774
// Name: useStableCallback
// Dependencies: []
// Exports: useStableCallback

// Module 5301 (useStableCallback)
const _module = require(dependencyMap[0]);
({ useCallback: closure_0, useEffect: closure_1, useLayoutEffect: closure_2, useRef: closure_3 } = _module);

export const useStableCallback = function useStableCallback(arg0) {
  const callback = callback3(undefined);
  callback2(() => {
    closure_1.current = arg0;
  });
  callback(() => () => {
    closure_1.current = undefined;
  }, []);
  return arg0(() => {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    let applyResult;
    if (null != ref.current) {
      const current = ref.current;
      applyResult = current.apply(ref, array);
    }
    return applyResult;
  }, []);
};
