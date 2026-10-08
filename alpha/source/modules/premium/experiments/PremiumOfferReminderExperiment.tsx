// Module ID: 13460
// Function ID: 13461
// Name: PremiumOfferReminderExperiment
// Dependencies: [1452, 2]
// Exports: isPremiumOfferReminderExperimentEnabled

// Module 13460 (PremiumOfferReminderExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-premium-offer-reminder-xp", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumOfferReminderExperiment.tsx");

export const PremiumOfferReminderExperiment = apexExperiment;
export const isPremiumOfferReminderExperimentEnabled = function isPremiumOfferReminderExperimentEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj).enabled;
};
