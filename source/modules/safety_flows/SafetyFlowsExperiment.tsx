// Module ID: 16242
// Function ID: 126017
// Name: isEligibleForSafetyFlowsExperiment
// Dependencies: [1325, 2]
// Exports: isEligibleForSafetyFlowsExperiment, useIsEligibleForSafetyFlowsExperiment

// Module 16242 (isEligibleForSafetyFlowsExperiment)
const obj = { name: "2026-04-safety-flows", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = require("getUnitId")(obj);
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/safety_flows/SafetyFlowsExperiment.tsx");

export default tmp2;
export const isEligibleForSafetyFlowsExperiment = function isEligibleForSafetyFlowsExperiment(location) {
  return tmp2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForSafetyFlowsExperiment = function useIsEligibleForSafetyFlowsExperiment(location) {
  return tmp2.useConfig({ location: location.location }).enabled;
};
