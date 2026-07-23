// Module ID: 8813
// Function ID: 69478
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 8813 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-gift-promotion-reminder", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/gifting/experiments/GiftPromotionReminderExperiment.tsx");

export default apexExperiment;
export const GiftPromotionReminderExperiment = apexExperiment;
