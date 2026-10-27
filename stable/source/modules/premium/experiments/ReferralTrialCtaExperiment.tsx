// Module ID: 9703
// Function ID: 9704
// Name: ReferralTrialCtaExperiment
// Dependencies: [1455, 2]
// Exports: getReferralTrialCtaExperimentEnabled

// Module 9703 (ReferralTrialCtaExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-referral-trial-cta", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/ReferralTrialCtaExperiment.tsx");

export const getReferralTrialCtaExperimentEnabled = function getReferralTrialCtaExperimentEnabled() {
  return config.getConfig({ location: "referral_trial_cta" });
};
