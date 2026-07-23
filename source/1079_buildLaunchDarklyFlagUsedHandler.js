// Module ID: 1079
// Function ID: 12427
// Name: buildLaunchDarklyFlagUsedHandler
// Dependencies: [794]
// Exports: buildLaunchDarklyFlagUsedHandler

// Module 1079 (buildLaunchDarklyFlagUsedHandler)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildLaunchDarklyFlagUsedHandler = function buildLaunchDarklyFlagUsedHandler() {
  let obj = {
    name: "sentry-flag-auditor",
    type: "flag-used",
    synchronous: true,
    method(first) {
      const result = outer1_0(outer1_1[0])._INTERNAL_insertFlagToScope(first, arg1.value);
      const obj = outer1_0(outer1_1[0]);
      const result1 = outer1_0(outer1_1[0])._INTERNAL_addFeatureFlagToActiveSpan(first, arg1.value);
    }
  };
  return obj;
};
export const launchDarklyIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "LaunchDarkly",
  processEvent(contexts) {
    return outer1_0(outer1_1[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  }
}));
