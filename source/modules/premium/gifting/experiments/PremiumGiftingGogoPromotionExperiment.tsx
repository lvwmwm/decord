// Module ID: 9629
// Function ID: 9630
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 9629 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-premium-gifting-gogo-promotion", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/gifting/experiments/PremiumGiftingGogoPromotionExperiment.tsx");

export default apexExperiment;
export const PremiumGiftingGogoPromotionExperiment = apexExperiment;
