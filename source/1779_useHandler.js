// Module ID: 1779
// Function ID: 1780
// Name: useHandler
// Dependencies: [19, 1664, 1659, 1645, 1780, 1637]
// Exports: useHandler

// Module 1779 (useHandler)
import noop from "noop";

let c3;
let obj1;
({ useEffect: obj1, useRef: c3 } = noop);

export const useHandler = function useHandler(handler, items10) {
  let context;
  let savedDependencies;
  const tmp = callback2(null);
  const require = tmp;
  if (null === tmp.current) {
    let obj = require(1664) /* freezeObjectInDev */;
    obj = { context: null, savedDependencies: null };
    obj[0] = obj.makeShareable({});
    obj[1] = [];
    tmp.current = obj;
  }
  callback(() => () => {
    closure_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in arg0) {
    let tmp13 = key10024;
    let tmp14 = require;
    let tmp15 = dependencyMap;
    let obj8 = require(1659) /* isWorkletFunction */;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new tmp14(1645).ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      let tmp8 = reanimatedError;
      throw reanimatedError;
    }
  }
  const dependencies = require(1780) /* isAnimated */.buildDependencies(items10, handler);
  const obj3 = require(1780) /* isAnimated */;
  const tmp9 = require;
  tmp.current.savedDependencies = dependencies;
  obj = { context, doDependenciesDiffer: !require(1780) /* isAnimated */.areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  const obj4 = require(1780) /* isAnimated */;
  let isWebResult = require(1637) /* isJest */.isWeb();
  if (!isWebResult) {
    isWebResult = tmp9(1637).isJest();
    const tmp9Result = tmp9(1637);
  }
  obj[2] = isWebResult;
  return obj;
};
