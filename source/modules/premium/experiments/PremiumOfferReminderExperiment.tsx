// Module ID: 7112
// Function ID: 57195
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isPremiumOfferReminderExperimentEnabled

// Module 7112 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-premium-offer-reminder-xp", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/PremiumOfferReminderExperiment.tsx");

export const PremiumOfferReminderExperiment = apexExperiment;
export const isPremiumOfferReminderExperimentEnabled = function isPremiumOfferReminderExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
