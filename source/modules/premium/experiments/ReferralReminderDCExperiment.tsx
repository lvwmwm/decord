// Module ID: 7984
// Function ID: 7985
// Name: apexExperiment
// Dependencies: [1467, 2]
// Exports: useIsReferralReminderDCExperimentEnabled

// Module 7984 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-referral-reminder-dc", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/experiments/ReferralReminderDCExperiment.tsx");

export const ReferralReminderDCExperiment = apexExperiment;
export const useIsReferralReminderDCExperimentEnabled = function useIsReferralReminderDCExperimentEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
