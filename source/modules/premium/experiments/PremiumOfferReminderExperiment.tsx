// Module ID: 7107
// Function ID: 57125
// Name: apexExperiment
// Dependencies: []
// Exports: isPremiumOfferReminderExperimentEnabled

// Module 7107 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: false, 0: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/PremiumOfferReminderExperiment.tsx");

export const PremiumOfferReminderExperiment = apexExperiment;
export const isPremiumOfferReminderExperimentEnabled = function isPremiumOfferReminderExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
