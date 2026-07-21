// Module ID: 7108
// Function ID: 57137
// Name: apexExperiment
// Dependencies: []
// Exports: isPremiumOfferReminderExperimentEnabled

// Module 7108 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/PremiumOfferReminderExperiment.tsx");

export const PremiumOfferReminderExperiment = apexExperiment;
export const isPremiumOfferReminderExperimentEnabled = function isPremiumOfferReminderExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
