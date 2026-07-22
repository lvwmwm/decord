// Module ID: 8806
// Function ID: 69437
// Name: apexExperiment
// Dependencies: []

// Module 8806 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/gifting/experiments/GiftPromotionReminderExperiment.tsx");

export default apexExperiment;
export const GiftPromotionReminderExperiment = apexExperiment;
