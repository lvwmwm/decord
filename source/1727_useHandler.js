// Module ID: 1727
// Function ID: 19376
// Name: useHandler
// Dependencies: [31, 1612, 1607, 1593, 1728, 1585]
// Exports: useHandler

// Module 1727 (useHandler)
import result from "result";

let closure_2;
let closure_3;
({ useEffect: closure_2, useRef: closure_3 } = result);

export const useHandler = function useHandler(handler, items10) {
  let context;
  let savedDependencies;
  const tmp = callback2(null);
  const require = tmp;
  if (null === tmp.current) {
    let obj = require(1612) /* isPlainJSObject */;
    obj = {};
    obj.context = obj.makeShareable({});
    obj.savedDependencies = [];
    tmp.current = obj;
  }
  callback(() => () => {
    outer1_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10026 in arg0) {
    let tmp15 = key10026;
    let tmp16 = require;
    let tmp17 = dependencyMap;
    let obj8 = require(1607) /* isWorkletFunction */;
    if (obj8.isWorkletFunction(arg0[key10026])) {
      continue;
    } else {
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let num2 = 3;
      let ReanimatedError = require(1593) /* processStack */.ReanimatedError;
      let prototype = ReanimatedError.prototype;
      let tmp7 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp8 = new.target;
      let reanimatedError = new ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      let tmp10 = reanimatedError;
      throw reanimatedError;
    }
  }
  const dependencies = require(1728) /* buildWorkletsHash */.buildDependencies(items10, handler);
  const obj3 = require(1728) /* buildWorkletsHash */;
  tmp.current.savedDependencies = dependencies;
  obj = { context, doDependenciesDiffer: !require(1728) /* buildWorkletsHash */.areDependenciesEqual(dependencies, savedDependencies) };
  const obj4 = require(1728) /* buildWorkletsHash */;
  let isWebResult = require(1585) /* isJest */.isWeb();
  if (!isWebResult) {
    isWebResult = require(1585) /* isJest */.isJest();
    const obj7 = require(1585) /* isJest */;
  }
  obj.useWeb = isWebResult;
  return obj;
};
