// Module ID: 13591
// Function ID: 13592
// Name: PremiumMarketingFloatingSubscribeExperiment
// Dependencies: [1452, 2]

// Module 13591 (PremiumMarketingFloatingSubscribeExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-nitro-floating-subscribe", kind: "user", defaultConfig: { enabled: false, showAfterLastCard: false }, variations: { 0: { enabled: false, showAfterLastCard: false }, 1: { enabled: true, showAfterLastCard: false }, 2: { enabled: true, showAfterLastCard: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx");

export default apexExperiment;
