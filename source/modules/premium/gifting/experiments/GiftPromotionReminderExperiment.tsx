// Module ID: 8804
// Function ID: 8805
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 8804 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-gift-promotion-reminder", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/gifting/experiments/GiftPromotionReminderExperiment.tsx");

export default apexExperiment;
export const GiftPromotionReminderExperiment = apexExperiment;
