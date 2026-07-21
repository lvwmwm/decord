// Module ID: 8805
// Function ID: 69414
// Name: apexExperiment
// Dependencies: []

// Module 8805 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: false, 0: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/gifting/experiments/GiftPromotionReminderExperiment.tsx");

export default apexExperiment;
export const GiftPromotionReminderExperiment = apexExperiment;
