// Module ID: 7046
// Function ID: 7047
// Dependencies: [19]
// Exports: useStableCallback

// Module 7046
import noop from "module_19" /* 19 */;

({ useCallback: closure_0, useEffect: closure_1, useLayoutEffect: c2, useRef: c3 } = noop);

export const useStableCallback = function useStableCallback(current) {
  React3(undefined);
  React2(() => {
    closure_1.current = current;
  });
  framebus(() => () => {
    ref.current = undefined;
  }, []);
  return React(() => {
    const items = [...arguments];
    current = ref.current;
    let applyResult;
    if (current != null) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      applyResult = HermesBuiltin.apply(items1, tmp);
    }
    return applyResult;
  }, []);
};
