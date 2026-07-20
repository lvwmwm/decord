// Module ID: 1727
// Function ID: 19370
// Name: useHandler
// Dependencies: []
// Exports: useHandler

// Module 1727 (useHandler)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);

export const useHandler = function useHandler(handler, items10) {
  let context;
  let savedDependencies;
  const tmp = callback2(null);
  const require = tmp;
  if (null === tmp.current) {
    let obj = require(dependencyMap[1]);
    obj = {};
    obj.context = obj.makeShareable({});
    obj.savedDependencies = [];
    tmp.current = obj;
  }
  callback(() => () => {
    closure_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10026 in arg0) {
    let tmp15 = key10026;
    let tmp16 = closure_0;
    let tmp17 = closure_1;
    let obj8 = closure_0(closure_1[2]);
    if (obj8.isWorkletFunction(arg0[key10026])) {
      continue;
    } else {
      let tmp5 = closure_0;
      let tmp6 = closure_1;
      let num2 = 3;
      let ReanimatedError = closure_0(closure_1[3]).ReanimatedError;
      let prototype = ReanimatedError.prototype;
      let tmp7 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp8 = new.target;
      let reanimatedError = new ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      let tmp10 = reanimatedError;
      throw reanimatedError;
    }
  }
  const dependencies = require(dependencyMap[4]).buildDependencies(items10, handler);
  const obj3 = require(dependencyMap[4]);
  tmp.current.savedDependencies = dependencies;
  obj = { context, doDependenciesDiffer: !require(dependencyMap[4]).areDependenciesEqual(dependencies, savedDependencies) };
  const obj4 = require(dependencyMap[4]);
  let isWebResult = require(dependencyMap[5]).isWeb();
  if (!isWebResult) {
    isWebResult = require(dependencyMap[5]).isJest();
    const obj7 = require(dependencyMap[5]);
  }
  obj.useWeb = isWebResult;
  return obj;
};
