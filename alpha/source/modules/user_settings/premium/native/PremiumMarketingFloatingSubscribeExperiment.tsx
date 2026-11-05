// Module ID: 15596
// Function ID: 15597
// Name: PremiumMarketingFloatingSubscribeExperiment
// Dependencies: [1449, 2]

// Module 15596 (PremiumMarketingFloatingSubscribeExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-nitro-floating-subscribe", kind: "user", defaultConfig: { enabled: false, showAfterLastCard: false }, variations: { 0: { enabled: false, showAfterLastCard: false }, 1: { enabled: true, showAfterLastCard: false }, 2: { enabled: true, showAfterLastCard: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx");

export default apexExperiment;
