// Module ID: 1786
// Function ID: 1787
// Dependencies: [19, 1671, 1666, 1652, 1787, 1644]
// Exports: useHandler

// Module 1786
import _mod1644 from "module_1644" /* 1644 */;
import _mod1666 from "module_1666" /* 1666 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1671 */;
import _mod1787 from "module_1787" /* 1787 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);

export const useHandler = function useHandler(memoizedGestureCallbacks, items10) {
  const tmp = React3(null);
  closure_0 = tmp;
  if (null === tmp.current) {
    const obj2 = { context: freezeObjectInDev.makeShareable({}), savedDependencies: [] };
    tmp.current = obj2;
  }
  React2(() => () => {
    closure_1_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in arg0) {
    let tmp14 = require;
    let obj8 = _mod1666;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new tmp14(1652).ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const dependencies = _mod1787.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = { context, doDependenciesDiffer: !_mod1787.areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  let isWebResult = _mod1644.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1644.isJest();
    const tmp9Result = _mod1644;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};
