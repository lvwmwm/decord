// Module ID: 11079
// Function ID: 11080
// Name: GiftingBadgeComplexArtExperiment
// Dependencies: [1438, 2]

// Module 11079 (GiftingBadgeComplexArtExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-gifting-badge-complex-art", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeComplexArtExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeComplexArtExperiment = apexExperiment;
