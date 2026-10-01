// Module ID: 794
// Function ID: 795
// Name: featureFlagsIntegration
// Dependencies: [752, 795]

// Module 794 (featureFlagsIntegration)
import _INTERNAL_FLAG_BUFFER_SIZE from "_INTERNAL_FLAG_BUFFER_SIZE" /* 795 */;
import module_752 from "module_752" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = module_752.defineIntegration(() => {
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
