// Module ID: 7113
// Function ID: 57182
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isPremiumOfferReminderExperimentEnabled

// Module 7113 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-premium-offer-reminder-xp", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/PremiumOfferReminderExperiment.tsx");

export const PremiumOfferReminderExperiment = apexExperiment;
export const isPremiumOfferReminderExperimentEnabled = function isPremiumOfferReminderExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
