// Module ID: 16062
// Function ID: 123417
// Name: isEligibleForSafetyFlowsExperiment
// Dependencies: []
// Exports: isEligibleForSafetyFlowsExperiment, useIsEligibleForSafetyFlowsExperiment

// Module 16062 (isEligibleForSafetyFlowsExperiment)
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/safety_flows/SafetyFlowsExperiment.tsx");

export default tmp2;
export const isEligibleForSafetyFlowsExperiment = function isEligibleForSafetyFlowsExperiment(location) {
  return tmp2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForSafetyFlowsExperiment = function useIsEligibleForSafetyFlowsExperiment(location) {
  return tmp2.useConfig({ location: location.location }).enabled;
};
