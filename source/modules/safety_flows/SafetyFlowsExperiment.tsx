// Module ID: 16078
// Function ID: 123520
// Name: isEligibleForSafetyFlowsExperiment
// Dependencies: []
// Exports: isEligibleForSafetyFlowsExperiment, useIsEligibleForSafetyFlowsExperiment

// Module 16078 (isEligibleForSafetyFlowsExperiment)
const obj = { y: true, DateToSystemTimezoneSetter: true, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/safety_flows/SafetyFlowsExperiment.tsx");

export default tmp2;
export const isEligibleForSafetyFlowsExperiment = function isEligibleForSafetyFlowsExperiment(location) {
  return tmp2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForSafetyFlowsExperiment = function useIsEligibleForSafetyFlowsExperiment(location) {
  return tmp2.useConfig({ location: location.location }).enabled;
};
