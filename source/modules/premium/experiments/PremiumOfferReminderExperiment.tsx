// Module ID: 12891
// Function ID: 12892
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: isPremiumOfferReminderExperimentEnabled

// Module 12891 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-premium-offer-reminder-xp", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/experiments/PremiumOfferReminderExperiment.tsx");

export const PremiumOfferReminderExperiment = apexExperiment;
export const isPremiumOfferReminderExperimentEnabled = function isPremiumOfferReminderExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
