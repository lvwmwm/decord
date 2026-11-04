// Module ID: 793
// Function ID: 794
// Name: featureFlagsIntegration
// Dependencies: [751, 794]

// Module 793 (featureFlagsIntegration)
import _INTERNAL_FLAG_BUFFER_SIZE from "_INTERNAL_FLAG_BUFFER_SIZE" /* 794 */;
import module_751 from "module_751" /* 751 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = module_751.defineIntegration(() => {
  let obj = {
    name: "FeatureFlags",
    processEvent(contexts, arg1, arg2) {
      const obj = _INTERNAL_FLAG_BUFFER_SIZE;
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    },
    addFeatureFlag(flagKey, value) {
      const obj = _INTERNAL_FLAG_BUFFER_SIZE;
      const result = obj._INTERNAL_insertFlagToScope(flagKey, value);
      const obj2 = _INTERNAL_FLAG_BUFFER_SIZE;
      const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(flagKey, value);
    }
  };
  return obj;
});
