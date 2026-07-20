// Module ID: 7732
// Function ID: 61461
// Name: apexExperiment
// Dependencies: []
// Exports: useIsReferralReminderDCExperimentEnabled

// Module 7732 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: false, -1845285747: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/ReferralReminderDCExperiment.tsx");

export const ReferralReminderDCExperiment = apexExperiment;
export const useIsReferralReminderDCExperimentEnabled = function useIsReferralReminderDCExperimentEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
