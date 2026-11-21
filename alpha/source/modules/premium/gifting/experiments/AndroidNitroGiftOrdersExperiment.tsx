// Module ID: 9211
// Function ID: 9212
// Name: AndroidNitroGiftOrdersExperiment
// Dependencies: [1450, 2]

// Module 9211 (AndroidNitroGiftOrdersExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-11-android-nitro-gift-orders", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/AndroidNitroGiftOrdersExperiment.tsx");

export const AndroidNitroGiftOrdersExperiment = apexExperiment;
