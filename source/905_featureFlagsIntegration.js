// Module ID: 905
// Function ID: 9949
// Name: featureFlagsIntegration
// Dependencies: [863, 906]

// Module 905 (featureFlagsIntegration)
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = setupIntegration.defineIntegration(() => ({
  name: "FeatureFlags",
  processEvent(contexts) {
    return outer1_0(outer1_1[1])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
  addFeatureFlag(first, value) {
    const result = outer1_0(outer1_1[1])._INTERNAL_insertFlagToScope(first, value);
    const obj = outer1_0(outer1_1[1]);
    const result1 = outer1_0(outer1_1[1])._INTERNAL_addFeatureFlagToActiveSpan(first, value);
  }
}));
