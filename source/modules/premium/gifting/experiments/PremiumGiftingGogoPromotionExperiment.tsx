// Module ID: 10738
// Function ID: 10739
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 10738 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-premium-gifting-gogo-promotion", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/gifting/experiments/PremiumGiftingGogoPromotionExperiment.tsx");

export default apexExperiment;
export const PremiumGiftingGogoPromotionExperiment = apexExperiment;
