// Module ID: 15496
// Function ID: 15497
// Name: SafetyWarningAgeTextExperiment
// Dependencies: [1449, 2]
// Exports: getIsSafetyWarningAgeTextEnabled, useIsSafetyWarningAgeTextEnabled

// Module 15496 (SafetyWarningAgeTextExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-safety-warning-age-text", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/safety_hub/experiments/SafetyWarningAgeTextExperiment.tsx");

export function useIsSafetyWarningAgeTextEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function getIsSafetyWarningAgeTextEnabled(safety_warning_system_message) {
  const obj = { location: safety_warning_system_message };
  return closure_0.getConfig(obj).enabled;
}
