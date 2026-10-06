// Module ID: 10490
// Function ID: 10491
// Name: GiftingBadgeComplexArtExperiment
// Dependencies: [1440, 2]

// Module 10490 (GiftingBadgeComplexArtExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-gifting-badge-complex-art", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeComplexArtExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeComplexArtExperiment = apexExperiment;
