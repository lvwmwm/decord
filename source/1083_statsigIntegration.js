// Module ID: 1083
// Function ID: 12446
// Name: statsigIntegration
// Dependencies: []

// Module 1083 (statsigIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const statsigIntegration = _module.defineIntegration((featureFlagClient) => {
  const require = featureFlagClient.featureFlagClient;
  return {
    name: "Statsig",
    setup(arg0) {
      featureFlagClient.on("gate_evaluation", (gate) => {
        const result = callback(closure_1[0])._INTERNAL_insertFlagToScope(gate.gate.name, gate.gate.value);
        const obj = callback(closure_1[0]);
        const result1 = callback(closure_1[0])._INTERNAL_addFeatureFlagToActiveSpan(gate.gate.name, gate.gate.value);
      });
    },
    processEvent(contexts) {
      return featureFlagClient(closure_1[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
