// Module ID: 19497
// Function ID: 19498
// Name: SafetyFlowsExperiment
// Dependencies: [1449, 2]
// Exports: isEligibleForSafetyFlowsExperiment, useIsEligibleForSafetyFlowsExperiment

// Module 19497 (SafetyFlowsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-04-safety-flows", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsExperiment.tsx");

export default tmp2;
export function isEligibleForSafetyFlowsExperiment(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj).enabled;
}
export function useIsEligibleForSafetyFlowsExperiment(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
