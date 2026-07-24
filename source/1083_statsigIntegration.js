// Module ID: 1083
// Function ID: 12448
// Name: statsigIntegration
// Dependencies: [794]

// Module 1083 (statsigIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const statsigIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClient) => {
  featureFlagClient = featureFlagClient.featureFlagClient;
  return {
    name: "Statsig",
    setup(arg0) {
      featureFlagClient.on("gate_evaluation", (gate) => {
        const result = featureFlagClient(outer2_1[0])._INTERNAL_insertFlagToScope(gate.gate.name, gate.gate.value);
        const obj = featureFlagClient(outer2_1[0]);
        const result1 = featureFlagClient(outer2_1[0])._INTERNAL_addFeatureFlagToActiveSpan(gate.gate.name, gate.gate.value);
      });
    },
    processEvent(contexts) {
      return featureFlagClient(outer1_1[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
