// Module ID: 10734
// Function ID: 10735
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 10734 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-premium-gifting-gogo-promotion", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/gifting/experiments/PremiumGiftingGogoPromotionExperiment.tsx");

export default apexExperiment;
export const PremiumGiftingGogoPromotionExperiment = apexExperiment;
