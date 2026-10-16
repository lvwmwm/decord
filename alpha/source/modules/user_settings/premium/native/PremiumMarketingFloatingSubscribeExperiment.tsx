// Module ID: 14470
// Function ID: 14471
// Name: PremiumMarketingFloatingSubscribeExperiment
// Dependencies: [1455, 2]

// Module 14470 (PremiumMarketingFloatingSubscribeExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-nitro-floating-subscribe", kind: "user", defaultConfig: { enabled: false, showAfterLastCard: false }, variations: { 0: { enabled: false, showAfterLastCard: false }, 1: { enabled: true, showAfterLastCard: false }, 2: { enabled: true, showAfterLastCard: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx");

export default apexExperiment;
