// Module ID: 1783
// Function ID: 1784
// Dependencies: [19, 1668, 1663, 1649, 1784, 1641]
// Exports: useHandler

// Module 1783
import _mod1641 from "module_1641" /* 1641 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1663 */;
import _mod1668 from "module_1668" /* 1668 */;
import _mod1784 from "module_1784" /* 1784 */;
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
    obj = _mod1668;
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
      let reanimatedError = new tmp12(1649).ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const obj3 = _mod1784;
  const dependencies = obj3.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj4 = _mod1784;
  const obj5 = { context, doDependenciesDiffer: !obj4.areDependenciesEqual(dependencies, savedDependencies), useWeb: isWebResult };
  const obj6 = _mod1641;
  isWebResult = obj6.isWeb();
  if (!isWebResult) {
    const tmp7Result = _mod1641;
    isWebResult = tmp7Result.isJest();
  }
  return obj5;
};
