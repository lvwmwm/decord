// Module ID: 7550
// Function ID: 60443
// Name: useIsManualAgeVerificationHidden
// Dependencies: []
// Exports: isManualAgeVerificationHidden, useIsManualAgeVerificationHidden

// Module 7550 (useIsManualAgeVerificationHidden)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { isHidden: false }, variations: { [1]: { isHidden: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = function useIsManualAgeVerificationHidden(age_verification_get_started_modal) {
  return closure_0.useConfig({ location: age_verification_get_started_modal }).isHidden;
};
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  return closure_0.getConfig({ location }).isHidden;
};
