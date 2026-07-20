// Module ID: 1079
// Function ID: 12422
// Name: buildLaunchDarklyFlagUsedHandler
// Dependencies: []
// Exports: buildLaunchDarklyFlagUsedHandler

// Module 1079 (buildLaunchDarklyFlagUsedHandler)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const buildLaunchDarklyFlagUsedHandler = function buildLaunchDarklyFlagUsedHandler() {
  const obj = {
    url: "name",
    retries: "name",
    oldFormErrors: null,
    method(first) {
      const result = callback(closure_1[0])._INTERNAL_insertFlagToScope(first, arg1.value);
      const obj = callback(closure_1[0]);
      const result1 = callback(closure_1[0])._INTERNAL_addFeatureFlagToActiveSpan(first, arg1.value);
    }
  };
  return obj;
};
export const launchDarklyIntegration = _module.defineIntegration(() => ({
  name: "LaunchDarkly",
  processEvent(contexts) {
    return callback(closure_1[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  }
}));
