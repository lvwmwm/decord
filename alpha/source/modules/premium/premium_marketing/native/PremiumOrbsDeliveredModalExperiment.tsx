// Module ID: 13147
// Function ID: 13148
// Name: PremiumOrbsDeliveredModalExperiment
// Dependencies: [1440, 2]

// Module 13147 (PremiumOrbsDeliveredModalExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-orbs-delivered-modal", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumOrbsDeliveredModalExperiment.tsx");

export default apexExperiment;
