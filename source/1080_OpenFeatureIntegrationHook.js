// Module ID: 1080
// Function ID: 12433
// Name: OpenFeatureIntegrationHook
// Dependencies: [6, 7, 794]

// Module 1080 (OpenFeatureIntegrationHook)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const OpenFeatureIntegrationHook = (() => {
  class OpenFeatureIntegrationHook {
    constructor() {
      tmp = outer1_2(this, OpenFeatureIntegrationHook);
      return;
    }
  }
  let obj = {
    key: "after",
    value: function after(arg0, flagKey) {
      const result = OpenFeatureIntegrationHook(outer1_1[2])._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.value);
      const obj = OpenFeatureIntegrationHook(outer1_1[2]);
      const result1 = OpenFeatureIntegrationHook(outer1_1[2])._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.value);
    }
  };
  const items = [obj, ];
  obj = {
    key: "error",
    value: function error(flagKey) {
      const result = OpenFeatureIntegrationHook(outer1_1[2])._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.defaultValue);
      const obj = OpenFeatureIntegrationHook(outer1_1[2]);
      const result1 = OpenFeatureIntegrationHook(outer1_1[2])._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.defaultValue);
    }
  };
  items[1] = obj;
  return _defineProperties(OpenFeatureIntegrationHook, items);
})();
export const openFeatureIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "OpenFeature",
  processEvent(contexts) {
    return outer1_0(outer1_1[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  }
}));
