// Module ID: 8035
// Function ID: 8036
// Name: HideManualAgeVerificationExperiment
// Dependencies: [1435, 2]
// Exports: isManualAgeVerificationHidden, useIsManualAgeVerificationHidden

// Module 8035 (HideManualAgeVerificationExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { isHidden: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = function useIsManualAgeVerificationHidden(age_verification_get_started_modal) {
  const obj = { location: age_verification_get_started_modal };
  return closure_0.useConfig(obj).isHidden;
};
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  const obj = { location };
  return closure_0.getConfig(obj).isHidden;
};
