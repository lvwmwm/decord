// Module ID: 12883
// Function ID: 12884
// Name: PremiumOrbsDeliveredModalExperiment
// Dependencies: [1435, 2]

// Module 12883 (PremiumOrbsDeliveredModalExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-orbs-delivered-modal", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumOrbsDeliveredModalExperiment.tsx");

export default apexExperiment;
