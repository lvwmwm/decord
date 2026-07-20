// Module ID: 905
// Function ID: 9944
// Name: featureFlagsIntegration
// Dependencies: []

// Module 905 (featureFlagsIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const featureFlagsIntegration = _module.defineIntegration(() => ({
  name: "FeatureFlags",
  processEvent(contexts) {
    return callback(closure_1[1])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
  addFeatureFlag(first, value) {
    const result = callback(closure_1[1])._INTERNAL_insertFlagToScope(first, value);
    const obj = callback(closure_1[1]);
    const result1 = callback(closure_1[1])._INTERNAL_addFeatureFlagToActiveSpan(first, value);
  }
}));
