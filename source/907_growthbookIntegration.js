// Module ID: 907
// Function ID: 9961
// Name: growthbookIntegration
// Dependencies: [863, 799, 906]

// Module 907 (growthbookIntegration)
import setupIntegration from "setupIntegration";

function _wrapAndCaptureBooleanResult(arg0) {
  let closure_0 = arg0;
  return function() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const first = array[0];
    const applyResult = callback.apply(this, array);
    let tmp4 = "string" === typeof first;
    if (tmp4) {
      tmp4 = "boolean" === typeof applyResult;
    }
    if (tmp4) {
      const result = callback(outer1_1[2])._INTERNAL_insertFlagToScope(first, applyResult);
      const obj = callback(outer1_1[2]);
      const result1 = callback(outer1_1[2])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
      const obj2 = callback(outer1_1[2]);
    }
    return applyResult;
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const growthbookIntegration = setupIntegration.defineIntegration((growthbookClass) => {
  growthbookClass = growthbookClass.growthbookClass;
  return {
    name: "GrowthBook",
    setupOnce() {
      const prototype = growthbookClass.prototype;
      if ("function" === typeof prototype.isOn) {
        growthbookClass(outer1_1[1]).fill(prototype, "isOn", outer1_2);
        const obj = growthbookClass(outer1_1[1]);
      }
      if ("function" === typeof prototype.getFeatureValue) {
        growthbookClass(outer1_1[1]).fill(prototype, "getFeatureValue", outer1_2);
        const obj2 = growthbookClass(outer1_1[1]);
      }
    },
    processEvent(contexts) {
      return growthbookClass(outer1_1[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
