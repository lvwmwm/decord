// Module ID: 7836
// Function ID: 61859
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useIsReferralReminderDCExperimentEnabled

// Module 7836 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-referral-reminder-dc", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/ReferralReminderDCExperiment.tsx");

export const ReferralReminderDCExperiment = apexExperiment;
export const useIsReferralReminderDCExperimentEnabled = function useIsReferralReminderDCExperimentEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
