// Module ID: 9279
// Function ID: 9280
// Name: PremiumOrbsDeliveredModalExperiment
// Dependencies: [1451, 2]

// Module 9279 (PremiumOrbsDeliveredModalExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-orbs-delivered-modal", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumOrbsDeliveredModalExperiment.tsx");

export default apexExperiment;
