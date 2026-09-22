// Module ID: 10878
// Function ID: 10879
// Name: GiftingBadgeComplexArtExperiment
// Dependencies: [1433, 2]

// Module 10878 (GiftingBadgeComplexArtExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-gifting-badge-complex-art", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeComplexArtExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeComplexArtExperiment = apexExperiment;
