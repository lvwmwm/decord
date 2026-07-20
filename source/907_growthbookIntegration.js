// Module ID: 907
// Function ID: 9955
// Name: growthbookIntegration
// Dependencies: []

// Module 907 (growthbookIntegration)
function _wrapAndCaptureBooleanResult(arg0) {
  const require = arg0;
  return function() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const first = array[0];
    const applyResult = arg0.apply(this, array);
    let tmp4 = "string" === typeof first;
    if (tmp4) {
      tmp4 = "boolean" === typeof applyResult;
    }
    if (tmp4) {
      const result = arg0(closure_1[2])._INTERNAL_insertFlagToScope(first, applyResult);
      const obj = arg0(closure_1[2]);
      const result1 = arg0(closure_1[2])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
      const obj2 = arg0(closure_1[2]);
    }
    return applyResult;
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const growthbookIntegration = _module.defineIntegration((growthbookClass) => {
  const require = growthbookClass.growthbookClass;
  return {
    name: "GrowthBook",
    setupOnce() {
      const prototype = growthbookClass.prototype;
      if ("function" === typeof prototype.isOn) {
        growthbookClass(closure_1[1]).fill(prototype, "isOn", closure_2);
        const obj = growthbookClass(closure_1[1]);
      }
      if ("function" === typeof prototype.getFeatureValue) {
        growthbookClass(closure_1[1]).fill(prototype, "getFeatureValue", closure_2);
        const obj2 = growthbookClass(closure_1[1]);
      }
    },
    processEvent(contexts) {
      return growthbookClass(closure_1[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
