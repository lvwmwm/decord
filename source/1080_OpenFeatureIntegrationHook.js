// Module ID: 1080
// Function ID: 12427
// Name: OpenFeatureIntegrationHook
// Dependencies: []

// Module 1080 (OpenFeatureIntegrationHook)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[2]);

export const OpenFeatureIntegrationHook = () => {
  class OpenFeatureIntegrationHook {
    constructor() {
      tmp = closure_2(this, OpenFeatureIntegrationHook);
      return;
    }
  }
  const require = OpenFeatureIntegrationHook;
  let obj = {
    key: "after",
    value: function after(arg0, flagKey) {
      const result = OpenFeatureIntegrationHook(closure_1[2])._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.value);
      const obj = OpenFeatureIntegrationHook(closure_1[2]);
      const result1 = OpenFeatureIntegrationHook(closure_1[2])._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.value);
    }
  };
  const items = [obj, ];
  obj = {
    key: "error",
    value: function error(flagKey) {
      const result = OpenFeatureIntegrationHook(closure_1[2])._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.defaultValue);
      const obj = OpenFeatureIntegrationHook(closure_1[2]);
      const result1 = OpenFeatureIntegrationHook(closure_1[2])._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.defaultValue);
    }
  };
  items[1] = obj;
  return callback(OpenFeatureIntegrationHook, items);
}();
export const openFeatureIntegration = _module.defineIntegration(() => ({
  name: "OpenFeature",
  processEvent(contexts) {
    return callback(closure_1[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  }
}));
