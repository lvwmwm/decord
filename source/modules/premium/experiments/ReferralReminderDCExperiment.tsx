// Module ID: 7736
// Function ID: 61473
// Name: apexExperiment
// Dependencies: []
// Exports: useIsReferralReminderDCExperimentEnabled

// Module 7736 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "RTC_CONNECTION_LOSS_RATE", 0: "handleJoinThreadVoice", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/ReferralReminderDCExperiment.tsx");

export const ReferralReminderDCExperiment = apexExperiment;
export const useIsReferralReminderDCExperimentEnabled = function useIsReferralReminderDCExperimentEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
