// Module ID: 795
// Function ID: 796
// Name: growthbookIntegration
// Dependencies: [751, 686, 794]

// Module 795 (growthbookIntegration)
import _mod686 from "module_686" /* 686 */;
import _INTERNAL_FLAG_BUFFER_SIZE from "_INTERNAL_FLAG_BUFFER_SIZE" /* 794 */;
import module_751 from "module_751" /* 751 */;

let growthbookClass;

function _wrapAndCaptureBooleanResult(arg0) {
  let closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = closure_0.apply(this, items);
    let tmp3 = typeof first === "string";
    if (typeof first === "string") {
      tmp3 = typeof applyResult === "boolean";
    }
    if (tmp3) {
      const obj = _INTERNAL_FLAG_BUFFER_SIZE;
      const result = obj._INTERNAL_insertFlagToScope(first, applyResult);
      const obj2 = _INTERNAL_FLAG_BUFFER_SIZE;
      const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
    }
    return applyResult;
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const growthbookIntegration = module_751.defineIntegration((growthbookClass) => {
  growthbookClass = growthbookClass.growthbookClass;
  let obj = {
    name: "GrowthBook",
    setupOnce() {
      const prototype = growthbookClass.prototype;
      if (typeof prototype.isOn === "function") {
        const obj = _mod686;
        obj.fill(prototype, "isOn", _wrapAndCaptureBooleanResult);
      }
      if (typeof prototype.getFeatureValue === "function") {
        const obj2 = _mod686;
        obj2.fill(prototype, "getFeatureValue", _wrapAndCaptureBooleanResult);
      }
    },
    processEvent(contexts, arg1, arg2) {
      const obj = growthbookClass(dependencyMap[2]);
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
  return obj;
});
