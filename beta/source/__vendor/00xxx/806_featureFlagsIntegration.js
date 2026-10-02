// Module ID: 806
// Function ID: 807
// Name: featureFlagsIntegration
// Dependencies: [764, 807]

// Module 806 (featureFlagsIntegration)
import _INTERNAL_FLAG_BUFFER_SIZE from "_INTERNAL_FLAG_BUFFER_SIZE" /* 807 */;
import module_764 from "module_764" /* 764 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = module_764.defineIntegration(() => {
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
