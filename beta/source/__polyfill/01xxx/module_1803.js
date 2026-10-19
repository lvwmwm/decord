// Module ID: 1803
// Function ID: 1804
// Dependencies: [19, 1688, 1683, 1669, 1804, 1661]
// Exports: useHandler

// Module 1803
import _mod1661 from "module_1661" /* 1661 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1683 */;
import _mod1688 from "module_1688" /* 1688 */;
import _mod1804 from "module_1804" /* 1804 */;
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
    obj = _mod1688;
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
      let reanimatedError = new tmp12(1669).ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const obj3 = _mod1804;
  const dependencies = obj3.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj4 = _mod1804;
  const obj5 = { context, doDependenciesDiffer: !obj4.areDependenciesEqual(dependencies, savedDependencies), useWeb: isWebResult };
  const obj6 = _mod1661;
  isWebResult = obj6.isWeb();
  if (!isWebResult) {
    const tmp7Result = _mod1661;
    isWebResult = tmp7Result.isJest();
  }
  return obj5;
};
