// Module ID: 8669
// Function ID: 8670
// Name: ReferralTrialCtaExperiment
// Dependencies: [1441, 2]
// Exports: getReferralTrialCtaExperimentEnabled

// Module 8669 (ReferralTrialCtaExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-referral-trial-cta", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/ReferralTrialCtaExperiment.tsx");

export const getReferralTrialCtaExperimentEnabled = function getReferralTrialCtaExperimentEnabled() {
  return config.getConfig({ location: "referral_trial_cta" });
};
