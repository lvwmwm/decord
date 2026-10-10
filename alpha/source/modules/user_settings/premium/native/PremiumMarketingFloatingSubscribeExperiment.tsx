// Module ID: 13734
// Function ID: 13735
// Name: PremiumMarketingFloatingSubscribeExperiment
// Dependencies: [1453, 2]

// Module 13734 (PremiumMarketingFloatingSubscribeExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-nitro-floating-subscribe", kind: "user", defaultConfig: { enabled: false, showAfterLastCard: false }, variations: { 0: { enabled: false, showAfterLastCard: false }, 1: { enabled: true, showAfterLastCard: false }, 2: { enabled: true, showAfterLastCard: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx");

export default apexExperiment;
