// Module ID: 13617
// Function ID: 13618
// Name: PremiumOrbsDeliveredModalExperiment
// Dependencies: [1438, 2]

// Module 13617 (PremiumOrbsDeliveredModalExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-orbs-delivered-modal", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumOrbsDeliveredModalExperiment.tsx");

export default apexExperiment;
