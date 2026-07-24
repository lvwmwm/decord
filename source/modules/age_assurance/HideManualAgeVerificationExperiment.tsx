// Module ID: 7618
// Function ID: 60665
// Name: useIsManualAgeVerificationHidden
// Dependencies: [1428, 2]
// Exports: isManualAgeVerificationHidden, useIsManualAgeVerificationHidden

// Module 7618 (useIsManualAgeVerificationHidden)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: { [1]: { isHidden: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = function useIsManualAgeVerificationHidden(age_verification_get_started_modal) {
  return closure_0.useConfig({ location: age_verification_get_started_modal }).isHidden;
};
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  return closure_0.getConfig({ location }).isHidden;
};
