// Module ID: 7737
// Function ID: 61495
// Name: apexExperiment
// Dependencies: []
// Exports: useIsReferralReminderDCExperimentEnabled

// Module 7737 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: true, DateToSystemTimezoneSetter: true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/ReferralReminderDCExperiment.tsx");

export const ReferralReminderDCExperiment = apexExperiment;
export const useIsReferralReminderDCExperimentEnabled = function useIsReferralReminderDCExperimentEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
