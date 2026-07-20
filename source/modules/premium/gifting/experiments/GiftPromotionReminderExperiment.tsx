// Module ID: 8801
// Function ID: 69402
// Name: apexExperiment
// Dependencies: []

// Module 8801 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: false, -1845285747: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/gifting/experiments/GiftPromotionReminderExperiment.tsx");

export default apexExperiment;
export const GiftPromotionReminderExperiment = apexExperiment;
