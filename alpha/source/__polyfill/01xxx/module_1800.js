// Module ID: 1800
// Function ID: 1801
// Dependencies: [19, 1685, 1680, 1666, 1801, 1658]
// Exports: useHandler

// Module 1800
import _mod1658 from "module_1658" /* 1658 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1680 */;
import _mod1685 from "module_1685" /* 1685 */;
import _mod1801 from "module_1801" /* 1801 */;
import react from "react" /* 19 */;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);

export const useHandler = function useHandler(memoizedGestureCallbacks, items10) {
  let context;
  let isWebResult;
  let obj;
  let savedDependencies;
  const tmp = _false(null);
  let closure_0 = tmp;
  if (null === tmp.current) {
    const obj2 = { context: obj.makeShareable({}), savedDependencies: [] };
    tmp.current = obj2;
    obj = _mod1685;
  }
  React2(() => () => {
    closure_1_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in memoizedGestureCallbacks) {
    let tmp12 = require;
    let obj8 = LayoutAnimationType;
    if (obj8.isWorkletFunction(memoizedGestureCallbacks[key10024])) {
      continue;
    } else {
      let self = this;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let self2 = this;
      let reanimatedError = new tmp12(1666).ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const obj3 = _mod1801;
  const dependencies = obj3.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj4 = _mod1801;
  const obj5 = { context, doDependenciesDiffer: !obj4.areDependenciesEqual(dependencies, savedDependencies), useWeb: isWebResult };
  const obj6 = _mod1658;
  isWebResult = obj6.isWeb();
  if (!isWebResult) {
    const tmp7Result = _mod1658;
    isWebResult = tmp7Result.isJest();
  }
  return obj5;
};
