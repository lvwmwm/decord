// Module ID: 1081
// Function ID: 12438
// Name: _wrappedIsEnabled
// Dependencies: []

// Module 1081 (_wrappedIsEnabled)
function _wrappedIsEnabled(arg0) {
  const require = arg0;
  return function() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const first = array[0];
    const applyResult = arg0.apply(this, array);
    if ("string" === typeof first) {
      if ("boolean" === typeof applyResult) {
        const result = arg0(closure_1[0])._INTERNAL_insertFlagToScope(first, applyResult);
        const obj = arg0(closure_1[0]);
        const result1 = arg0(closure_1[0])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
        const obj2 = arg0(closure_1[0]);
      }
      return applyResult;
    }
    if (arg0(closure_1[1]).DEBUG_BUILD) {
      const debug = arg0(closure_1[0]).debug;
      const _HermesInternal = HermesInternal;
      debug.error("[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: " + first + " (" + tmp4 + "), result: " + applyResult + " (" + typeof applyResult + ")");
    }
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const unleashIntegration = _module.defineIntegration((featureFlagClientClass) => {
  const require = featureFlagClientClass.featureFlagClientClass;
  return {
    name: "Unleash",
    setupOnce() {
      featureFlagClientClass(closure_1[0]).fill(featureFlagClientClass.prototype, "isEnabled", closure_2);
    },
    processEvent(contexts) {
      return featureFlagClientClass(closure_1[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
