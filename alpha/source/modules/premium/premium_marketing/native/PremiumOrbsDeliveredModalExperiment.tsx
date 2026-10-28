// Module ID: 14913
// Function ID: 14914
// Name: PremiumOrbsDeliveredModalExperiment
// Dependencies: [1452, 2]

// Module 14913 (PremiumOrbsDeliveredModalExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-orbs-delivered-modal", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/PremiumOrbsDeliveredModalExperiment.tsx");

export default apexExperiment;
